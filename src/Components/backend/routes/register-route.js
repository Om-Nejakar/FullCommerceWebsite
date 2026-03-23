const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const Register = require('./modals/register-modal');

router.post("/", async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: "Request body missing" });
    }

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "Name, email and password are required" });
    }

    try {
        const existingUser = await Register.findOne({
            $or: [{ email: email.toLowerCase() }, { name: name }]
        });

        if (existingUser) {
            if (existingUser.email === email.toLowerCase()) {
                return res.status(400).json({ error: "User with this email already exists" });
            }
            if (existingUser.name === name) {
                return res.status(400).json({ error: "User with this name already exists" });
            }
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new Register({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });

    } catch (err) {
        console.error("Error in Registration:", err);

        if (err.code === 11000) {
            return res.status(400).json({ error: "User with this name or email already exists" });
        }

        res.status(500).json({ error: "Failed to save the new user" });
    }
});

module.exports = router;
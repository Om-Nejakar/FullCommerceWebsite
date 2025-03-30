const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Register = require('./modals/register-modal');



const app = express();
app.use(bodyParser.json());


router.post("/", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await Register.findOne({ $or: [{email},{name}] });
        if (existingUser) {
            if(existingUser.email === email)
            {
                return res.status(400).json({ error: "User with this email already exists" });
            }
            if(existingUser.name === name)
            {
                return res.status(400).json({ error: "User with this name already exists" });
            }
            
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new Register({ name, email, password:hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });

    } catch (err) {
        console.error("Error in Registration:", err);

        // Handle MongoDB duplicate key error
        if (err.code === 11000) {
            return res.status(400).json({ error: "User with this name or email already exists" });
        }

        res.status(500).json({ error: "Failed to save the new user" });
    }
});

module.exports = router; //used for the modals to export to the further components 
    // =router is used for the exporting the express routers
const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model("Register", registerSchema);
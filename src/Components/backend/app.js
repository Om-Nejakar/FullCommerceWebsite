const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config()

const port = process.env.PORT || 5000;

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true
}));

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected");

        const Register = require("./routes/register-route.js");
        const Login = require("./routes/login-route.js");
        const Review = require("./routes/review-route.js");

        app.use("/register", Register);
        app.use("/login", Login);
        app.use("/review", Review);

        app.listen(port, () => {
            console.log(`Server running at port ${port}`);
        });

    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
    }
}

startServer();

mongoose.connection.on('error', err => {
    console.error('MongoDB runtime error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
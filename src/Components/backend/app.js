const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

async function startServer() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Bacola");

        console.log("MongoDB connected");

        const Register = require("./routes/register-route.js");
        const Login = require("./routes/login-route.js");
        const Review = require("./routes/review-route.js");

        app.use("/register", Register);
        app.use("/login", Login);
        app.use("/review", Review);

        app.listen(5000, () => {
            console.log("Server running at port 5000");
        });

    } catch (err) {
        console.log(err);
    }
}

startServer();

mongoose.connection.on('error', err => {
    console.error('MongoDB runtime error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
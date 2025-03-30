const cookieParser = require("cookie-parser");
const express = require('express');
const mongoose = require('mongoose');
const Review = require('../../routes/review-route'); // Ensure the path is correct
const Register = require('../../routes/register-route');
const Login = require('../../routes/login-route');

const cors = require('cors');
const app = express(); 
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json()); // Automatically parses JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded bodies

mongoose.connect('mongodb://localhost:27017/Bacola')
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use("/review", Review);
app.use("/login",Login);
app.use("/register",Register);

// app.get("/",async (req,res)=>
// {
//     res.cookie("name","omnejakar");
//     res.send("set the cookies done")
// })
// app.get("/read",(req,res)=>
// {
//     console.log(req.cookies);
//     res.send("i am in read page")
// })

app.listen(5000, () => {
    console.log("Server is running at port 5000");
});

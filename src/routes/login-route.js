const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const Register = require('./modals/register-modal');
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");

app = express();
app.use(cookieParser());

router.get("/", async (req, res) => {
    const token = req.cookies.token; // Get token from cookies
    // console.log(token);
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token found" });
    }

    try {
        const decoded = jwt.verify(token, 'secret'); //  Decode JWT
        const email = decoded.email;
        const UserInfo = await Register.findOne({email});

        res.json({ name: UserInfo.name, email: UserInfo.email }); // Send user data
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
});

router.post("/", async (req, res) => {
    const { email, password } = req.body;
    const textPassword = password;
    
    try {

        const user = await Register.findOne({ email:email });
        console.log("User found in DB:", user); // Check if user exists

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }
        
        const result = await bcrypt.compare(textPassword, user.password);
        if(!result)
        {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // after verification of the user setting the cookie
        // verification of the user by jwt will be done on particular pages like profile of authentication
        var token = jwt.sign({ email:email }, 'secret');
        // console.log("my token is")
        // console.log(token);
        res.clearCookie("token"); //clearing old cookies
        res.cookie("token",token);
        res.status(200).json({ message: "Login successful" });
    } catch (err) {
        console.error("Login error:", err); // Log error details
        res.status(500).json({ error: "Server error" });
    }
});

router.get("/auth",(req,res) =>
{
    const token = req.cookies.token;

    if(!token)
    {
        return res.status(401).json({message:"not authenticated"});
    }
    try{
        //verification of the cookie 
        var decoded = jwt.verify(token , 'secret');
        // console.log("here is my decoded ");
        // console.log(decoded);
        // console.log("Login Attempt:", { email, password }); // Debugging

        console.log(decoded);
        res.status(200).json({user:decoded});  //here user is giving hence at picking side decode.user id done 
    }catch(err)
    {
        return res.status(401).json({message:"invalid token"});
    }
})

router.post("/auth/logout",(req,res)=>
{
    res.clearCookie("token",{ httpOnly: true, secure: true, sameSite: "Strict" });
    res.json({message:"logged out successfully"})
})

module.exports = router;  //used for the routers ,and not for the modals 
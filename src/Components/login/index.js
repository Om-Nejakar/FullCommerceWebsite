import {useState} from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Header from "../Header";


function Login()
{
    const Navigate = useNavigate();

    const [user,setUser] = useState({
        email:'',
        password:''
    });

    const LoginUser = {
        email: user.email,
        password: user.password
    };
    

    function handleChange(e)
    {
        setUser({...user , [e.target.name] : e.target.value })
    }
    async function handleSubmit(e)
    {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:5000/login",{
                method : "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(LoginUser),
                credentials: "include" //for allowing of the cookies fetch becs frontend cant directly fetch that 
            });
            const data = await response.json(); // Get response JSON

            if (response.status === 400) {
                alert("User not found. Please register.");
            } else if (response.status === 401) {
                alert("Password is incorrect.");
            } else if (response.status === 200) {
                alert("Login successful!");
                Navigate("/"); // Redirect to home page
            } else {
                alert(data.error || "An unexpected error occurred.");
            }
        } catch (err) {
            console.error("Login error:", err);
            alert("Something went wrong. Please try again later.");
        }
        

    }
     

    return (
        <>
        <Header />
        <form onSubmit={handleSubmit}>
            <div className="login-portal">
                <div className="login-section">
                    <div className="heading">
                        <h3>Login</h3>
                    </div>
                    <div className="input">
                        <input type="email"
                            onChange={handleChange}
                            name="email"
                            value={user.email}
                            className="mt-4 mb-4 "
                            placeholder="Email"
                        />
                        <input type="password"
                            onChange={handleChange}
                            name="password"
                            value={user.password}
                            placeholder="password"
                        />
                    </div>
                    <div className="buttons">
                        <Button className="button123" type="submit">Verify</Button>
                        <Link to="/register"> <Button className="button123 ms-4" >Register</Button></Link>
                    </div>

                    
                    
                </div>
                
            </div>
        </form>
        
        
        </>
    )
}

export default Login;
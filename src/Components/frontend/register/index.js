import {useState} from "react";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

function Register()
{
    const navigate = useNavigate();
    const [user,setUser] = useState({
        name:'',
        email:'',
        password:''
    });

    function handleChange(e)
    {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));

    }

    async function handleSubmit(e) {
        e.preventDefault(); // ✅ Fix 1: Add 'e' parameter
    
        const newUser = {
            name: user.name,
            email: user.email,
            password: user.password, // ✅ Fix 2: Correct key
        };
    
        try {
            const response = await fetch("https://fullcommercewebsite.onrender.com/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            });
    
            if (!response.ok) {
                if(response.status === 400)
                {
                    let errmessg = await response.json();
                    alert(errmessg.error);
                }
                if(response.status === 500)
                {
                    alert("there is some error in registration")
                }
                
                
            }
            else {
                const result = await response.json();
                alert("User registered successfully")
                navigate("/login")
                console.log("Registration Success:", result);
            }
    
            
        } catch (err) {
            console.error("Error:", err);
        }
    }
    

     

    return (
        <>
        <form onSubmit={handleSubmit} >
            <div className="login-portal">
                <div className="login-section">
                    <div className="heading">
                        <h3>Register</h3>
                    </div>
                    <div className="input">

                    

                        <input type="text"
                            onChange={handleChange}
                            name="name"
                            value={user.name}
                            className="mt-4 mb-4 "
                            placeholder="Name"
                            required
                        />
                        <input type="email"
                            onChange={handleChange}
                            name="email"
                            value={user.email}
                            className="mt-4 mb-4 "
                            placeholder="Email"
                            required
                        />
                        <input 
                            type="password"  // ✅ Secure input type
                            onChange={handleChange}
                            name="password"
                            value={user.password}
                            placeholder="password"
                            required
                        />

                    </div>
                    <div className="button-reg">
                        <Button type="submit">Register</Button>
                    </div>
                    
                
                </div>
            </div>
        </form>
        </>
    )
}

export default Register;
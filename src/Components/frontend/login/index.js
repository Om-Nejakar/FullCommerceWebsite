import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import { account } from "./appwrite";

function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const LoginUser = {
        email: user.email,
        password: user.password
    };

    // Check if user is already logged in (Appwrite session)
    useEffect(() => {
        const checkSession = async () => {
            try {
                await account.get(); // If user session exists
                navigate("/");       // Redirect to home
            } catch {
                // No session, do nothing
            }
        };
        checkSession();
    }, [navigate]);

    // Handle Google OAuth login
    function handleLogin() {
        account.createOAuth2Session(
            'google',
            window.location.origin + '/',          // success redirect
            window.location.origin + '/fail'       // failure redirect
        );
    }

    // Handle input change
    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    // Handle form submit (email/password login)
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch("https://fullcommercewebsite.onrender.com/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(LoginUser),
                credentials: "include" // To allow cookies
            });
            const data = await response.json();

            if (response.status === 400) {
                alert("User not found. Please register.");
            } else if (response.status === 401) {
                alert("Password is incorrect.");
            } else if (response.status === 200) {
                alert("Login successful!");
                navigate("/"); // Redirect to home page
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
                            <input
                                type="email"
                                onChange={handleChange}
                                name="email"
                                value={user.email}
                                className="mt-4 mb-4"
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                onChange={handleChange}
                                name="password"
                                value={user.password}
                                placeholder="Password"
                            />
                        </div>
                        <div className="buttons">
                            <Button className="button123" type="submit">Verify</Button>
                            <Link to="/register">
                                <Button className="button123 ms-4">Register</Button>
                            </Link>
                        </div>
                        <div className="buttons">
                            <Button onClick={handleLogin}>Login with Google</Button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Login;

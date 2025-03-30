import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logout from "../logout";
import Header from "../Header";

function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null); // ✅ Store user details

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("http://localhost:5000/login", {
                    method: "GET",
                    credentials: "include", // ✅ Send cookies with request
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user");
                }

                const data = await response.json();
                setUser(data); // ✅ Store user info
            } catch (error) {
                console.error("Error fetching user:", error);
                navigate("/login"); // Redirect if not authenticated
            }
        };

        fetchUser();
    }, [navigate]); // ✅ Runs when component mounts

    const handleLogout = async () => {
        await logout();
        navigate("/login"); // ✅ Redirect to login
    };

    return (
        <>
        <Header />
        <div className="main-container-profile">
            <div className="profile-container">
                <h1>Profile Page</h1>
                {user ? (
                    <div className="profile-info">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>
                ) : (
                    <p>Loading user details...</p>
                )}
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
        </div>
        </>
    );
    
}

export default Profile;

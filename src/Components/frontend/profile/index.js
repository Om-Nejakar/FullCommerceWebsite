import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../login/appwrite"; // Appwrite account object
import logout from "../logout";
import Header from "../Header";

function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // 1. Try fetching Appwrite (Google OAuth) user session
                const appwriteUser = await account.get();
                console.log(appwriteUser);

                setUser({
                    name: appwriteUser.name || "Google User",
                    email: appwriteUser.email
                });
            } catch (error) {
                console.warn("No Appwrite session found. Checking backend session...");

                // 2. Fallback to backend login session
                try {
                    const response = await fetch("http://localhost:5000/login", {
                        method: "GET",
                        credentials: "include", // Send cookies with request
                    });

                    if (!response.ok) throw new Error("No backend session");

                    const data = await response.json();
                    setUser(data);
                } catch (backendError) {
                    console.error("Error fetching user:", backendError);
                    navigate("/login"); // Redirect if no session found
                }
            }
        };

        fetchUser();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await account.deleteSession("current"); // Logout from Appwrite
        } catch (err) {
            console.warn("No Appwrite session to delete");
        }
        await logout(); // Logout from backend
        navigate("/login");
    };

    return (
        <>
            {/* <Header /> */}
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

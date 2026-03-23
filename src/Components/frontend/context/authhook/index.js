// src/context/authhook.js
import { useEffect, useState } from "react";
import { account } from "../../login/appwrite";

function Auth() {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Check Appwrite session
                await account.get(); /*return exception if the session is not present */
                setIsAuthenticated(true);
            } catch (error) {
                //  Check backend login
                try {
                    const res = await fetch("https://fullcommercewebsite.onrender.com/login", {
                        method: "GET",
                        credentials: "include"
                    });
                    if (res.ok) {
                        setIsAuthenticated(true);
                    } else {
                        setIsAuthenticated(false);
                    }
                } catch (err) {
                    setIsAuthenticated(false);
                }
            }
        };
        checkAuth();
    }, []);

    return isAuthenticated;
}

export default Auth;

import {useState , useEffect} from "react";

function Auth()
{
    const [isAuthenticated , setIsAuthenticated] = useState(null);

    useEffect(()=>
    {
        async function checkAuth()
        {
            try{
                const response = await fetch("http://localhost:5000/login/auth" , {
                    method:"Get",
                    credentials:"include",
                });
                const data = await response.json();

                setIsAuthenticated(data.user?true:false);
            }
            catch(err)
            {
                setIsAuthenticated(false);
            }
            
        };
        checkAuth();
        
    },[]);
    return isAuthenticated;
}

export default Auth;


const logout = async () =>
{
    try{
        const response = await fetch("http://localhost:5000/login/auth/logout" ,{
            method:"POST",
            credentials:"include"
        });
        const data = await response.json();
        
        return data.message;
    }
    catch(err)
    {
        console.log(err);
        return null;
    }
}

export default logout;


const logout = async () =>
{
    try{
        const response = await fetch("https://fullcommercewebsite.onrender.com/login/auth/logout" ,{
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
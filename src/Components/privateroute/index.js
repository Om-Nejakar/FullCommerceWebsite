import {Navigate , Outlet } from "react-router-dom";
import Auth from "../context/authhook";

const PrivateRoute = () =>
{
    const isAuthenticated = Auth();  //isAuthencticated is the return value returned by the Auth function

    if(isAuthenticated === null) return <p>Loading...</p>

    return isAuthenticated ? <Outlet />:<Navigate to="/login" />
};

export default PrivateRoute;
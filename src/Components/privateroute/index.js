import { Navigate, Outlet } from "react-router-dom";
import Auth from "../context/authhook";

const PrivateRoute = () => {
    const isAuthenticated = Auth();

    if (isAuthenticated === null) return <p>Loading...</p>;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />; /*outlet call the children present under the private route in app.js*/
};

export default PrivateRoute;

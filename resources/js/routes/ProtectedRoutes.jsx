import { Navigate } from "react-router-dom";
import { cookieName } from "../cookies/GetCookies";

export default function ProtectedRoutes({ children, allowedRoles }) {
    const storedUser = cookieName('rl')
    const user = storedUser ? storedUser: null;
    console.log(user);
    

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user)) {
        return <Navigate to={"/"} />;
    }
    if (allowedRoles && !allowedRoles.includes(user)) {
        return <Navigate to={"/admin-dashboard"} />;
    }

    return children;
}

import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children, allowedRoles }) {
    const storedUser = window.localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;

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

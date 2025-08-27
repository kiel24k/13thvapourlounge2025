import { Navigate } from "react-router-dom";

import Loader1 from "../loaders/Loader1";
import { useEffect, useState } from "react";

export default function GuestRoutes({ children }) {
    const storedUser = window.localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false);
        }, 2000);
        return () => clearTimeout(timer);
    });

   

    if (user) {
        if (user === "admin") {
            return <Navigate to={"/admin-dashboard"} replace />;
        }
        return children;
    }
    return children;
}

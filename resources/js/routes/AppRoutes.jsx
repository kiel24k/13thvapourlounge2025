import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Homepage from "../pages/user/Homepage";
import Login from "../pages/user/Login";
import Signup from "../pages/user/Signup";
import Items from "../pages/user/Items";
import ViewItem from "../pages/user/ViewItem";
import ShoppingCart from "../pages/user/ShoppingCart";
import Checkout from "../pages/user/Checkout";
import AdminLayout from "../layouts/AdminLayout";
import Index from "../pages/admin/Index";
import ContentManagement from "../pages/admin/ContentManagement";
import Testing from "../pages/user/testing";

const routes = createBrowserRouter([
    {
        element: <UserLayout />,
        path: "/",
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
            {
                path: "items",
                element: <Items />,
            },
            {
                path: "view-item",
                element: <ViewItem />,
            },
            {
                path: "shopping-cart",
                element: <ShoppingCart />,
            },
            {
                path: "checkout",
                element: <Checkout />,
            },
            {
                path: "testing",
                element: <Testing />,
            },
        ],
    },
    {
        element: <AdminLayout />,
        children: [
            {
                element: <Index />,
                path: "admin-dashboard",
            },
            {
                element: <ContentManagement />,
                path: "content-management",
            },
        ],
    },
]);

export default routes;

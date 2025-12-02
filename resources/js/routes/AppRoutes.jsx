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
import ProtectedRoutes from "./ProtectedRoutes";
import GuestRoutes from "./GuestRoutes";
import AdminList from "../pages/admin/AdminList";
import EditUser from "../pages/admin/EditUser";
import CreateAdmin from "../pages/admin/CreateAdmin";
import ProductList from "../pages/admin/Products/ProductList";
import Categories from "../pages/admin/Products/Categories";
import Descriptions from "../pages/admin/Products/Descriptions";
import Options from "../pages/admin/Products/Options";
import NewProduct from "../pages/admin/Products/NewProduct";
import ScrollToTop from "../components/scrolltotop";
import Orders from "../pages/admin/Orders";
import CreateAddress from "../pages/user/CreateAddress";
import Home from "../pages/Pos/Home";
import PosLayout from "../layouts/PosLayout";

const routes = createBrowserRouter([
    {
        element: (
            <GuestRoutes>
                <UserLayout />
            </GuestRoutes>
        ),
        path: "/",
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: "login",
                element: (
                    <GuestRoutes>
                        <Login />
                    </GuestRoutes>
                ),
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
                path: "view-item/:id",
                element: <ViewItem />,
            },
            {
                path: "shopping-cart",
                element: (
                    <ProtectedRoutes allowedRoles={["staff"]}>
                        <ShoppingCart />
                    </ProtectedRoutes>
                ),
            },
            {
                path: "checkout",
                element: (
                    <ProtectedRoutes allowedRoles={["staff"]}>
                        <Checkout />
                    </ProtectedRoutes>
                ),
            },
            {
                path: "create-address",
                element: (
                    <ProtectedRoutes allowedRoles={["staff"]}>
                        <CreateAddress />
                    </ProtectedRoutes>
                ),
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
                path: "admin-dashboard",
                element: (
                    <ProtectedRoutes allowedRoles={["admin"]}>
                        <Index />
                    </ProtectedRoutes>
                ),
            },
            {
                path: "content-management",
                element: (
                    <ProtectedRoutes allowedRoles={["admin"]}>
                        <ContentManagement />
                    </ProtectedRoutes>
                ),
            },
            {
                path: "admin-list",
                element: (
                    <ProtectedRoutes allowedRoles={["admin"]}>
                        <AdminList />
                    </ProtectedRoutes>
                ),
            },
            {
                path: "admin-edit-user/:id",
                element: (
                    <ProtectedRoutes allowedRoles={["admin"]}>
                        <EditUser />
                    </ProtectedRoutes>
                ),
            },
            {
                path: "admin-create-admin",
                element: (
                    <ProtectedRoutes allowedRoles={["admin"]}>
                        <CreateAdmin />
                    </ProtectedRoutes>
                ),
            },
            {
                path: "admin-product-list",
                element: (
                    <ProtectedRoutes allowedRoles={["admin"]}>
                        <ProductList />
                    </ProtectedRoutes>
                ),
            },
            {
                path: "admin-categories",
                element: (
                    <ProtectedRoutes allowedRoles={["admin"]}>
                        <Categories />
                    </ProtectedRoutes>
                ),
            },
            {
                path: "admin-descriptions",
                element: (
                    <ProtectedRoutes allowedRoles={["admin"]}>
                        <Descriptions />
                    </ProtectedRoutes>
                ),
            },
            {
                path: "admin-options",
                element: (
                    <ProtectedRoutes allowedRoles={["admin"]}>
                        <Options />
                    </ProtectedRoutes>
                ),
            },
            {
                path: "admin-new-product",
                element: (
                    <ProtectedRoutes allowedRoles={["admin"]}>
                        <NewProduct />
                    </ProtectedRoutes>
                ),
            },
            {
                path: "admin-orders",
                element: (
                    <ProtectedRoutes allowedRoles={["admin"]}>
                        <Orders />
                    </ProtectedRoutes>
                ),
            },
        ],
    },
    //admin and staff
    {
        element: <PosLayout />,
        children: [
            {
                path: "pos",
                element: (
                    <ProtectedRoutes allowedRoles={["admin", "staff"]}>
                        <Home />
                    </ProtectedRoutes>
                ),
            },
        ],
    },
]);

export default routes;

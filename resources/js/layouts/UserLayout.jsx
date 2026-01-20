import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

import UserFooter from "../components/UserFooter";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import UserSidebar from "../components/UserSidebar";
import CartBox from "../components/CartBox";
import ScrollToTop from "../components/scrolltotop";
import AccountMenu from "../pages/user/components/Menu/AccountMenu";
import { cookieName } from "../cookies/GetCookies";
import { useGetProductCategory } from "../hooks/useProducts";
import { useGetAuthUser } from "../hooks/useUsers";
import { showCartById } from "../api/cart.api";
import { useShowCartById } from "../hooks/useCart";

const RootLayout = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCartBox, setIsCartBox] = useState(false);
    const { data: product_category } = useGetProductCategory();
    const { data: user } = useGetAuthUser();

    const { data: showCartById } = useShowCartById(user?.id);

    const handleSidebar = () => setIsSidebarOpen(true);
    const handleCartBox = () => setIsCartBox((prev) => !prev);

    useEffect(() => {
        const cookieInterval = setInterval(() => {
            const cookie = cookieName("rl");
            if (cookie === "customer") {
                setIsLogin(true);
                clearInterval(cookieInterval);
            } else {
                setIsLogin(false);
            }
        }, 2000);
    }, []);

    return (
        <>
            <ScrollToTop />
            {/* Warning Header */}
            <header className="bg-yellow-100 text-center py-2 border-b">
                <h1 className="font-semibold text-sm sm:text-md px-2">
                    Warning: This product contains nicotine. Nicotine is an
                    addictive chemical.
                </h1>
            </header>

            {/* Desktop Navbar */}
            <nav className="hidden md:block sticky top-0 z-50 bg-white shadow">
                <div className="flex justify-between items-center px-6 py-4 border-b">
                    {/* Logo */}
                    <Link to="/">
                        <img
                            src="/images/1764533481_lost_vape_centaurus_b80_aio_kit_-_default.png"
                            alt="logo"
                            className="w-8 h-8"
                        />
                    </Link>
                    {/* User & Cart */}
                    <div className="flex items-center gap-4">
                        {!isLogin ? (
                            <NavLink to="login">
                                <PersonIcon
                                    fontSize="large"
                                    className="text-gray-700 hover:text-gray-900"
                                />
                            </NavLink>
                        ) : (
                            <AccountMenu />
                        )}
                        <span
                            className="cursor-pointer"
                            onClick={handleCartBox}
                        >
                            <Badge badgeContent={showCartById?.length} color="warning">
                                <ShoppingCartIcon
                                    fontSize="large"
                                    className="text-gray-700"
                                />
                            </Badge>
                        </span>
                        {isCartBox && <CartBox />}
                    </div>
                </div>

                {/* Product Categories */}
                <div className="flex overflow-x-auto gap-4 px-6 py-3 bg-gray-50 uppercase font-bold text-sm justify-center">
                    {product_category?.map((category) => (
                        <Link
                            key={category.id}
                            to={`/view-item/${category.product_category}/`}
                            className="whitespace-nowrap hover:text-blue-600 transition"
                            reloadDocument
                        >
                            {category.product_category}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="block md:hidden sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow">
                <div className="flex justify-between items-center px-4 py-3">
                    <div className="flex items-center gap-3">
                        <MenuRoundedIcon
                            className="cursor-pointer"
                            onClick={handleSidebar}
                        />
                        {isSidebarOpen && (
                            <UserSidebar
                                closeSidebar={() => setIsSidebarOpen(false)}
                            />
                        )}
                        <SearchIcon className="text-gray-700" />
                    </div>

                    <Link to="/">
                        <img
                            src="/images/ShopIcon.png"
                            alt="logo"
                            className="w-16 h-16 object-contain"
                        />
                    </Link>

                    <div className="flex items-center gap-3">
                        <NavLink to="login">
                            <PersonIcon
                                fontSize="medium"
                                className="text-gray-700"
                            />
                        </NavLink>
                        <span
                            className="cursor-pointer"
                            onClick={handleCartBox}
                        >
                            <Badge badgeContent={4} color="warning">
                                <ShoppingCartIcon
                                    fontSize="large"
                                    className="text-gray-700"
                                />
                            </Badge>
                        </span>
                        {isCartBox && <CartBox />}
                    </div>
                </div>

                {/* Mobile Categories */}
                <div className="flex overflow-x-auto gap-3 px-4 py-2 bg-gray-50 font-bold text-sm">
                    {product_category?.map((category) => (
                        <Link
                            key={category.id}
                            to={`/view-item/${category.product_category}/`}
                            className="whitespace-nowrap hover:text-blue-600 transition"
                            reloadDocument
                        >
                            {category.product_category}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Main Content */}
            <main className="px-4 py-6">
                <Outlet />
            </main>

            {/* Footer */}
            <footer>
                <UserFooter />
            </footer>
        </>
    );
};

export default RootLayout;

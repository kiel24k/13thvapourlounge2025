import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Input from "@mui/material/Input";

import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

import UserFooter from "../components/UserFooter";
import FadeInSection from "../components/FadeInSection";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import UserSidebar from "../components/UserSidebar";
import DropdownMenu from "../components/DropdownMenu";
import CartBox from "../components/CartBox";

const RootLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCartBox, setIsCartBox] = useState(false);

    const handleSidebar = () => {
        setIsSidebarOpen(true);
    };

    const handleCartBox = () => {
        if (!isCartBox) {
            setIsCartBox(true);
        } else {
            setIsCartBox(false);
        }
    };

    return (
        <>
            <header>
                <div className="border-b-3 p-2 text-center">
                    <h1 className="font-semibold text-md">
                        Warning: This product contains nicotine. Nicotine is an
                        addictive chemical.
                    </h1>
                </div>
            </header>

            <nav className="hidden md:block sticky top-0 z-99  bg-white">
                <div className="flex justify-center items-center border-b-2 p-5">
                    <div className="">
                        <Link to={"/"}>
                            <img
                                src="/image/ShopIcon.png"
                                width={120}
                                height={120}
                                alt=""
                            />
                        </Link>
                    </div>

                    <div className="flex gap-5 absolute right-0 mr-4">
                        <span>
                            <FormControl variant="standard">
                                <Input
                                    id="input-with-icon-adornment"
                                    placeholder="Search item"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </span>
                        <span>
                            <NavLink to={"login"}>
                                <PersonIcon fontSize="large" />
                            </NavLink>
                        </span>
                        <span
                            className="cursor-pointer"
                            onClick={handleCartBox}
                        >
                            <Badge badgeContent={4} color="warning">
                                <ShoppingCartIcon
                                    color="action"
                                    fontSize="large"
                                />
                            </Badge>
                        </span>

                        {isCartBox && <CartBox />}
                    </div>
                </div>
                <div className="flex flex-wrap justify-center uppercase gap-2 font-bold p-5 ">
                    <span>
                        <DropdownMenu title={"vapekit"} />
                    </span>
                    <span>
                        <DropdownMenu title={"brands"} />
                    </span>
                    <span>
                        <DropdownMenu title={"vapekits"} />
                    </span>
                    <span>
                        <DropdownMenu title={"disposable"} />
                    </span>
                    <span>
                        <DropdownMenu title={"e-liquids"} />
                    </span>
                    <span>
                        <DropdownMenu title={"nic pouches"} />
                    </span>
                    <span>
                        <DropdownMenu title={"hemp"} />
                    </span>
                    <span>
                        <DropdownMenu title={"vaporizers"} />
                    </span>
                    <span>
                        <DropdownMenu title={"glass"} />
                    </span>
                    <span>
                        <DropdownMenu title={"accessories"} />
                    </span>
                </div>
            </nav>
            {/* mobile phone navbar */}
            <nav className="block md:hidden sticky top-0 z-99  backdrop-blur-2xl bg-white/90">
                <div className="flex justify-center gap-10 content-center items-center border-b-2 p-5">
                    <div className="flex ">
                        <span onClick={handleSidebar}>
                            <MenuRoundedIcon />
                        </span>
                        {isSidebarOpen && (
                            <UserSidebar
                                closeSidebar={() => setIsSidebarOpen(false)}
                            />
                        )}
                        <span className="">
                            <SearchIcon />
                        </span>
                    </div>
                    <div className="">
                        <Link to={"/"}>
                            <img
                                src="/image/ShopIcon.png"
                                width={100}
                                height={100}
                                alt=""
                            />
                        </Link>
                    </div>

                    <div className="flex gap-5">
                        <span>
                            <NavLink to={"login"}>
                                <PersonIcon fontSize="medium" />
                            </NavLink>
                        </span>
                       <span
                            className="cursor-pointer"
                            onClick={handleCartBox}
                        >
                            <Badge badgeContent={4} color="warning">
                                <ShoppingCartIcon
                                    color="action"
                                    fontSize="large"
                                />
                            </Badge>
                        </span>

                        {isCartBox && <CartBox />}
                    </div>
                </div>
            </nav>

            <div className="main">
                <Outlet />
            </div>

            {/* footer */}

            <nav>
                <UserFooter />
            </nav>
        </>
    );
};

export default RootLayout;

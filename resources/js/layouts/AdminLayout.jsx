import * as React from "react";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SourceIcon from "@mui/icons-material/Source";
import TocIcon from "@mui/icons-material/Toc";
import GroupIcon from "@mui/icons-material/Group";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import InventoryIcon from "@mui/icons-material/Inventory";
import CategoryIcon from "@mui/icons-material/Category";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ListIcon from "@mui/icons-material/List";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Badge from "@mui/material/Badge";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import Tooltip from "@mui/material/Tooltip";
import { createTheme } from "@mui/material";
import SpeedDialDirection from "../components/SpeedDialDirection";

const theme = createTheme({
    zIndex: {
        appBar: 900, // navbar above drawer
        drawer: 900,
    },
});

const NAVIGATION = [
    {
        kind: "header",
        title: "Main items",
    },
    {
        segment: "admin-dashboard",
        title: "Dashboard",
        icon: <DashboardIcon />,
    },

    {
        segment: "admin-orders",
        title: "Orders",
        icon: <LocalGroceryStoreIcon />,
    },

    // {
    //     kind: "divider",
    // },
    // {
    //     kind: "header",
    //     title: "Analytics",
    // },
    {
        title: "Products",
        icon: <InventoryIcon />,
        children: [
            {
                segment: "admin-product-list",
                title: "Product list",
                icon: <ListIcon />,
            },

            {
                segment: "admin-categories",
                title: "Categories",
                icon: <PlaylistAddIcon />,
            },
            {
                segment: "admin-descriptions",
                title: "Descriptions",
                icon: <PlaylistAddIcon />,
            },
            {
                segment: "admin-options",
                title: "Options",
                icon: <PlaylistAddIcon />,
            },
        ],
    },
    {
        segment: "reports",
        title: "Content management",
        icon: <SourceIcon />,
        children: [
            {
                segment: "traffic",
                title: "Hero",
                icon: <TocIcon />,
            },
            {
                segment: "traffic",
                title: "Item",
                icon: <TocIcon />,
            },

            {
                segment: "sales",
                title: "Footer",
                icon: <TocIcon />,
            },
        ],
    },

    {
        title: "Users",
        icon: <GroupIcon />,
        children: [
            {
                segment: "admin-list",
                title: "Admin",
                icon: <AdminPanelSettingsIcon />,
            },
            {
                segment: "traffic",
                title: "Staff",
                icon: <SupervisedUserCircleIcon />,
            },

            {
                segment: "sales",
                title: "Customer",
                icon: <HowToRegIcon />,
            },
        ],
    },
    {
        segment: "pos",
        title: "POS",
        icon: <CreditCardIcon />,
    },
    {
        segment: "reports",
        title: "Settings",
        icon: <SettingsIcon />,
    },
];

function AdminLayout(props) {
    const navigate = useNavigate();
    const location = useLocation();

    // Create a router that works with React Router
    const router = React.useMemo(
        () => ({
            pathname: location.pathname,
            searchParams: new URLSearchParams(location.search),
            navigate: (path) => navigate(path),
        }),
        [location.pathname, location.search, navigate],
    );

    return (
        <>
            <div className="absolute top-4 right-16 z-[905] cursor-pointer flex gap-3 items-start content-center ">
                <h1 className="text-black text-xl">
                    <Tooltip title="Low stocks" arrow>
                        <Badge badgeContent={10} color="error" max={99}>
                            <ErrorOutlineOutlinedIcon
                                fontSize="large"
                                color="primary"
                            />
                        </Badge>
                    </Tooltip>
                </h1>
                <SpeedDialDirection />
            </div>
            <AppProvider
                theme={theme}
                navigation={NAVIGATION}
                router={router}
                branding={{
                    logo: <div />, // Empty div
                    title: "",
                }}
            >
                <DashboardLayout>
                    <Outlet />
                </DashboardLayout>
            </AppProvider>
        </>
    );
}

export default AdminLayout;

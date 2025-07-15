// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import { NavLink, Outlet } from "react-router-dom";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import SourceIcon from "@mui/icons-material/Source";
// import Tooltip from "@mui/material/Tooltip";

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//     }),
//     overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//     transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: "hidden",
//     width: `calc(${theme.spacing(7)} + 1px)`,
//     [theme.breakpoints.up("sm")]: {
//         width: `calc(${theme.spacing(8)} + 1px)`,
//     },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== "open",
// })(({ theme }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     background: "white",
//     transition: theme.transitions.create(["width", "margin"], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     variants: [
//         {
//             props: ({ open }) => open,
//             style: {
//                 marginLeft: drawerWidth,
//                 width: `calc(100% - ${drawerWidth}px)`,
//                 transition: theme.transitions.create(["width", "margin"], {
//                     easing: theme.transitions.easing.sharp,
//                     duration: theme.transitions.duration.enteringScreen,
//                 }),
//             },
//         },
//     ],
// }));

// const Drawer = styled(MuiDrawer, {
//     shouldForwardProp: (prop) => prop !== "open",
// })(({ theme }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: "nowrap",
//     boxSizing: "border-box",

//     variants: [
//         {
//             props: ({ open }) => open,
//             style: {
//                 ...openedMixin(theme),
//                 "& .MuiDrawer-paper": openedMixin(theme),
//             },
//         },
//         {
//             props: ({ open }) => !open,
//             style: {
//                 ...closedMixin(theme),
//                 "& .MuiDrawer-paper": closedMixin(theme),
//             },
//         },
//     ],
// }));

// export default function Adminlayout() {
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);

//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//     };

//     return (
//         <Box sx={{ display: "flex" }}>
//             <CssBaseline />
//             <AppBar position="fixed" open={open}>
//                 <Toolbar>
//                     <IconButton
//                         color="black"
//                         aria-label="open drawer"
//                         onClick={handleDrawerOpen}
//                         edge="start"
//                         sx={[
//                             {
//                                 marginRight: 2,
//                             },
//                             open && { display: "none" },
//                         ]}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography
//                         variant="h6"
//                         color="black"
//                         noWrap
//                         component="div"
//                     >
//                         13thVapourLounge
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <Drawer variant="permanent" open={open}>
//                 <DrawerHeader>
//                     <IconButton onClick={handleDrawerClose}>
//                         {theme.direction === "rtl" ? (
//                             <ChevronRightIcon />
//                         ) : (
//                             <ChevronLeftIcon />
//                         )}
//                     </IconButton>
//                 </DrawerHeader>
//                 <ul className="grid gap-2">
//                     <NavLink
//                         to={"admin"}
//                         className={({ isActive }) =>
//                             isActive ? "bg-green-100" : "bg-inherit"
//                         }
//                     >
//                         <li className="p-3  ">
//                             <div className="flex ml-2 gap-7">
//                                 <Tooltip title="Dashboard" placement="right-end" arrow>
//                                     <DashboardIcon />
//                                 </Tooltip>

//                                 <span className="font-semibold text-gray-500">Dashboard</span>
//                             </div>
//                         </li>
//                     </NavLink>

//                     <NavLink
//                         to={"content-management"}
//                         className={({ isActive }) =>
//                             isActive ? "bg-green-100" : "bg-inherit"
//                         }
//                     >
//                         <li className="p-3 ">
//                             <div className="flex ml-2 gap-7">
//                                  <Tooltip title="Content management" placement="right-end" arrow>
//                                   <SourceIcon />
//                                  </Tooltip>

//                                 <span className="font-semibold text-gray-500">Content managment</span>
//                             </div>
//                         </li>
//                     </NavLink>
//                 </ul>
//             </Drawer>
//             <Box component="main" sx={{ flexGrow: 1 }}>
//                 <DrawerHeader />
//                 <Outlet />
//             </Box>
//         </Box>
//     );
// }

import * as React from "react";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

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
        segment: "content-management",
        title: "Content management",
        icon: <ShoppingCartIcon />,
    },
    {
        kind: "divider",
    },
    {
        kind: "header",
        title: "Analytics",
    },
    {
        segment: "reports",
        title: "Reports",
        icon: <BarChartIcon />,
        children: [
            {
                segment: "sales",
                title: "Sales",
                icon: <DescriptionIcon />,
            },
            {
                segment: "traffic",
                title: "Traffic",
                icon: <DescriptionIcon />,
            },
        ],
    },
    {
        segment: "integrations",
        title: "Integrations",
        icon: <LayersIcon />,
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
            <div className="absolute top-5 right-16 z-[9999]">
                <h1 className="text-black">Sample</h1>
            </div>
            <AppProvider
                navigation={NAVIGATION}
                router={router}
                branding={{
                    logo: <div/>, // Empty div
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

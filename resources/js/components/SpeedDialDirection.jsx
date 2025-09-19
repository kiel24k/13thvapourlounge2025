import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
    "& .MuiFab-root": {
        width: 35, // smaller width
        height: 15, // smaller height
        backgroundColor:"white"
    },
}));

const actions = [
    { icon: <AccountCircleIcon />, name: "Profile" },
    { icon: <ExitToAppIcon />, name: "Logout" },
  
];

export default function SpeedDialDirection() {
    const [direction, setDirection] = React.useState("down");
    const [hidden, setHidden] = React.useState(false);

    return (
        <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
            <Box sx={{ position: "relative", height: 320 }}>
                <StyledSpeedDial
                    ariaLabel="SpeedDial playground example"
                    hidden={hidden}
                    icon={<img src="image/users/gakudrawing.jpg" className="w-8 h-8 rounded-4xl "/>}
                    direction={direction}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            slotProps={{
                                tooltip: {
                                    open: true,
                                    title: action.name,
                                },
                            }}
                        />
                    ))}
                </StyledSpeedDial>
            </Box>
        </Box>
    );
}

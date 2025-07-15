import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function InputWithIcon({ children }) {
    return (
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Box sx={{ display: "flex", alignItems: "end", gap:1, width: "auto" }}>
               {/* add icon on children */}
                {children}
            </Box>
        </Box>
    );
}

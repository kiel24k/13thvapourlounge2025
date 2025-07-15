import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function SimplePaper({ children, elevation }) {
    return (
        <Box
            sx={{
                m: 1,
                width: "auto",
                height: "auto",
            }}
        >
            <Paper elevation={elevation}>{children}</Paper>
        </Box>
    );
}

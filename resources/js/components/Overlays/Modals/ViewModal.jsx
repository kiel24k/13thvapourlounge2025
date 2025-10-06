import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, CircularProgress, IconButton, Tooltip } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid white",
    boxShadow: " 0 8px 20px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
    p: 4,
};

//onClose: pass to parent to become method for close the modal
// header: name of content that pass from parent
// children: content that pass from parent
// isLoading: boolean

export default function ViewModal({
    modalOpen,
    onClose,
    header,
    children,
    isLoading,
}) {
    const open = modalOpen;

    return (
        <div className="bg-red-200">
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                slotProps={{
                    backdrop: {
                        style: {
                            backgroundColor: "rgba(0, 0, 0, 0.1)", // Adjust the opacity as needed
                        },
                    },
                }}
            >
                {/* box modal */}

                <Box sx={style}>
                    <div className="flex items-center justify-between">
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            {header}
                        </Typography>

                        <Tooltip title="Close">
                            <IconButton size="small" onClick={onClose}>
                                <CloseOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                    {isLoading ? (
                        <CircularProgress color="inherit" />
                    ) : (
                        <div className="grid gap-2 mt-5">{children}</div>
                    )}
                </Box>
            </Modal>
        </div>
    );
}

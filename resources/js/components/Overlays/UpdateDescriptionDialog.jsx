import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, TextField, Tooltip } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useStoreDescription } from "../../hooks/useProducts";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid white",
    boxShadow: 24,
    borderRadius: "5px",
    p: 4,
};

export default function UpdateDescriptionDialog({ category }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Tooltip title="Edit" arrow>
                <IconButton onClick={handleOpen} sx={{ zIndex: 999 }}>
                    <ModeEditOutlineOutlinedIcon />
                </IconButton>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form >
                        <Box sx={style}>
                            <div className="grid gap-4">
                                <Typography
                                    id="modal-modal-title"
                                    variant="h6"
                                    component="h2"
                                >
                                    Update Description
                                </Typography>

                                <TextField
                                    size="small"
                                    fullWidth
                                    variant="outlined"
                                    label="Description title"
                                />

                                <TextField
                                    multiline
                                    fullWidth
                                    rows={6}
                                    variant="outlined"
                                    label="Description content"
                                />

                                <div className="flex gap-4 justify-end">
                                    <Button
                                        onClick={handleClose}
                                        variant="text"
                                        color="error"
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="info"
                                        type="submit"
                                        disabled={false}
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

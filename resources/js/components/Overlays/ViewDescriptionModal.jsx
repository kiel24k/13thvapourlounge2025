import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, Tooltip } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useViewDescription } from "../../hooks/useProducts";

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

export default function ViewDescriptionModal({ title, descriptionBody }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { data } = useViewDescription(descriptionBody);

    return (
        <div>
            <Tooltip title="Details" arrow sx={{ zIndex: 999 }}>
                <Button
                    size="small"
                    color="secondary"
                    variant="contained"
                    onClick={handleOpen}
                >
                    Details
                </Button>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        color="secondary"
                    >
                        {title}
                    </Typography>

                    <div className="grid gap-2 mt-5">
                        {data &&
                            data.map((description) => (
                                <ul key={description.id}>
                                    <li>
                                        <span className="font-semibold text-gray-700 m-2">
                                            {description.description_content}
                                            <hr />
                                        </span>
                                    </li>
                                </ul>
                            ))}
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

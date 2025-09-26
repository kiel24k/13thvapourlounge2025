import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, TextField, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useStoreCategory } from "../../hooks/useProducts";
import { useState } from "react";

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

export default function NewCategoryDialog({ children, data }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");

    const { mutate, error } = useStoreCategory();

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(
            { categoryName, categoryDescription },
            {
                onSuccess: () => {
                    setCategoryName("");
                    setCategoryDescription("");
                    setOpen(false)
                },
            },
        );
    };

    return (
        <div>
            <Tooltip title="Edit" arrow sx={{ zIndex: 999 }}>
                <Button
                    onClick={handleOpen}
                    variant="contained"
                    color="success"
                    endIcon={<AddIcon />}
                >
                    New Category
                </Button>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={handleSubmit}>
                    <Box sx={style}>
                        <div className="grid gap-4">
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                New Category
                            </Typography>

                            <TextField
                                error={error?.errors?.category_name}
                                helperText={error?.errors?.category_name}
                                size="small"
                                fullWidth
                                variant="outlined"
                                label="Category name"
                                onChange={(e) =>
                                    setCategoryName(e.target.value)
                                }
                                value={categoryName}
                            />
                         

                            <TextField
                                error={error?.errors?.category_description}
                                helperText={error?.errors?.category_description}
                                multiline
                                fullWidth
                                rows={6}
                                variant="outlined"
                                label="Description"
                                onChange={(e) =>
                                    setCategoryDescription(e.target.value)
                                }
                                value={categoryDescription}
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
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </Box>
                </form>
            </Modal>
        </div>
    );
}

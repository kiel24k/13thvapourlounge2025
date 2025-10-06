import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, TextField, Tooltip } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useState } from "react";
import { useUpdateCategory } from "../../../hooks/useProducts";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

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

export default function UpdateCategoryDialog({ category }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [categoryName, setCategoryName] = useState(category.category_name);
    const [categoryDescription, setCategoryDescription] = useState(
        category.category_description,
    );

    const isDisabled =
        categoryName === category.category_name &&
        categoryDescription === category.category_description;

    const { mutate, error } = useUpdateCategory();

    useEffect(() => {
        if (category) {
            setCategoryName(category.category_name || "");
            setCategoryDescription(category.category_description || "");
        }
    }, [category]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isDisabled) {
            alert("dsds");
            return;
        }

        mutate(
            { categoryName, categoryDescription, id: category.id },
            {
                onSuccess: () => {
                    setOpen(false);
                },
            },
        );
    };

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
                    <form onSubmit={handleSubmit}>
                        <Box sx={style}>
                            <div className="grid gap-4">
                                <Typography
                                    id="modal-modal-title"
                                    variant="h6"
                                    component="h2"
                                >
                                    Update Category
                                </Typography>

                                <TextField
                                    error={error?.errors?.category_name}
                                    helperText={error?.errors?.category_name}
                                    size="small"
                                    fullWidth
                                    variant="outlined"
                                    label="Category name"
                                    value={categoryName}
                                    onChange={(e) =>
                                        setCategoryName(e.target.value)
                                    }
                                />

                                <TextField
                                    error={error?.errors?.category_description}
                                    helperText={
                                        error?.errors?.category_description
                                    }
                                    multiline
                                    fullWidth
                                    rows={6}
                                    variant="outlined"
                                    label="Description"
                                    value={categoryDescription}
                                    onChange={(e) =>
                                        setCategoryDescription(e.target.value)
                                    }
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
                                        disabled={isDisabled}
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

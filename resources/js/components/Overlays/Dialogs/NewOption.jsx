import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, TextField, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useShowOption, useStoreOption } from "../../../hooks/useProducts";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useState } from "react";
import { useRef } from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    maxHeight: 450,
    bgcolor: "background.paper",
    border: "1px solid white",
    boxShadow: 24,
    borderRadius: "5px",
    p: 4,
    overflowY: "scroll",
};

export default function NewOption() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { mutate, error, isSuccess } = useStoreOption();

    const idCounter = useRef(1);
    const [optionTitle, setOptionTitle] = useState("");
    const [optionLabel, setOptionLabel] = useState([
        { id: "", value: "" },
    ]);

    const handleAddContent = () => {
        idCounter.current += 1;
        setOptionLabel((prev) => [
            ...prev,
            { id: idCounter.current, value: "" },
        ]);
    };

    const handleChange = (id, newValue) => {
        setOptionLabel((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, value: newValue } : item,
            ),
        );
    };

    const handleDelete = (id) => {
        setOptionContent((prev) => prev.filter((data) => data.id != id));

        console.log(test);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(
            { optionTitle, optionLabel },
            {
                onSuccess: () => {
                    setOptionTitle("");
                    setOptionLabel([{ id: 1, value: "" }]);
                    handleClose();
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
                    New Option
                </Button>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-option"
            >
                <form onSubmit={handleSubmit}>
                    <Box sx={style}>
                        <div className="grid gap-4">
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                New Option
                            </Typography>

                            <TextField
                                error={error?.errors?.option_title}
                                helperText={error?.errors?.option_title}
                                size="small"
                                multiline
                                fullWidth
                                rows={6}
                                variant="outlined"
                                label="Option title"
                                value={optionTitle}
                                onChange={(e) =>
                                    setOptionTitle(e.target.value)
                                }
                            />

                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleAddContent}
                            >
                                Add Content
                            </Button>

                            {optionLabel &&
                                optionLabel?.map((item) => (
                                    <div className="flex gap-2" key={item.id}>
                                        <TextField
                                            key={item.id}
                                            fullWidth
                                            variant="outlined"
                                            label="Option label"
                                            value={item.value}
                                            onChange={(e) =>
                                                handleChange(
                                                    item.id,
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        <IconButton
                                            color="error"
                                            onClick={() =>
                                                handleDelete(item.id)
                                            }
                                        >
                                            <DeleteForeverOutlinedIcon />
                                        </IconButton>
                                    </div>
                                ))}

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

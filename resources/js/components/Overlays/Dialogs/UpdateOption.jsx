import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, TextField, Tooltip } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useShowOption, useUpdateOption } from "../../../hooks/useProducts";
import { useState } from "react";
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

export default function UpdateOption({ option }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { data: optionLabel } = useShowOption(option.option_title);

    const [optionLabelInput, setOptionLabelInput] = useState([]);

    useEffect(() => {
        if (optionLabel) {
            setOptionLabelInput(optionLabel);
        }
    }, [optionLabel]);

    const [inputOptionTitle, setInputOptionTitle] = useState(
        option.option_title,
    );

    const { mutate, error } = useUpdateOption();

    const handleChange = (id, newValue) => {
        setOptionLabelInput((prev) =>
            prev.map((data) =>
                data.id === id ? { ...data, option_label: newValue } : data,
            ),
        );
    };

    const handleForm = (e) => {
        e.preventDefault();
        mutate(
            {
                option_title: option.option_title,
                option_label: optionLabel,
                option_title_input: inputOptionTitle,
                option_label_input: optionLabelInput,
            },
            {
                onSuccess: () => {
                    handleClose();
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
                aria-describedby="modal-modal-option"
            >
                <Box sx={style}>
                    <form onSubmit={handleForm}>
                        <Box sx={style}>
                            <div className="grid gap-4">
                                <Typography
                                    id="modal-modal-title"
                                    variant="h6"
                                    component="h2"
                                >
                                    Update Options
                                </Typography>

                                <TextField
                                    size="small"
                                    fullWidth
                                    variant="outlined"
                                    label="Option Title"
                                    multiline
                                    rows={6}
                                    error={error?.errors?.option_title_input[0]}
                                    helperText={
                                        error?.errors?.option_title_input[0]
                                    }
                                    value={inputOptionTitle}
                                    onChange={(e) =>
                                        setInputOptionTitle(e.target.value)
                                    }
                                />

                                {optionLabelInput &&
                                    optionLabelInput.map((data) => (
                                        <TextField
                                            key={data.id}
                                            size="small"
                                            fullWidth
                                            variant="outlined"
                                            label="Option Label"
                                            value={data.option_label}
                                            onChange={(e) =>
                                                handleChange(
                                                    data.id,
                                                    e.target.value,
                                                )
                                            }
                                        />
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

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, TextField, Tooltip } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import {
    useUpdateDescription,
    useViewDescription,
} from "../../../hooks/useProducts";
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

export default function UpdateDescriptionDialog({ description }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { data: descriptionContent } = useViewDescription(
        description.description_body,
    );

    const [descriptionContentInput, setDescriptionContentInput] = useState([]);

    useEffect(() => {
        if (descriptionContent) {
            setDescriptionContentInput(descriptionContent);
        }
    }, [descriptionContent]);

    const [inputDescriptionBody, setInputDescriptionBody] = useState(
        description.description_body,
    );

    const { mutate, error } = useUpdateDescription();

    const handleChange = (id, newValue) => {
        setDescriptionContentInput((prev) => prev.map((data) => data.id === id ? {...data, description_content: newValue} : data))
    };

    const handleForm = (e) => {
        e.preventDefault();
        
       
        mutate({
            description_body: description.description_body, //recovery key to update description body
            description_content: descriptionContent, //recovery key to get the current value of the input description
            description_body_input: inputDescriptionBody,
            description_content_input: descriptionContentInput,
        }, {
            onSuccess: () => {
                handleClose() 
            }
        });
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
                    <form onSubmit={handleForm}>
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
                                    label="Description Body"
                                    multiline
                                    rows={6}
                                    error={error?.errors?.description_body_input[0]}
                                    helperText={error?.errors?.description_body_input[0]}
                                    value={inputDescriptionBody}
                                    onChange={(e) =>
                                        setInputDescriptionBody(e.target.value)
                                    }
                                />

                                {descriptionContentInput &&
                                    descriptionContentInput.map((data) => (
                                        <TextField
                                            key={data.id}
                                            size="small"
                                            fullWidth
                                            variant="outlined"
                                            label="Description Content"
                                            value={
                                                data.description_content
                                            }
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

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, Tooltip } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDeleteDescription, useDeleteOption, useShowOption } from "../../../hooks/useProducts";

export default function DeleteOption({id}) {
    const [open, setOpen] = React.useState(false);

    const {mutate, error} = useDeleteOption()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
       
     mutate(id, {
        onSuccess: () => {
            setOpen(false) 
        }
     })
     
    }

    return (
        <React.Fragment>
            <Tooltip title="Delete" arrow sx={{ zIndex: 999 }}>
                <IconButton variant="outlined" onClick={handleClickOpen}>
                    <DeleteOutlineOutlinedIcon />
                </IconButton>
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure do you want to delete it?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Deleting this "title" is permanent and cannot be undone.
                        Please confirm if you want to proceed.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="text" color="info">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleConfirm}
                        variant="text"
                        color="error"
                    >
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

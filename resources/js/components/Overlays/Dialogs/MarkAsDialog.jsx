import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useUpdateStatus } from "../../../hooks/useOrder";

export default function MarkAsDialog({ isOpen, onClose, status }) {
    const { mutate: updateStatus } = useUpdateStatus();
    const handleSubmit = () => {
        updateStatus(status, {
            onSuccess: () => {
                onClose();
            },
        });
    };

    return (
        <React.Fragment>
            <Dialog
                open={isOpen}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Do you want to change it?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Warning: Changing the status of this order will directly
                        affect its processing and tracking
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Close</Button>
                    <Button onClick={handleSubmit} autoFocus>
                        Change
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

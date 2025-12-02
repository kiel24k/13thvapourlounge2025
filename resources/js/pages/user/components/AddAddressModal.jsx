import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useGetAuthUser } from "../../../hooks/useUsers";
import { useStoreAddress } from "../../../hooks/useAddress";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TextField } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

export default function AddAddressModal() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value,
        });
    };

    const { data: user } = useGetAuthUser();
    const { mutate, error, isPending } = useStoreAddress();
    const initialForm = {
        user_id: user?.id,
        first_name: "",
        last_name: "",
        company_name: "",
        street_name: "",
        apartment: "",
        town: "",
        zip_code: "",
        contact_number: "",
        email: "",
        note: "",
    };
    const [formInput, setFormInput] = React.useState(initialForm);
    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(formInput, {
            onSuccess: () => {
                setFormInput(initialForm);
           
            },
        });
    };

    return (
        <React.Fragment>
            <Button
                startIcon={<IoIosAddCircleOutline />}
                onClick={handleClickOpen}
            >
                Add address
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    New Address
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="grid gap-3 mt-3">
                                <div className="flex gap-5">
                                    <TextField
                                        id=""
                                        label="First name"
                                        name="first_name"
                                        value={formInput.first_name}
                                        onChange={handleChange}
                                        error={error?.errors?.first_name?.[0]}
                                        helperText={
                                            error?.errors?.first_name?.[0]
                                        }
                                    />

                                    <TextField
                                        label="Last name"
                                        name="last_name"
                                        value={formInput.last_name}
                                        onChange={handleChange}
                                        error={error?.errors?.last_name?.[0]}
                                        helperText={
                                            error?.errors?.last_name?.[0]
                                        }
                                    />
                                </div>

                                <div className="flex">
                                    <TextField
                                        fullWidth
                                        label="Company name (optional)"
                                        name="company_name"
                                        value={formInput.company_name}
                                        onChange={handleChange}
                                        error={error?.errors?.company_name?.[0]}
                                        helperText={
                                            error?.errors?.company_name?.[0]
                                        }
                                    />
                                </div>

                                <div className="grid gap-3">
                                    <TextField
                                        fullWidth
                                        label="House number and street name"
                                        name="street_name"
                                        value={formInput.street_name}
                                        onChange={handleChange}
                                        error={error?.errors?.street_name?.[0]}
                                        helperText={
                                            error?.errors?.street_name?.[0]
                                        }
                                    />
                                    <TextField
                                        fullWidth
                                        label="Apartment, suit,unit, etc (optional)"
                                        name="apartment"
                                        value={formInput.apartment}
                                        onChange={handleChange}
                                        error={error?.errors?.apartment?.[0]}
                                        helperText={
                                            error?.errors?.apartment?.[0]
                                        }
                                    />

                                    <TextField
                                        fullWidth
                                        label="Town City"
                                        name="town"
                                        value={formInput.town}
                                        onChange={handleChange}
                                        error={error?.errors?.town?.[0]}
                                        helperText={error?.errors?.town?.[0]}
                                    />

                                    <TextField
                                        fullWidth
                                        label="Postcode / ZIP"
                                        name="zip_code"
                                        value={formInput.zip_code}
                                        onChange={handleChange}
                                        error={error?.errors?.zip_code?.[0]}
                                        helperText={
                                            error?.errors?.zip_code?.[0]
                                        }
                                    />

                                    <TextField
                                        fullWidth
                                        label="Contact number"
                                        name="contact_number"
                                        value={formInput.contact_number}
                                        onChange={handleChange}
                                        error={
                                            error?.errors?.contact_number?.[0]
                                        }
                                        helperText={
                                            error?.errors?.contact_number?.[0]
                                        }
                                    />

                                    <TextField
                                        fullWidth
                                        label="Email address"
                                        name="email"
                                        value={formInput.email}
                                        onChange={handleChange}
                                        error={error?.errors?.email?.[0]}
                                        helperText={error?.errors?.email?.[0]}
                                    />

                                    <TextField
                                        fullWidth
                                        label="Order notes (optional)"
                                        name="note"
                                        value={formInput.note}
                                        onChange={handleChange}
                                        error={error?.errors?.note?.[0]}
                                        helperText={error?.errors?.note?.[0]}
                                    />
                                </div>
                            </div>
                        </div>
                        <DialogActions>
                            <Button type="submit"  >
                                Submit
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </BootstrapDialog>
        </React.Fragment>
    );
}

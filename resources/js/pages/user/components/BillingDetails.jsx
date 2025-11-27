import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useGetAuthUser } from "../../../hooks/useUsers";
import { useCreateOrder } from "../../../hooks/useOrder";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function BillingDetails({ checkBox, carts, total }) {
    const { data: user } = useGetAuthUser();
    const { mutate, error, isPending } = useCreateOrder();
    const [open, setOpen] = React.useState(false);
    const [billingDetails, setBillingDetails] = useState([]);
    const initialForm = {
        user_id: user?.id,
        product_id: "",
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
        delivery_type: "",
        total: total,
        status: "",
    };
    const [formInput, setFormInput] = useState(initialForm);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const cartChecks = carts.filter((cart) => checkBox.includes(cart.id));
    const handleChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        setFormInput((prev) => ({
            ...prev,
            total: total,
            product_id: cartChecks.map((cart) => cart.product_id),
        }));
    }, [total]);

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(formInput, {
            onSuccess: () => {
                setFormInput(initialForm)
                setOpen(false);

            },
        });
       
    };

    return (
        <React.Fragment>
            <Button
                variant="contained"
                color="success"
                onClick={handleClickOpen}
            >
                Proceed to checkout
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                slots={{
                    transition: Transition,
                }}
            >
                <AppBar sx={{ position: "relative", bgcolor: "black" }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                        >
                            Billing Details
                        </Typography>
                    </Toolbar>
                </AppBar>
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-2 justify-center mt-3">
                        <section className="p-3">
                            <Typography variant="h5" color="black">
                                Billing Details
                            </Typography>
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
                        </section>
                        <section className="bg-gray-200 w-1/2 p-3">
                            <Typography variant="h5" color="black">
                                Your order
                            </Typography>

                            <div className="grid m-3 bg-white p-3 rounded-lg ">
                                <div className="">
                                    <table className="w-full">
                                        <thead>
                                            <tr>
                                                <th className="uppercase  text-start">
                                                    Product
                                                </th>
                                                <th className="uppercase ">
                                                    subtotal{" "}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartChecks &&
                                                cartChecks.map((cart, key) => (
                                                    <tr
                                                        key={key}
                                                        className="border-b-1 border-gray-400"
                                                    >
                                                        <td className="p-2 border-gray-400">
                                                            <div className="flex gap-2 content-start ">
                                                                <img
                                                                    src={`/images/${JSON.parse(cart.products.image)[0]}`}
                                                                    alt="product image"
                                                                    className="h-25 w-25"
                                                                />

                                                                <div className="grid gap-1 content-start">
                                                                    <b>
                                                                        {
                                                                            cart
                                                                                .products
                                                                                .product_name
                                                                        }
                                                                    </b>
                                                                    <b className="font-semibold">
                                                                        {Object.values(
                                                                            JSON.parse(
                                                                                cart.option_type,
                                                                            ),
                                                                        ).join(
                                                                            ", ",
                                                                        )}
                                                                    </b>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="grid content-start p-2 border-gray-400 text-end">
                                                            <div className="text-green-700">
                                                                <b>
                                                                    ₱
                                                                    {Number(
                                                                        cart.total,
                                                                    ).toLocaleString()}
                                                                    .00
                                                                </b>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                                <hr />

                                <div className="flex justify-between">
                                    <Typography variant="h6" color="black">
                                        Total
                                    </Typography>
                                    <b className="text-green-700">
                                        ₱{Number(total).toLocaleString()}.00
                                    </b>
                                </div>

                                <div className="grid">
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel
                                                value="cod"
                                                control={<Radio />}
                                                label="COD (Cash on delivery)"
                                                name="delivery_type"
                                                onChange={handleChange}
                                            />
                                            <FormControlLabel
                                                value="walk-in"
                                                control={<Radio />}
                                                label="Walk-in"
                                                name="delivery_type"
                                                onChange={handleChange}
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                    {error?.errors?.delivery_type?.[0] && (
                                        <span className="text-red-700">
                                            {error?.errors?.delivery_type?.[0]}
                                        </span>
                                    )}
                                </div>
                                <hr />

                                <div className="grid">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="success"
                                        disabled={isPending}
                                    >
                                        {isPending
                                            ? "Submitting"
                                            : "place order"}
                                    </Button>
                                </div>
                            </div>
                        </section>
                    </div>
                </form>
            </Dialog>
        </React.Fragment>
    );
}

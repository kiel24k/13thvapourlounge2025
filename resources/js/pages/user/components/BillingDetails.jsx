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
import { useShowAddressById, useStoreAddress } from "../../../hooks/useAddress";
import AddAddressModal from "./AddAddressModal";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function BillingDetails({ checkBox, carts, total }) {
    const { data: user } = useGetAuthUser();
    const { mutate, error, isPending } = useStoreAddress();
    const { mutate: placeOrder } = useCreateOrder();
    const { data: addresses } = useShowAddressById(user?.id);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [addressRadio, setAddressRadio] = useState();
    const cartChecks = carts.filter((cart) => checkBox.includes(cart.id));
    const defaultForm = {
        user_id: user?.id,
        address_id: addressRadio,
        total: total,
        status: "pending",
        cart: cartChecks,
    };

  

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        placeOrder(defaultForm, {
            onSuccess: () => {
                setOpenDialog(false);
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
                open={openDialog}
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
                            Billing Details {addressRadio}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-2 justify-center mt-3">
                        <section className="p-3">
                            <Typography variant="h5" color="black">
                                Billing Details
                            </Typography>
                            <div className="grid">
                                <FormControl className="w-1/2">
                                    <FormLabel id="demo-radio-buttons-group-label">
                                        Address
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group"
                                        value={addressRadio}
                                        onChange={(e) =>
                                            setAddressRadio(e.target.value)
                                        }
                                    >
                                        {addresses &&
                                            addresses.map((address) => (
                                                <FormControlLabel
                                                    className="w-100"
                                                    value={address.id}
                                                    control={<Radio />}
                                                    label={`${address.street_name}, ${address.apartment}, ${address.town}, ${address.zip_code}, ${address.contact_number}`}
                                                />
                                            ))}
                                    </RadioGroup>
                                </FormControl>

                                <div className="flex items-center justify-end">
                                    <Link to={"/create-address"}>
                                        <Button>Create address</Button>
                                    </Link>
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
                                                                    <span>
                                                                        x
                                                                        {
                                                                            cart.quantity
                                                                        }
                                                                    </span>
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

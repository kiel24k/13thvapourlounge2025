import React from "react";
import InputWithIcon from "../../components/inputs/InputWithIcons";
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StoreIcon from "@mui/icons-material/Store";
import FadeInSection from "../../components/FadeInSection";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TagIcon from "@mui/icons-material/Tag";
import FlagIcon from "@mui/icons-material/Flag";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Checkout = () => {
    return (
        <>
            <div className=" w-auto md:w-300 m-auto">
                <div className=" flex flex-wrap md:grid md:grid-cols-2 justify-center">
                    <FadeInSection>
                        <section className="billing details m-3 md:m-0">
                            <form action="" className="grid gap-5 w-full  ">
                                <h1 className="font-semibold text-2xl">
                                    BILLING ADDRESS
                                </h1>
                                <fieldset className="flex flex-wrap gap-5">
                                    <div className="flex-1 md:flex-1">
                                        <InputWithIcon>
                                            <AccountCircleIcon />
                                            <TextField
                                                id="input-with-sx"
                                                type="text"
                                                label="First name"
                                                variant="standard"
                                                sx={{ width: "100%" }}
                                            />
                                        </InputWithIcon>
                                    </div>

                                    <div className=" flex-1  md:flex-1">
                                        <InputWithIcon>
                                            <AccountCircleIcon />
                                            <TextField
                                                id="input-with-sx"
                                                type="text"
                                                label="Last name"
                                                variant="standard"
                                                sx={{ width: "100%" }}
                                            />
                                        </InputWithIcon>
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <InputWithIcon>
                                        <StoreIcon />
                                        <TextField
                                            id="input-with-sx"
                                            type="text"
                                            label="Company name (optional)"
                                            variant="standard"
                                            sx={{ width: "100%" }}
                                        />
                                    </InputWithIcon>
                                </fieldset>

                                <div className="grid">
                                    <span>Country / Region</span>
                                    <span className="font-semibold">
                                        Philippines
                                    </span>
                                </div>

                                <FormControl>
                                    <FormLabel>Address</FormLabel>
                                    <fieldset className="grid gap-2">
                                        <InputWithIcon>
                                            <HomeIcon />
                                            <TextField
                                                id="input-with-sx"
                                                type="text"
                                                variant="standard"
                                                label="House number or street name"
                                                sx={{ width: "100%" }}
                                            />
                                        </InputWithIcon>

                                        <InputWithIcon>
                                            <ApartmentIcon />
                                            <TextField
                                                id="input-with-sx"
                                                type="text"
                                                variant="standard"
                                                label="Appartment, suite, unit, etc. (optional)"
                                                sx={{ width: "100%" }}
                                            />
                                        </InputWithIcon>

                                        <InputWithIcon>
                                            <LocationCityIcon />
                                            <TextField
                                                id="input-with-sx"
                                                type="text"
                                                variant="standard"
                                                label="Town / City"
                                                sx={{ width: "100%" }}
                                            />
                                        </InputWithIcon>

                                        <InputWithIcon>
                                            <FlagIcon />
                                            <TextField
                                                id="input-with-sx"
                                                type="text"
                                                variant="standard"
                                                label="State / Country"
                                                sx={{ width: "100%" }}
                                            />
                                        </InputWithIcon>

                                        <InputWithIcon>
                                            <TagIcon />
                                            <TextField
                                                id="input-with-sx"
                                                type="text"
                                                variant="standard"
                                                label="Postcode / ZIP"
                                                sx={{ width: "100%" }}
                                            />
                                        </InputWithIcon>

                                        <InputWithIcon>
                                            <LocalPhoneIcon />
                                            <TextField
                                                id="input-with-sx"
                                                type="text"
                                                variant="standard"
                                                label="Phone number"
                                                sx={{ width: "100%" }}
                                            />
                                        </InputWithIcon>

                                        <InputWithIcon>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Notes about your order, e.g, special notes for delivery"
                                                type="text"
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                                sx={{ width: "100%" }}
                                            />
                                        </InputWithIcon>
                                    </fieldset>
                                </FormControl>
                            </form>
                        </section>
                    </FadeInSection>

                    <FadeInSection>
                        <section className="your-order bg-gray-100">
                            <div className="grid gap-3 p-2">
                                <h2 className="font-semibold text-center text-2xl">
                                    YOUR ORDER
                                </h2>

                                <div className="grid gap-5 ml-5 mr-5 bg-white p-3">
                                    <div className="flex justify-between items-center border-b-1 pb-3">
                                        <span className="font-semibold ">
                                            PRODUCT
                                        </span>
                                        <span className="font-semibold">
                                            SUBTOTAL
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center border-b-1 border-gray-200 pb-3">
                                        <span className="text-gray-500">
                                            Geekvape Aegis S100 (SOLO 2) Vape
                                            Kit 100W - Gray × 1
                                        </span>
                                        <span className="font-bold text-green-600">
                                            ₱1,800.00
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center border-b-1 border-gray-200 pb-3">
                                        <span className="font-semibold">
                                            Shipping
                                        </span>
                                        <div className="flex gap-2">
                                            <span>Luzon Provinces:</span>
                                            <span className="font-bold text-green-600">
                                                ₱95.00
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center border-b-1 border-gray-200 pb-3">
                                        <span className="font-semibold text-xl ">
                                            Total
                                        </span>
                                        <span className="font-bold text-green-600 text-2xl">
                                            ₱1,880.00
                                        </span>
                                    </div>
                                     <div className="grid">
                                    <Button variant="contained" color="success">PLACE ORDER</Button>
                                </div>
                                </div>
                               
                            </div>
                        </section>
                    </FadeInSection>
                </div>
            </div>
        </>
    );
};

export default Checkout;

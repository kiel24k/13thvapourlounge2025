import React, { useEffect, useState } from "react";
import InputWithIcon from "../../components/inputs/InputWithIcons";
import { Button, TextField } from "@mui/material";
import BoxPaper from "../../components/box/Paper";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import FadeInSection from "../../components/FadeInSection";
import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useUserSignup } from "../../hooks/useUsers";
import dayjs from "dayjs";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Signup = () => {
    const { mutate, isPending, isSuccess, isError, error } = useUserSignup();

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        date_of_birth: "",
        role: "admin",
        password: "",
        password_confirmation: "",
    });

    const handleDateChange = (date) => {
        setFormData((prev) => ({
            ...prev,
            date_of_birth: date ? date.format("YYYY-MM-DD") : null,
        }));
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(formData);
        console.log(formData);
    };

    useEffect(() => {
        setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            date_of_birth: "",
            role: "admin",
            password: "",
            password_confirmation: "",
        });
    }, [isSuccess]);
    return (
        <FadeInSection>
            <div className="grid md:w-150 m-auto">
                <BoxPaper elevation={5}>
                    <section className="grid gap-10 p-3 ">
                        <div className="text-center">
                            <h1 className="font-semibold text-3xl">
                                Create an account
                            </h1>
                        </div>
                        <div className="grid">
                            <form
                                onSubmit={handleSubmit}
                                className="grid gap-5"
                            >
                                {error?.errors?.first_name?.[0] && (
                                    <span className="text-red-500">
                                        {error.errors.first_name[0]}
                                    </span>
                                )}
                                <InputWithIcon>
                                    <AccountCircle />
                                    <TextField
                                        id="input-with-sx"
                                        type="text"
                                        label="First Name"
                                        variant="standard"
                                        name="first_name"
                                        sx={{ width: "100%" }}
                                        value={formData.first_name}
                                        onChange={handleChange}
                                    />
                                </InputWithIcon>

                                {error?.errors?.last_name?.[0] && (
                                    <span className="text-red-500">
                                        {error.errors.last_name[0]}
                                    </span>
                                )}
                                <InputWithIcon>
                                    <AccountCircle />
                                    <TextField
                                        id="input-with-sx"
                                        type="text"
                                        label="Last Name"
                                        variant="standard"
                                        name="last_name"
                                        sx={{ width: "100%" }}
                                        value={formData.last_name}
                                        onChange={handleChange}
                                    />
                                </InputWithIcon>

                                {error?.errors?.phone_number?.[0] && (
                                    <span className="text-red-500">
                                        {error.errors.phone_number[0]}
                                    </span>
                                )}
                                <InputWithIcon>
                                    <LocalPhoneIcon />
                                    <TextField
                                        id="input-with-sx"
                                        type="number"
                                        label="Phone Number"
                                        variant="standard"
                                        name="phone_number"
                                        sx={{ width: "100%" }}
                                        value={formData.phone_number}
                                        onChange={handleChange}
                                    />
                                </InputWithIcon>
                                {error?.errors?.email?.[0] && (
                                    <span className="text-red-500">
                                        {error.errors.email[0]}
                                    </span>
                                )}

                                <InputWithIcon>
                                    <AlternateEmailIcon />
                                    <TextField
                                        id="input-with-sx"
                                        type="email"
                                        label="Email"
                                        variant="standard"
                                        name="email"
                                        sx={{ width: "100%" }}
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </InputWithIcon>
                                {error?.errors?.password?.[0] && (
                                    <span className="text-red-500">
                                        {error.errors.password[0]}
                                    </span>
                                )}
                                <InputWithIcon>
                                    <LockIcon />
                                    <TextField
                                        id="input-with-sx"
                                        type="password"
                                        label="Create Password"
                                        variant="standard"
                                        name="password"
                                        sx={{ width: "100%" }}
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </InputWithIcon>

                                <InputWithIcon>
                                    <LockIcon />
                                    <TextField
                                        id="input-with-sx"
                                        type="password"
                                        label="Confirm Password"
                                        variant="standard"
                                        name="password_confirmation"
                                        sx={{ width: "100%" }}
                                        value={formData.password_confirmation}
                                        onChange={handleChange}
                                    />
                                </InputWithIcon>
                                {error?.errors?.date_of_birth?.[0] && (
                                    <span className="text-red-500">
                                        {error.errors.date_of_birth}
                                    </span>
                                )}

                                <div className="grid">
                                    <InputWithIcon>
                                        <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                        >
                                            <DatePicker
                                                name="date_of_birth"
                                                label="Date of Birth"
                                                value={
                                                    formData.date_of_birth
                                                        ? dayjs(
                                                             new Date( formData.date_of_birth).toLocaleDateString(),
                                                          )
                                                        : null
                                                }
                                                onChange={handleDateChange}
                                            />
                                        </LocalizationProvider>
                                    </InputWithIcon>

                                    <p className="ml-3 text-gray-500 italic">
                                        You need to be 18 and over to use this
                                        website in the Philippines.
                                    </p>
                                </div>

                                <div className="grid justify-center text-center items-center gap-5">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ background: "black" }}
                                    >
                                        Signup
                                    </Button>
                                    <Link to={"/login"} className="text-blue-600">
                                        Already have an account?
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </section>
                </BoxPaper>
            </div>
        </FadeInSection>
    );
};

export default Signup;

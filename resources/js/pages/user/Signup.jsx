import React from "react";
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

const Signup = () => {
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
                            <form action="" className="grid gap-5">
                                <InputWithIcon>
                                    <AccountCircle />
                                    <TextField
                                        id="input-with-sx"
                                        type="text"
                                        label="First Name"
                                        variant="standard"
                                        sx={{ width: "100%" }}
                                    />
                                </InputWithIcon>

                                <InputWithIcon>
                                    <AccountCircle />
                                    <TextField
                                        id="input-with-sx"
                                        type="text"
                                        label="Last Name"
                                        variant="standard"
                                        sx={{ width: "100%" }}
                                    />
                                </InputWithIcon>

                                <InputWithIcon>
                                    <AlternateEmailIcon />
                                    <TextField
                                        id="input-with-sx"
                                        type="email"
                                        label="Email"
                                        variant="standard"
                                        sx={{ width: "100%" }}
                                    />
                                </InputWithIcon>

                                <InputWithIcon>
                                    <LockIcon />
                                    <TextField
                                        id="input-with-sx"
                                        type="password"
                                        label="Create Password"
                                        variant="standard"
                                        sx={{ width: "100%" }}
                                    />
                                </InputWithIcon>

                                <InputWithIcon>
                                    <LockIcon />
                                    <TextField
                                        id="input-with-sx"
                                        type="password"
                                        label="Confirm Password"
                                        variant="standard"
                                        sx={{ width: "100%" }}
                                    />
                                </InputWithIcon>

                                <div className="grid">
                                    <InputWithIcon>
                                        <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                        >
                                            <DatePicker label="Date of Birth" />
                                        </LocalizationProvider>
                                    </InputWithIcon>

                                    <p className="ml-3 text-gray-500 italic">
                                        You need to be 18 and over to use this
                                        website in the Philippines.
                                    </p>
                                </div>

                                <div className="grid justify-center text-center items-center gap-5">
                                    <Button
                                        variant="contained"
                                        sx={{ background: "black" }}
                                    >
                                        Signup
                                    </Button>
                                    <Link to={"/login"}>
                                        <span>Login</span>
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

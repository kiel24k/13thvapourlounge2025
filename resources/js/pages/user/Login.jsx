import React from "react";
import InputWithIcon from "../../components/inputs/InputWithIcons";
import { Button, TextField } from "@mui/material";
import BoxPaper from "../../components/box/Paper";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from '@mui/icons-material/Lock';
import FadeInSection from "../../components/FadeInSection";
import { Link } from "react-router-dom";

const Login = () => {
    return (
       
        <FadeInSection>
 <div className="grid md:w-150 m-auto">
            <BoxPaper elevation={5}>
                <section className="grid gap-10 p-3 ">
                    <div className="text-center">
                        <h1 className="font-semibold text-3xl">Login account</h1>
                    </div>
                    <div className="grid">
                        <form action="" className="grid gap-5">
                            <InputWithIcon>
                                <AccountCircle/>
                                <TextField
                                    id="input-with-sx"
                                   type="email"
                                    label="Email"
                                    variant="standard"
                                    sx={{ width: "100%" }}
                                />
                            </InputWithIcon>

                            <InputWithIcon>
                            <LockIcon/>
                                <TextField
                                    id="input-with-sx"
                                    type="password"
                                    label="Password"
                                    variant="standard"
                                    sx={{ width: "100%" }}
                                />
                            </InputWithIcon>
                            <div className="text-end">
                                <span>Forgot your password?</span>
                            </div>

                            <div className="grid justify-center items-center gap-5">
                                <Button
                                    variant="contained"
                                    sx={{ background: "black" }}
                                >
                                    Login
                                </Button>
                                <Link to={"/signup"}>
                                <span>Create account</span>
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

export default Login;

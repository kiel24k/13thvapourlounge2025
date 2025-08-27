import React, { useState } from "react";
import InputWithIcon from "../../components/inputs/InputWithIcons";
import { Button, TextField } from "@mui/material";
import BoxPaper from "../../components/box/Paper";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import FadeInSection from "../../components/FadeInSection";
import { Link } from "react-router-dom";
import { useUserLogin } from "../../hooks/useUsers";


const Login = () => {
    const storedUser = window.localStorage.getItem("user");
    
    const { mutate, isError, isSuccess, error } = useUserLogin();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate({ email: email, password: password });
    };

    return (

        <FadeInSection>
            <div className="grid md:w-150 m-auto">
                <BoxPaper elevation={5}>
                    <section className="grid gap-10 p-3 ">
                        <div className="text-center">
                            <h1 className="font-semibold text-3xl">
                                Login account
                            </h1>
                        </div>
                      {isError && (
                        <div className="bg-red-100 grid gap-2 text-center p-2 border-1 border-red-500">
                            <span className="font-semibold">Wrong Credentials</span>
                            <span className="text-sm">Invalid username or password</span>
                        </div>
                      )}

                        <div className="grid">
                            <form
                                onSubmit={handleSubmit}
                                className="grid gap-5"
                            >
                                {error?.errors?.email?.[0] && (
                                    <span className="text-red-500">
                                        {error.errors.email[0]}
                                    </span>
                                )}
                                <InputWithIcon>
                                    <AccountCircle />
                                    <TextField
                                        id="input-with-sx"
                                        type="email"
                                        label="Email"
                                        variant="standard"
                                        sx={{ width: "100%" }}
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
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
                                        label="Password"
                                        variant="standard"
                                        sx={{ width: "100%" }}
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </InputWithIcon>
                                <div className="text-end">
                                    <span>Forgot your password?</span>
                                </div>

                                <div className="grid justify-center items-center gap-5">
                                    <Button
                                        type="submit"
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

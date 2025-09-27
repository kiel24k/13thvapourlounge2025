import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useGetAuthUser, useUserSignup } from "../../hooks/useUsers";

const CreateAdmin = () => {
    const { mutate, error, isSuccess, isError } = useUserSignup();

    const { data } = useGetAuthUser();

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        contact_number: "",
        image: "",
        role: "admin",
        password: "",
    });

    const [imagePreview, setImagePreview] = useState("");
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            setFormData((formData) => ({
                ...formData,
                image: file,
            }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value, //computed property name or transform into object with keys
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(formData, {
            onSuccess: () => {
                setFormData({
                    first_name: "",
                    last_name: "",
                    email: "",
                    contact_number: "",
                    password: "",
                });
            },
        });
    };

    return (
        <Paper elevation={5} className="m-2 p-2">
            <section>
                <div>
                    <Button
                        onClick={() => history.back()}
                        startIcon={<ArrowBackOutlinedIcon />}
                        variant="contained"
                        color="info"
                        size="small"
                    >
                        Back
                    </Button>
                </div>
                <div className="grid gap-2 sm:w-max pl-15 pr-15 mt-5 ">
                    <Typography variant="h5" sx={{ marginTop: "1rem" }}>
                        Fill up information
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-5 mb-5">
                            <figure>
                                {imagePreview === "" ? (
                                    <img
                                        src="https://tse1.mm.bing.net/th/id/OIF.qkH5j3tJxjQKOSy1CgfGHQ?rs=1&pid=ImgDetMain&o=7&rm=3"
                                        alt="online avatar"
                                        className="rounded-full w-40 h-40"
                                    />
                                ) : (
                                    <img
                                        src={imagePreview}
                                        alt=""
                                        className="rounded-full w-40 h-40"
                                    />
                                )}
                            </figure>
                            <div className="grid gap-2">
                                <label htmlFor="">Upload image:</label>
                                {imagePreview == "" && (
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="w-55 border-1 border-gray-400 p-1"
                                        name="image"
                                        onChange={handleImageUpload}
                                    />
                                )}

                                {imagePreview !== "" && (
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => setImagePreview("")}
                                    >
                                        Remove image
                                    </Button>
                                )}
                            </div>
                        </div>
                        <Box sx={{ display: "grid", gap: "5px" }}>
                            <div className="flex flex-wrap gap-5 justify-center sm:justify-center">
                                <TextField
                                    error={error?.errors?.first_name}
                                    type="text"
                                    label="First name"
                                    helperText={error?.errors?.first_name}
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                />
                                <TextField
                                    error={error?.errors?.last_name}
                                    label="Last name"
                                    helperText={error?.errors?.last_name}
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-wrap gap-5 justify-center sm:justify-center">
                                <TextField
                                    fullWidth
                                    error={error?.errors?.email}
                                    label="Email"
                                    helperText={error?.errors?.email}
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-wrap gap-5 justify-center sm:justify-center">
                                <TextField
                                    fullWidth
                                    error={error?.errors?.contact_number}
                                    type="number"
                                    label="Contact number"
                                    helperText={error?.errors?.contact_number}
                                    name="contact_number"
                                    value={formData.contact_number}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-wrap gap-5 justify-center sm:justify-center">
                                <TextField
                                    error={error?.errors?.password}
                                    label="password"
                                    helperText={error?.errors?.password}
                                    className="sm:w-full"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex justify-center md:justify-end ">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Submit
                                </Button>
                            </div>
                        </Box>
                    </form>
                </div>
            </section>
        </Paper>
    );
};

export default CreateAdmin;

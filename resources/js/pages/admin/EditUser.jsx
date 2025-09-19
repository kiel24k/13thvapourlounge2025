import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useParams } from "react-router-dom";
import { useGetUser, useUpdateUser } from "../../hooks/useUsers";
import lodash from "lodash";

const EditUser = () => {
    const { id } = useParams();
    const { data, isPending } = useGetUser(id);
    const { mutate, error } = useUpdateUser();
    const [imagePreview, setImagePreview] = useState("");
    const [handleDisabled, setHandleDisabled] = useState(true);

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
    const [formData, setFormData] = useState({
        id: "",
        first_name: "",
        last_name: "",
        contact_number: "",
        email: "",
        date_of_birth: "",
        image: "",
        role: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (data) {
            setFormData({
                id: data.id,
                first_name: data.first_name,
                last_name: data.last_name,
                contact_number: data.contact_number,
                email: data.email,
                date_of_birth: data.date_of_birth,
                image: "",
                role: data.role,
                password: data.password,
            });
        }
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(formData);
        console.log(error);
    };

    useEffect(() => {
        let oldFormData = {
            id: data?.id,
            first_name: data?.first_name,
            last_name: data?.last_name,
            contact_number: data?.contact_number,
            email: data?.email,
            date_of_birth: data?.date_of_birth,
            image: "",
            role: data?.role,
            password: data?.password,
        };
        setHandleDisabled(() => JSON.stringify(oldFormData) === JSON.stringify(formData));
    }, [formData]);

    if (isPending) {
        return <h1>Is loading</h1>;
    }
    return (
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

            <div className="grid gap-2 sm:w-max pl-15 pr-15 mt-5">
                <Typography variant="h5" sx={{ marginTop: "1rem" }}>
                    Edit Information
                </Typography>
                <div className="flex items-center justify-start gap-5">
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

                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: "grid", gap: "2rem" }}>
                        <div className="flex flex-wrap gap-5">
                            <TextField
                                type="text"
                                error={error?.errors?.first_name}
                                label="First name"
                                helperText={error?.errors?.first_name}
                                value={formData.first_name}
                                onChange={handleChange}
                                name="first_name"
                            />
                            <TextField
                                error={error?.errors?.last_name}
                                label="Last name"
                                helperText={error?.errors?.last_name}
                                value={formData.last_name}
                                onChange={handleChange}
                                name="last_name"
                            />
                        </div>
                        <div className="flex flex-wrap gap-5">
                            <TextField
                                error={error?.errors?.contact_number}
                                label="Contact number"
                                helperText={error?.errors?.contact_number}
                                value={formData.contact_number}
                                onChange={handleChange}
                                name="contact_number"
                            />
                            <TextField
                                error={error?.errors?.date_of_birth}
                                label="Date of Birth (optional)"
                                helperText={error?.errors?.date_of_birth}
                                value={formData.date_of_birth}
                                onChange={handleChange}
                                name="date_of_birth"
                            />
                        </div>
                        <div className="flex flex-wrap gap-5">
                            <TextField
                                label="Email"
                                disabled
                                helperText="incorrect entry"
                                value={formData.email}
                                onChange={handleChange}
                                name="email"
                            />
                            <TextField
                                error={error?.errors?.role}
                                label="Role"
                                helperText={error?.errors?.role}
                                value={formData.role}
                                onChange={handleChange}
                                name="role"
                            />
                        </div>
                        <div className="flex flex-wrap gap-5">
                            <TextField
                                label="password"
                                name="password"
                                onChange={handleChange}
                                value={formData.password}
                                className="sm:w-full"
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button
                                disabled={handleDisabled}
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
    );
};

export default EditUser;

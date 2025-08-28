import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const CreateAdmin = () => {
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
                   Fill up information
                </Typography>
                <div className="flex items-center justify-start gap-5">
                    <figure>
                        <img
                            src="https://tse1.mm.bing.net/th/id/OIF.qkH5j3tJxjQKOSy1CgfGHQ?rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt="online avatar"
                            width={150}
                            height={150}
                            className="rounded-full"
                        />
                    </figure>
                    <div className="">
                        <Button variant="contained" size="small" sx={{bgcolor: "gray"}}>
                            Add profile
                        </Button>
                    </div>
                </div>
                <Box sx={{ display: "grid", gap: "5px" }}>
                    <div className="flex flex-wrap gap-5">
                        <TextField
                            error
                            label="Kiel"
                            helperText="incorrect entry"
                        />
                        <TextField
                            error
                            label="Bermudez"
                            helperText="incorrect entry"
                        />
                    </div>
                    <div className="flex flex-wrap gap-5">
                        <TextField
                            error
                            label="09193471522"
                            helperText="incorrect entry"
                        />
                        <TextField
                            error
                            label="2-25-0808"
                            helperText="incorrect entry"
                        />
                    </div>
                    <div className="flex flex-wrap gap-5">
                        <TextField
                            error
                            label="haha@gmail.com"
                            helperText="incorrect entry"
                        />
                        <TextField
                            error
                            label="admin"
                            helperText="incorrect entry"
                        />
                    </div>
                    <div className="flex flex-wrap gap-5">
                        <TextField
                            error
                            label="password"
                            helperText="incorrect entry"
                            className="sm:w-full"
                        />
                    </div>
                    <div className="flex justify-end">
                        <Button variant="contained" color="primary">
                            Submit
                        </Button>
                    </div>
                </Box>
            </div>
        </section>
    );
};

export default CreateAdmin;

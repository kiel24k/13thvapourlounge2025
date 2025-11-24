import {
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";

const UpdateProduct = () => {
    return (
        <section>
            <div className="p-2">
                <div className="flex gap-2 items-center">
                    <span className="font-semibold text-2xl">New Product</span>
                </div>
            </div>

            <div className="p-3 flex flex-wrap md:flex-nowrap ">
                <div className="grid w-full md:w-1/2 p-2 border-r-1">
                    <form action="" className="grid gap-5">
                        <div className="grid">
                            <TextField label="Product name" />
                        </div>
                        <div className="grid gap-4">
                            <TextField label="Price" />
                            <TextField label="Quantity" type="number" />
                        </div>
                        <div className="grid gap-4">
                            <span className="text-blue-500 font-bold">
                                Category:{" "}
                            </span>
                            <TextField label="Name" />
                            <TextField label="Description" multiline rows={4} />
                        </div>

                        <div className="grid gap-4">
                            <span className="text-blue-500 font-bold">
                                Description:{" "}
                            </span>
                            <TextField label="Body" />
                            <TextField label="Content" multiline rows={4} />
                        </div>

                        <div className="grid gap-4">
                            <span className="text-blue-500 font-bold">
                                Option:{" "}
                            </span>
                            <TextField label="Title" />
                            <TextField label="Label" multiline rows={4} />
                        </div>
                        <div className="flex justify-end">
                            <Button color="primary" variant="contained">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>

                <div className="grid gap-4 items-start content-start p-2 w-full md:w-1/2 ">
                    <Typography variant="h5" color="initial">
                        Preview
                    </Typography>
                    <div className="grid gap-4 ">
                        <div className="grid gap-4">
                            <Typography variant="h4" color="initial">
                                Cholos Blend Salt Nic Vape Juice 20mL
                            </Typography>
                            <b className="text-green-500 text-2xl">P700.00</b>
                        </div>

                        <div className="grid gap-4">
                            <p className="font-semibold text-gray-500">
                                Cholos Blend satisfies your desires with our
                                enormous variety of e-liquids,Cholos Blend from
                                traditional tobacco and menthol to fruity and
                                dessert-inspired blends.Providing options for
                                all types of vapers. Whether you prefer a dense
                                or PG balanced liquid, it will make your throat
                                feel the ultimate enjoyment. Explore our wide
                                range of liquid flavors to find your favorite.
                                Each of our e-liquids is carefully crafted to
                                ensure that the quality of the liquid will bring
                                you immersive enjoyment
                            </p>
                            <ul className="list-disc ml-4 grid gap-3 text-gray-600 font-semibold">
                                <li>Volume: 20mL</li>
                                <li>Volume: 20mL</li>
                                <li>Volume: 20mL</li>
                                <li>Volume: 20mL</li>
                                <li>Volume: 20mL</li>
                                <li>Volume: 20mL</li>
                                <li>Volume: 20mL</li>
                            </ul>
                        </div>

                        <div className="grid gap-5 mt-3">
                            <div className="flex gap-3">
                                <b>FLAVORS:</b>
                                <select name="Choose option" id="" className="border-1 p-2 rounded-2xl">
                                  <option value="" selected disabled>Choose option</option>
                                </select>
                            </div>
                            <div className="flex gap-3">
                                <b>NICOTINE:</b>
                                 <select name="Choose option" id="" className="border-1 p-2 rounded-2xl">
                                  <option value="" selected disabled>Choose option</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateProduct;

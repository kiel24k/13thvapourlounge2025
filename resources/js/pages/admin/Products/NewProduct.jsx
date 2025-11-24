import {
    Button,
    FormControl,
    FormHelperText,
    IconButton,
    Input,
    InputLabel,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useStoreProduct } from "../../../hooks/useProducts";
import HistoryBackButton from "../../../components/HistoryBackButton";

const NewProduct = () => {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [descriptionBody, setDescriptionBody] = useState("");
    const [content, setContent] = useState("");
    const [contentObj, setContentObj] = useState([]);
    const [category, setCategory] = useState("");
    const [optionTitle, setOptionTitle] = useState("");
    const [optionLabel, setOptionLabel] = useState("");
    const [optionLabelObj, setOptionLabelObj] = useState([]);
    const [option, setOption] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const [imagePreview, setImagePreview] = useState([]);
    const [imageFile, setImageFile] = useState([]);

    const { mutate, error } = useStoreProduct();

    const handleAddContent = () => {
        setContentObj((prev) => [...prev, content]);
        setContent("");
    };

    const handleRemoveContentObj = (data) => {
        setContentObj((prev) => prev.filter((content) => content !== data));
    };

    const handleAddLabelOption = () => {
        setOptionLabelObj((prev) => [...prev, optionLabel]);
        setOptionLabel("");
    };

    const handleAddOption = () => {
        setOption((prev) => [
            ...prev,
            {
                title: optionTitle,
                labels: optionLabelObj.map((data) => data),
            },
        ]);

        setOptionTitle("");
        setOptionLabel("");
        setOptionLabelObj("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(
            {
                image: imageFile,
                product_name: productName,
                price: price,
                quantity: quantity,
                product_category: category,
                product_details: {
                    description_body: descriptionBody,
                    description_content: contentObj,
                    option_title: option,
                    option: option,
                },
            },
            {
                onSuccess: () => {
                    setImageFile(null)
                    setImagePreview([])
                    setProductName("");
                    setPrice("");
                    setQuantity("");
                    setCategory("");
                    setDescriptionBody("");
                    setContentObj("");
                    setOption("");

                    document.getElementById("image").value = null
                  
                 },
            },
        );
    };

    const handleImageChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const previewUrls = selectedFiles.map((file) =>
            URL.createObjectURL(file),
        );

        setImageFile(selectedFiles);
        setImagePreview(previewUrls);
    };

    return (
        <section>
            <div className="p-2">
                <div className="flex gap-2 items-center">
                    <HistoryBackButton title={"New Product"} />
                </div>
            </div>

            <div className="p-3 flex flex-wrap md:flex-nowrap ">
                <div className="grid w-full md:w-1/2 p-2 border-r-1">
                    <form
                        action=""
                        className="grid gap-5"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid">
                            <TextField
                                label="Product name"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                helperText={error?.errors?.product_name}
                                error={error?.errors?.product_name}
                            />
                        </div>
                        <div className="grid gap-4">
                            <TextField
                                label="Price"
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                helperText={error?.errors?.product_price}
                                error={error?.errors?.product_price}
                            />
                            <TextField
                                label="Quantity"
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                helperText={error?.errors?.product_quantity}
                                error={error?.errors?.product_quantity}
                            />
                        </div>

                        <div className="grid gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-blue-500 font-bold">
                                    Category:{" "}
                                </span>
                                <select
                                    name=""
                                    id=""
                                    className="border-1 border-gray-400"
                                >
                                    <option value="" selected disabled>
                                        Choose category
                                    </option>
                                </select>
                            </div>
                            <TextField
                                label="Name"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                helperText={error?.errors?.product_category}
                                error={error?.errors?.product_category}
                            />
                        </div>

                        <div className="grid gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-blue-500 font-bold">
                                    Description:{" "}
                                </span>
                                <select
                                    name=""
                                    id=""
                                    className="border-1 border-gray-400"
                                >
                                    <option value="" selected disabled>
                                        Choose description
                                    </option>
                                </select>
                            </div>

                            <TextField
                                label="Body"
                                multiline
                                rows={3}
                                value={descriptionBody}
                                onChange={(e) =>
                                    setDescriptionBody(e.target.value)
                                }
                                helperText={error?.errors?.product_description}
                                error={error?.errors?.product_description}
                            />
                            <div className="flex gap-2">
                                <TextField
                                    label="Content"
                                    fullWidth
                                    rows={4}
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                                <Button
                                    variant="contained"
                                    color="success"
                                    disabled={content.length <= 0}
                                    onClick={handleAddContent}
                                >
                                    Add
                                </Button>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                {contentObj &&
                                    contentObj.map((data) => (
                                        <span
                                            className="p-2 bg-violet-500 rounded-full text-white"
                                            onClick={() =>
                                                handleRemoveContentObj(data)
                                            }
                                        >
                                            {data}{" "}
                                        </span>
                                    ))}
                            </div>
                        </div>

                        <div className="grid gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-blue-500 font-bold">
                                    Option:{" "}
                                </span>
                                <select
                                    name=""
                                    id=""
                                    className="border-1 border-gray-400"
                                >
                                    <option value="" selected disabled>
                                        Choose option
                                    </option>
                                </select>
                            </div>
                            <TextField
                                label="Title"
                                value={optionTitle}
                                onChange={(e) => setOptionTitle(e.target.value)}
                                helperText={error?.errors?.product_option}
                                error={error?.errors?.product_option}
                            />
                            <div className="flex  gap-4">
                                <TextField
                                    label="Label"
                                    fullWidth
                                    value={optionLabel}
                                    onChange={(e) =>
                                        setOptionLabel(e.target.value)
                                    }
                                />

                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={handleAddLabelOption}
                                    disabled={optionLabel.length <= 0}
                                >
                                    Add
                                </Button>
                            </div>
                            <div className="flex items-center gap-2 flex-wrap">
                                {optionLabelObj &&
                                    optionLabelObj.map((data) => (
                                        <span
                                            className="p-2 bg-violet-500 rounded-full text-white"
                                            onClick={() =>
                                                handleRemoveContentObj(data)
                                            }
                                        >
                                            {data}{" "}
                                        </span>
                                    ))}
                            </div>
                        </div>

                        <div className="flex">
                            <Button
                                variant="contained"
                                color="secondary"
                                size="small"
                                onClick={handleAddOption}
                                disabled={
                                    optionTitle.length <= 0 ||
                                    optionLabelObj.length < 1
                                }
                            >
                                Add option
                            </Button>
                        </div>

                        <div className="grid gap-2">
                            <b className="text-blue-500">Image:</b>
                            <input
                                type="file"
                                accept="image/*"
                                className="border-1 p-2 rounded-md"
                                onChange={handleImageChange}
                                multiple
                            />

                            <figure>
                                <div className="flex flex-wrap gap-3">
                                    {imagePreview.map((img, index) => (
                                        <div className="p-2 border-1 h-max border-gray-400 rounded-2xl">
                                            <img
                                                id="image"
                                                src={img}
                                                width={80}
                                                height={80}
                                                alt="product image"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </figure>
                        </div>

                        <div className="flex justify-end">
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>

                <div className="grid gap-4 items-start content-start p-2 w-full md:w-1/2 ">
                    <Typography variant="h5" color="initial">
                        Preview
                    </Typography>
                    <b>{category}</b>
                    <div className="grid gap-4 ">
                        <div className="grid gap-4">
                            <Typography variant="h4" color="initial">
                                {productName}
                            </Typography>
                            {price && (
                                <b className="text-green-500 text-2xl">
                                    P{Number(price).toLocaleString()}.00
                                </b>
                            )}
                        </div>

                        <div className="grid gap-4">
                            <p className="font-semibold text-gray-500">
                                {descriptionBody}
                            </p>
                            <ul className="list-disc ml-4 grid gap-3 text-gray-600 font-semibold">
                                {contentObj &&
                                    contentObj.map((data) => (
                                        <li>
                                            <span className="capitalize">
                                                {data}
                                            </span>
                                        </li>
                                    ))}
                            </ul>
                        </div>

                        <div className="grid gap-5 mt-3">
                            {option &&
                                option.map((data) => (
                                    <div className="flex gap-3 items-center">
                                        <b className="uppercase">
                                            {data.title}:
                                        </b>

                                        <select
                                            name="Choose option"
                                            id=""
                                            className="border-1 p-2 rounded-2xl min-w-70"
                                        >
                                            <option value="" selected disabled>
                                                Choose option
                                            </option>

                                            {data.labels.map((label) => (
                                                <option
                                                    value={label}
                                                    className="capitalize"
                                                >
                                                    {label}
                                                </option>
                                            ))}
                                        </select>
                                        <IconButton color="error">
                                            <DeleteForeverIcon />
                                        </IconButton>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewProduct;

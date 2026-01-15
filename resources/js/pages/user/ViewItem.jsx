import React, { useEffect, useState } from "react";
import FadeInSection from "../../components/FadeInSection";
import ProductImageGallery from "../../components/ProductImageGallery";
import { useParams } from "react-router-dom";
import { useShowProduct } from "../../hooks/useProducts";
import { Button, CircularProgress } from "@mui/material";
import { FaCartArrowDown } from "react-icons/fa";
import { useStoreCart } from "../../hooks/useCart";
import { useGetAuthUser } from "../../hooks/useUsers";

const ViewItem = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [isOptionError, setIsOptionError] = useState(false);
    const { product_category } = useParams();
    const { data, isFetching } = useShowProduct(product_category);
    const { data: user } = useGetAuthUser();
    const { mutate } = useStoreCart();

    const handleAddQuantity = () => {
        if (quantity < data?.product_quantity) setQuantity((prev) => prev + 1);
    };

    const handleReduceQuantity = () => {
        if (quantity > 1) setQuantity((prev) => prev - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            JSON.parse(data.product_details).option_title.length !==
                Object.values(selectedOptions).length ||
            Object.values(selectedOptions).some((v) => v === "")
        ) {
            setIsOptionError(true);
        } else {
            setIsOptionError(false);
            mutate(
                {
                    user_id: user.id,
                    product_id: data.id,
                    option_type: JSON.stringify(selectedOptions),
                    quantity: quantity,
                    total: quantity * data.product_price,
                },
                { onSuccess: () => setQuantity(1) }
            );
        }
    };

    const handleSelectChange = (title, value) => {
        setSelectedOptions((prev) => ({ ...prev, [title]: value }));
    };

    if (isFetching) {
        return (
            <div className="flex flex-col items-center justify-center mt-20 gap-3">
                <CircularProgress size={50} />
                <span className="font-semibold">Loading...</span>
            </div>
        );
    }

    return (
        <FadeInSection>
            <section className="max-w-7xl mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Product Images */}
                    <div className="w-full">
                        {data && <ProductImageGallery data={JSON.parse(data.image)} />}
                    </div>

                    {/* Product Details Form */}
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="flex flex-col gap-4">
                            {/* Title & Price */}
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl md:text-3xl font-semibold">
                                    {data?.product_name}
                                </h1>
                                <span className="text-green-600 font-bold text-xl md:text-2xl">
                                    ₱{parseInt(data?.product_price).toLocaleString()}.00
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-700">{data && JSON.parse(data?.product_details)?.description_body}</p>

                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {data &&
                                    JSON.parse(data?.product_details).description_content.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                            </ul>

                            {/* Options */}
                            <div className="grid gap-3 mt-4">
                                {data &&
                                    JSON.parse(data?.product_details).option_title.map((option) => (
                                        <div
                                            key={option.title}
                                            className="flex flex-col sm:flex-row sm:items-center gap-2"
                                        >
                                            <label className="font-semibold w-full sm:w-32">{option.title}:</label>
                                            <select
                                                className="border border-gray-300 rounded-xl p-2 w-full sm:w-auto flex-1"
                                                value={selectedOptions[option.title] || ""}
                                                onChange={(e) => handleSelectChange(option.title, e.target.value)}
                                            >
                                                <option value="" disabled>
                                                    Select option
                                                </option>
                                                {option.labels &&
                                                    option.labels.map((label) => (
                                                        <option key={label} value={label}>
                                                            {label}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                    ))}
                                {isOptionError && (
                                    <span className="text-red-600 font-medium">Please fill all options</span>
                                )}
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
                                {/* Quantity */}
                                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                                    <button
                                        type="button"
                                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 font-bold"
                                        onClick={handleReduceQuantity}
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        className="w-16 text-center border-l border-r border-gray-300 outline-none"
                                        min={1}
                                        max={data?.product_quantity}
                                        value={quantity}
                                        onChange={(e) => setQuantity(Number(e.target.value))}
                                    />
                                    <button
                                        type="button"
                                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 font-bold"
                                        onClick={handleAddQuantity}
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Add to Cart Button */}
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="success"
                                    startIcon={<FaCartArrowDown />}
                                    sx={{ textTransform: "none", whiteSpace: "nowrap" }}
                                    className="flex-1 sm:flex-none"
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </FadeInSection>
    );
};

export default ViewItem;

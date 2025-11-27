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
    const { id } = useParams();
    const { data, isFetching } = useShowProduct(id);
    const { data: user } = useGetAuthUser();

    const { mutate } = useStoreCart();

    const handleAddQuantity = () => {
        if (quantity < data?.product_quantity) {
            setQuantity((prev) => (prev += 1));
        }
    };

    const handleReduceQuantity = () => {
        if (quantity <= data?.product_quantity) {
            setQuantity((prev) => (prev -= 1));
        }
        if (quantity === 1) {
            setQuantity(1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);

        if (
            JSON.parse(data.product_details).option_title.length !==
                Object.values(selectedOptions).length ||
            Object.values(selectedOptions).some((v) => v === "")
        ) {
            setIsOptionError(true);
            console.log(isOptionError);
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
                {
                    onSuccess: () => {
                        setQuantity(1);
                    },
                },
            );
        }
    };

    const handleSelectChange = (title, value) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [title]: value, // e.g. { Color: "Red", Size: "Medium" }
        }));
    };

    if (isFetching) {
        return (
            <div className="flex items-center justify-center">
                <CircularProgress size={40} />
                <b>Loading...</b>
            </div>
        );
    }

    return (
        <>
            <FadeInSection>
                <section className="w-300 m-auto">
                    <div className="grid grid-cols-2 items-start content-start">
                        <div className="">
                            {data && (
                                <ProductImageGallery
                                    data={JSON.parse(data.image)}
                                />
                            )}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid">
                                <div className="grid gap-5 ">
                                    <span className="text-3xl">
                                        {data?.product_name}
                                    </span>
                                    <b className="font-bold text-2xl text-green-600">
                                        ₱
                                        {parseInt(
                                            data?.product_price,
                                        ).toLocaleString()}
                                        .00
                                    </b>
                                </div>
                                <div className="pt-4 pb-4 ">
                                    <p className="text-gray-700">
                                        {data &&
                                            JSON.parse(data?.product_details)
                                                ?.description_body}
                                    </p>
                                </div>
                                <div className="text-gray-700">
                                    <ul className="grid gap-3">
                                        {data &&
                                            JSON.parse(
                                                data?.product_details,
                                            ).description_content.map(
                                                (data) => <li>• {data}</li>,
                                            )}
                                    </ul>
                                </div>
                                <div className="grid gap-2">
                                    {data &&
                                        JSON.parse(
                                            data?.product_details,
                                        ).option_title.map((data) => (
                                            <div className="flex gap-3 items-center mt-5">
                                                <label htmlFor="">
                                                    <b>{data.title}:</b>
                                                </label>
                                                <select
                                                    name=""
                                                    id=""
                                                    className="border-1 p-2 rounded-2xl border-gray-400"
                                                    value={
                                                        selectedOptions[
                                                            data.title
                                                        ]
                                                    }
                                                    onChange={(e) =>
                                                        handleSelectChange(
                                                            data.title,
                                                            e.target.value,
                                                        )
                                                    }
                                                >
                                                    <option
                                                        value=""
                                                        disabled
                                                        selected
                                                    >
                                                        Select option
                                                    </option>
                                                    {data.labels &&
                                                        data.labels.map(
                                                            (label) => (
                                                                <option
                                                                    value={
                                                                        label
                                                                    }
                                                                    key={label}
                                                                >
                                                                    {label}
                                                                </option>
                                                            ),
                                                        )}
                                                </select>
                                            </div>
                                        ))}
                                </div>
                                 {isOptionError && (
                                        <li className="text-red-700 capitalize">fill up all option</li>
                                    )}

                                <div className="flex gap-4 items-center mt-10">
                                    <div className="flex items-center content-center border-1 rounded-lg font-bold">
                                        <button
                                            type="button"
                                            className="w-6 border-gray-400 cursor-pointer"
                                            onClick={handleReduceQuantity}
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            className="border-1 w-20 border-gray-400 p-1"
                                            min={1}
                                            max={data?.product_quantity}
                                            value={quantity}
                                            onChange={(e) =>
                                                setQuantity(e.target.value)
                                            }
                                        />
                                        <button
                                            type="button"
                                            className="w-6 border-gray-400 cursor-pointer font-bold"
                                            onClick={handleAddQuantity}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        sx={{ textTransform: "none" }}
                                        startIcon={<FaCartArrowDown />}
                                        type="submit"
                                    >
                                        Add to cart
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </FadeInSection>
        </>
    );
};

export default ViewItem;

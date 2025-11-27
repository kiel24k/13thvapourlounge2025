import { TextFields } from "@mui/icons-material";
import {
    Button,
    Checkbox,
    CircularProgress,
    IconButton,
    TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import {
    useDeleteCart,
    useShowCartById,
    useUpdateCart,
} from "../../hooks/useCart";
import { useGetAuthUser } from "../../hooks/useUsers";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { RxUpdate } from "react-icons/rx";

import BillingDetails from "./components/BillingDetails";

const ShoppingCart = () => {
    const { data: user } = useGetAuthUser();
    const { data: cart, isFetching } = useShowCartById(user?.id);
    const [carts, setCarts] = useState([]);
    const [checkbox, setCheckBox] = useState([]);
    const [cartPrices, setCartPrices] = useState([]);
    const { mutate: updateCart } = useUpdateCart();
    const { mutate: deleteCart } = useDeleteCart();

    const handleCheckBox = (item) => {
        let updateCheckbox;

        if (checkbox.includes(item.id)) {
            updateCheckbox = checkbox.filter((el) => el !== item.id); //remove id in array to make it false and uncheck the checkbox
        } else {
            updateCheckbox = [...checkbox, item.id]; // add the id in array to make it true and check the checkbox
        }

        setCheckBox(updateCheckbox);
    };

    useEffect(() => {
        const getCheck = checkbox.map((el) => {
            const findCheck = cart.find((cartEl) => cartEl.id === el);
            const total = parseInt(findCheck.total);
            if (total) {
                return total;
            }
        });

        setCartPrices(
            getCheck.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0,
            ),
        );
    }, [checkbox]);

    useEffect(() => {
        if (cart) {
            setCarts(cart);
        }
    }, [cart]);

    const handleQuantityChange = (maxQty, id, field, value) => {
        const updateCart = carts.map((cart) =>
            cart.id === id ? { ...cart, [field]: Number(value) } : cart,
        );
        setCarts(updateCart);

        if (Number(value) >= maxQty) {
            const maxCart = carts.map((cart) =>
                cart.id === id ? { ...cart, [field]: Number(maxQty) } : cart,
            );
            setCarts(maxCart);
        }

        // if (Number(value) <= 0) {
        //     const minimumCart = carts.map((cart) =>
        //         cart.id === id ? { ...cart, [field]: 0 } : cart,
        //     );
        //     setCarts(minimumCart);
        // }
    };

    const handleUpdateCart = () => {
        updateCart(carts);
    };

    const deleteCarts = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCart(checkbox);
                setCheckBox([]);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
            }
        });
    };

    const handleIncrement = (maxQty, id) => {
        setCarts((prev) =>
            prev.map((cart) =>
                cart.id === id
                    ? {
                          ...cart,
                          quantity:
                              cart.quantity < maxQty
                                  ? cart.quantity + 1
                                  : maxQty,
                      }
                    : cart,
            ),
        );
    };

    const handleDecrement = (maxQty, id) => {
        setCarts((prev) =>
            prev.map((cart) =>
                cart.id === id
                    ? {
                          ...cart,
                          quantity: cart.quantity > 1 ? cart.quantity - 1 : 1,
                      }
                    : cart,
            ),
        );
    };

    if (isFetching) {
        return (
            <div className="flex gap-5 items-center justify-center">
                <CircularProgress size={100} />
                <b>Loading . . .</b>
            </div>
        );
    }
    return (
        <>
            <section className="md:w-300 m-auto">
                <div className="flex justify-center gap-2 mb-2">
                    {carts.length > 0 && (
                        <Button
                            variant="outlined"
                            color="info"
                            size="small"
                            startIcon={<RxUpdate />}
                            sx={{ textTransform: "none" }}
                            onClick={handleUpdateCart}
                        >
                            Update Cart
                        </Button>
                    )}
                    {checkbox.length > 0 && (
                        <IconButton sx={{ color: "red" }} onClick={deleteCarts}>
                            <MdDeleteOutline />
                        </IconButton>
                    )}
                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-5 md:gap-0">
                    <div className="max-h-100 overflow-y-scroll gap-5 md:gap-2">
                        <table className="border border-gray-200  mt-5 ">
                            <thead>
                                <tr>
                                    <th className="border border-b-1 border-gray-200">
                                        <Checkbox />
                                    </th>
                                    <th className="border border-b-1 border-gray-200">
                                        Item
                                    </th>
                                    <th className="border border-b-1 border-gray-200">
                                        Price
                                    </th>
                                    <th className="border border-b-1 border-gray-200">
                                        Qty
                                    </th>
                                    <th className="border border-b-1 border-gray-200">
                                        Subtotal
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {carts &&
                                    carts.map((data, key) => (
                                        <tr key={key}>
                                            <td>
                                                <Checkbox
                                                    disabled={
                                                        data.quantity <= 0
                                                    }
                                                    checked={checkbox.includes(
                                                        data.id,
                                                    )}
                                                    onChange={() =>
                                                        handleCheckBox(data)
                                                    }
                                                />
                                            </td>
                                            <td className="p-2">
                                                <figure className="flex gap-5">
                                                    <div className="">
                                                        <img
                                                            src={`/images/${JSON.parse(data.products.image)[0]}`}
                                                            alt="cart image"
                                                            width={150}
                                                            height={150}
                                                        />
                                                    </div>
                                                    <figcaption>
                                                        <span>
                                                            {
                                                                data.products
                                                                    .product_name
                                                            }
                                                        </span>
                                                    </figcaption>
                                                </figure>
                                            </td>
                                            <td className="p-5">
                                                <div className="grid">
                                                    <b className="font-bold">
                                                        ₱
                                                        {Number(
                                                            data.products
                                                                .product_price,
                                                        ).toLocaleString()}
                                                        .00
                                                    </b>
                                                </div>
                                            </td>
                                            <td className="p-5">
                                                <div className="flex gap-2">
                                                    <button
                                                        className="border-1 border-green-500 w-5 rounded-1xl shadow-2xl font-bold"
                                                        onClick={() =>
                                                            handleIncrement(
                                                                data.products
                                                                    .product_quantity,
                                                                data.id,
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </button>
                                                    <input
                                                        type="number"
                                                        value={data.quantity}
                                                        max={
                                                            data.products
                                                                .product_quantity
                                                        }
                                                        min={1}
                                                        className="w-10 outline-1"
                                                        onChange={(e) =>
                                                            handleQuantityChange(
                                                                data.products
                                                                    .product_quantity,
                                                                data.id,
                                                                "quantity",
                                                                e.target.value,
                                                            )
                                                        }
                                                    />
                                                    <button
                                                        className="border-1 border-red-400 w-5 rounded-1xl shadow-2xl"
                                                        onClick={() =>
                                                            handleDecrement(
                                                                data.products
                                                                    .product_quantity,
                                                                data.id,
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="p-5">
                                                <span className="font-bold text-green-600">
                                                    ₱
                                                    {Number(
                                                        data.total,
                                                    ).toLocaleString()}
                                                    .00
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="w-full md:w-150 bg-gray-50">
                        <div className="grid gap-5 p-2">
                            <div className="border-b-1 border-gray-300 pb-3 ">
                                <span>SUMMARY</span>
                            </div>

                            {/* <div className="flex justify-between">
                                <span>Sub Total</span>
                                <span className="font-bold">
                                    ₱{cartPrices.toLocaleString()}.00
                                </span>
                            </div> */}

                            <div className="flex justify-between">
                                <span>Total</span>
                                <span className="font-bold text-green-600">
                                    ₱{cartPrices.toLocaleString()}.00
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <BillingDetails
                                    checkBox={checkbox}
                                    carts={carts}
                                    total={cartPrices}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShoppingCart;

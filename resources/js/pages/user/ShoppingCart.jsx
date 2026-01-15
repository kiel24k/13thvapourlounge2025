import { TextFields } from "@mui/icons-material";
import {
    Button,
    Checkbox,
    CircularProgress,
    IconButton,
    TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        const updateCheckbox = checkbox.includes(item.id)
            ? checkbox.filter((el) => el !== item.id)
            : [...checkbox, item.id];
        setCheckBox(updateCheckbox);
    };

    useEffect(() => {
        const getCheck = checkbox.map((el) => {
            const findCheck = cart.find((cartEl) => cartEl.id === el);
            const total = parseInt(findCheck.total);
            if (total) return total;
        });

        setCartPrices(
            getCheck.reduce((acc, curr) => acc + curr, 0)
        );
    }, [checkbox]);

    useEffect(() => {
        if (cart) setCarts(cart);
    }, [cart]);

    const handleQuantityChange = (maxQty, id, field, value) => {
        const updateCart = carts.map((cart) =>
            cart.id === id ? { ...cart, [field]: Number(value) } : cart
        );
        setCarts(updateCart);

        if (Number(value) >= maxQty) {
            const maxCart = carts.map((cart) =>
                cart.id === id ? { ...cart, [field]: Number(maxQty) } : cart
            );
            setCarts(maxCart);
        }
    };

    const handleUpdateCart = () => updateCart(carts);

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
                    : cart
            )
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
                    : cart
            )
        );
    };

    if (isFetching) {
        return (
            <div className="flex flex-col items-center justify-center mt-20 gap-5">
                <CircularProgress size={80} />
                <span className="text-lg font-semibold">Loading . . .</span>
            </div>
        );
    }

    return (
        <section className="max-w-7xl mx-auto p-4">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
                {carts.length > 0 && (
                    <Button
                        variant="contained"
                        color="info"
                        size="medium"
                        startIcon={<RxUpdate />}
                        sx={{ textTransform: "none" }}
                        onClick={handleUpdateCart}
                    >
                        Update Cart
                    </Button>
                )}
                {checkbox.length > 0 && (
                    <IconButton
                        sx={{ color: "red" }}
                        onClick={deleteCarts}
                        size="large"
                    >
                        <MdDeleteOutline />
                    </IconButton>
                )}
            </div>

            {/* Cart + Summary */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Cart Table */}
                <div className="flex-1 overflow-x-auto rounded-lg shadow bg-white p-4">
                    <table className="w-full min-w-[600px] border-collapse">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 border-b border-gray-300">
                                    <Checkbox />
                                </th>
                                <th className="p-2 border-b border-gray-300 text-left">
                                    Item
                                </th>
                                <th className="p-2 border-b border-gray-300 text-right">
                                    Price
                                </th>
                                <th className="p-2 border-b border-gray-300 text-center">
                                    Qty
                                </th>
                                <th className="p-2 border-b border-gray-300 text-right">
                                    Subtotal
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts &&
                                carts.map((data, key) => (
                                    <tr
                                        key={key}
                                        className="hover:bg-gray-50 transition"
                                    >
                                        <td className="p-2 text-center">
                                            <Checkbox
                                                disabled={data.quantity <= 0}
                                                checked={checkbox.includes(
                                                    data.id
                                                )}
                                                onChange={() =>
                                                    handleCheckBox(data)
                                                }
                                            />
                                        </td>
                                        <td className="p-2">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={`/images/${JSON.parse(
                                                        data.products.image
                                                    )[0]}`}
                                                    alt="cart item"
                                                    className="w-20 h-20 object-cover rounded"
                                                />
                                                <span className="font-medium">
                                                    {
                                                        data.products
                                                            .product_name
                                                    }
                                                </span>
                                            </div>
                                        </td>
                                        <td className="p-2 text-right font-semibold">
                                            ₱
                                            {Number(
                                                data.products.product_price
                                            ).toLocaleString()}
                                            .00
                                        </td>
                                        <td className="p-2 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    className="bg-red-100 text-red-600 px-2 rounded hover:bg-red-200 transition"
                                                    onClick={() =>
                                                        handleDecrement(
                                                            data.products
                                                                .product_quantity,
                                                            data.id
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    value={data.quantity}
                                                    max={
                                                        data.products
                                                            .product_quantity
                                                    }
                                                    min={1}
                                                    className="w-12 text-center border rounded py-1"
                                                    onChange={(e) =>
                                                        handleQuantityChange(
                                                            data.products
                                                                .product_quantity,
                                                            data.id,
                                                            "quantity",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <button
                                                    className="bg-green-100 text-green-600 px-2 rounded hover:bg-green-200 transition"
                                                    onClick={() =>
                                                        handleIncrement(
                                                            data.products
                                                                .product_quantity,
                                                            data.id
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-2 text-right font-bold text-green-600">
                                            ₱{Number(data.total).toLocaleString()}
                                            .00
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

                {/* Summary Card */}
                <div className="w-full md:w-80 bg-gray-50 p-4 rounded-lg shadow flex-shrink-0">
                    <h3 className="font-semibold text-lg border-b border-gray-300 pb-2 mb-4">
                        SUMMARY
                    </h3>

                    <div className="flex justify-between mb-3">
                        <span className="font-medium">Total</span>
                        <span className="font-bold text-green-600">
                            ₱{cartPrices.toLocaleString()}.00
                        </span>
                    </div>

                    {checkbox.length !== 0 && (
                        <BillingDetails
                            checkBox={checkbox}
                            carts={carts}
                            total={cartPrices}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default ShoppingCart;

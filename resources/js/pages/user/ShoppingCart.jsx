import { TextFields } from "@mui/icons-material";
import { Button, Checkbox, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
    return (
        <>
            <section className="md:w-300 m-auto">
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
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td className="p-2">
                                        <figure className="flex gap-5">
                                            <div className="">
                                                <img
                                                    src="https://admin.elementvape.com/media/promobanners/Exodus_-_Megamenu_Brand.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <figcaption>
                                                <span>
                                                    FVKD Exotics Liquid Diamond
                                                    Pre Rolls 7.5G
                                                </span>
                                            </figcaption>
                                        </figure>
                                    </td>
                                    <td className="p-5">
                                        <div className="grid">
                                            <b className="font-bold">P100.00</b>
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <div className="flex gap-2">
                                            <button className="border-1 border-green-500 w-5 rounded-1xl shadow-2xl font-bold">
                                                +
                                            </button>
                                            <input
                                                type="text"
                                                value={1}
                                                className="w-10 outline-1"
                                            />
                                            <button className="border-1 border-red-400 w-5 rounded-1xl shadow-2xl">
                                                -
                                            </button>
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <span className="font-bold text-green-600">
                                            P9,232.00
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td className="p-2">
                                        <figure className="flex gap-5">
                                            <div className="">
                                                <img
                                                    src="https://admin.elementvape.com/media/promobanners/Exodus_-_Megamenu_Brand.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <figcaption>
                                                <span>
                                                    FVKD Exotics Liquid Diamond
                                                    Pre Rolls 7.5G
                                                </span>
                                            </figcaption>
                                        </figure>
                                    </td>
                                    <td className="p-5">
                                        <div className="grid">
                                            <b className="font-bold">P100.00</b>
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <div className="flex gap-2">
                                            <button className="border-1 border-green-500 w-5 rounded-1xl shadow-2xl font-bold">
                                                +
                                            </button>
                                            <input
                                                type="text"
                                                value={1}
                                                className="w-10 outline-1"
                                            />
                                            <button className="border-1 border-red-400 w-5 rounded-1xl shadow-2xl">
                                                -
                                            </button>
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <span className="font-bold text-green-600">
                                            P9,232.00
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td className="p-2">
                                        <figure className="flex gap-5">
                                            <div className="">
                                                <img
                                                    src="https://admin.elementvape.com/media/promobanners/Exodus_-_Megamenu_Brand.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <figcaption>
                                                <span>
                                                    FVKD Exotics Liquid Diamond
                                                    Pre Rolls 7.5G
                                                </span>
                                            </figcaption>
                                        </figure>
                                    </td>
                                    <td className="p-5">
                                        <div className="grid">
                                            <b className="font-bold">P100.00</b>
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <div className="flex gap-2">
                                            <button className="border-1 border-green-500 w-5 rounded-1xl shadow-2xl font-bold">
                                                +
                                            </button>
                                            <input
                                                type="text"
                                                value={1}
                                                className="w-10 outline-1"
                                            />
                                            <button className="border-1 border-red-400 w-5 rounded-1xl shadow-2xl">
                                                -
                                            </button>
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <span className="font-bold text-green-600">
                                            P9,232.00
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td className="p-2">
                                        <figure className="flex gap-5">
                                            <div className="">
                                                <img
                                                    src="https://admin.elementvape.com/media/promobanners/Exodus_-_Megamenu_Brand.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <figcaption>
                                                <span>
                                                    {" "}
                                                    FVKD Exotics Liquid Diamond
                                                    Pre Rolls 7.5G
                                                </span>
                                            </figcaption>
                                        </figure>
                                    </td>
                                    <td className="p-5">
                                        <div className="grid">
                                            <b className="font-bold">P100.00</b>
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <div className="flex gap-2">
                                            <button className="border-1 border-green-500 w-5 rounded-1xl shadow-2xl font-bold">
                                                +
                                            </button>
                                            <input
                                                type="text"
                                                value={1}
                                                className="w-10 outline-1"
                                            />
                                            <button className="border-1 border-red-400 w-5 rounded-1xl shadow-2xl">
                                                -
                                            </button>
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <span className="font-bold text-green-600">
                                            P9,232.00
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="w-full md:w-150 bg-gray-50">
                        <div className="grid gap-5 p-2">
                            <div className="border-b-1 border-gray-300 pb-3 ">
                                <span>SUMMARY</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>P32,122.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Order Total</span>
                                <span className="font-bold">P32,122.00</span>
                            </div>
                            <div className="grid">
                               <Link to={"/checkout"}>
                                <Button variant="contained" color="error">
                                    PROCEED TO CHECKOUT
                                </Button>
                               </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShoppingCart;

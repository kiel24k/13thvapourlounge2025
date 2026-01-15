import React from "react";
import Paper from "./box/Paper";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartBox = () => {
    return (
        <div className=" w-100 md:min-w-120 absolute top-15 md:top-10 right-2 :right-1 z-10">
            <Paper elevation={3}>
                <section className="p-2 grid gap-5">
                    <div className="flex gap-5 border-b-1 border-gray-300 pb-2">
                        <span className="font-bold text-red-800">
                            YOUR CART
                        </span>
                        <span className="font-semibold">3 ITEMS</span>
                    </div>

                    <div className="grid">
                        <div className="flex justify-center gap-5 items-center content-center border-b-1 border-gray-400 pb-2 pt-2">
                            <figure>
                                <img
                                    src="https://admin.elementvape.com/media/promobanners/Exodus_-_Megamenu_Brand.jpg"
                                    width={80}
                                    height={100}
                                    alt="items"
                                />
                            </figure>

                            <div className="grid max-w-50 h-15 overflow-hidden text-sm">
                                <span>
                                    Exodus THC-OP Omega badder disposable
                                </span>
                                <span>more details</span>
                            </div>

                            <div className="grid gap-2">
                                <span className="text-red-800 font-bold text-sm">
                                    P23.00
                                </span>
                                <div className="flex justify-center items-center content-center">
                                    <span className="text-sm font-semibold">
                                        QTY:{" "}
                                    </span>
                                    <span className="font-bold text-sm">
                                        23x
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-5 items-center content-cente border-b-1 border-gray-400 pb-2 pt-2">
                            <figure>
                                <img
                                    src="https://admin.elementvape.com/media/promobanners/Exodus_-_Megamenu_Brand.jpg"
                                    width={80}
                                    height={100}
                                    alt="items"
                                />
                            </figure>

                            <div className="grid w-50 h-15 overflow-hidden text-sm">
                                <span>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Eaque, veritatis aperiam
                                    animi, nostrum consequatur dicta non quod id
                                    vero culpa esse enim aspernatur qui
                                    molestias voluptas illo minima aliquid
                                    recusandae.
                                </span>
                                <span>more details</span>
                            </div>

                            <div className="grid gap-2">
                                <span className="text-red-800 font-bold text-sm">
                                    P23.00
                                </span>
                                <div className="flex justify-center items-center content-center">
                                    <span className="text-sm font-semibold">
                                        QTY:{" "}
                                    </span>
                                    <span className="font-bold text-sm">
                                        23x
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-5 bg-gray-100 p-2">
                        <div className="flex justify-between">
                            <span className="font-bold text-gray-500">
                                CART SUBTOTAL:
                            </span>
                            <span className="text-red-800 font-bold">
                                P503.00
                            </span>
                        </div>
                        <div className="flex justify-center gap-5">
                            <Link to={"shopping-cart"}>
                                <Button variant="outlined" color="black">
                                    VIEW CART
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </Paper>
        </div>
    );
};

export default CartBox;

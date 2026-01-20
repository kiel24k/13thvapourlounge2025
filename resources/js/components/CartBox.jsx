import React, { useRef, useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Paper from "./box/Paper";
import { useShowCartById } from "../hooks/useCart";
import { useGetAuthUser } from "../hooks/useUsers";

const CartBox = () => {
  const [open, setOpen] = useState(true);
  const boxRef = useRef(null);

  const { data: user } = useGetAuthUser();
  const { data: userCart = [] } = useShowCartById(user?.id);

  const subtotal = userCart.reduce((sum, item) => sum + Number(item.total), 0);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!open) return null;

  return (
    <div className="w-100 md:min-w-120 absolute top-15 md:top-10 right-2 z-10" ref={boxRef}>
      <Paper elevation={3}>
        <section className="p-2 grid gap-5">
          {/* Header */}
          <div className="flex gap-5 border-b border-gray-300 pb-2">
            <span className="font-bold text-red-800">YOUR CART</span>
            <span className="font-semibold">{userCart.length} ITEMS</span>
          </div>

          {/* Items */}
          <div className="grid">
            {userCart.map((item) => {
              const product = item.products;
              const image = JSON.parse(product.image || "[]")[0];
              const options = JSON.parse(item.option_type || "{}");

              return (
                <div
                  key={item.id}
                  className="flex gap-5 items-center border-b border-gray-400 py-2"
                >
                  <img src={`/storage/${image}`} width={80} alt="product" />

                  <div className="grid text-sm max-w-50">
                    <span className="font-medium">{product.product_name}</span>
                    <span className="text-gray-500 text-xs">
                      {Object.values(options).join(", ")}
                    </span>
                  </div>

                  <div className="grid text-right ml-auto">
                    <span className="text-red-800 font-bold text-sm">
                      ₱{Number(item.total).toLocaleString()}
                    </span>
                    <span className="text-sm font-semibold">QTY: {item.quantity}x</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subtotal */}
          <div className="bg-gray-100 p-2 grid gap-3">
            <div className="flex justify-between font-bold">
              <span className="text-gray-500">CART SUBTOTAL:</span>
              <span className="text-red-800">₱{subtotal.toLocaleString()}</span>
            </div>

            <Link to="/shopping-cart" className="flex justify-center">
              <Button variant="outlined">VIEW CART</Button>
            </Link>
          </div>
        </section>
      </Paper>
    </div>
  );
};

export default CartBox;

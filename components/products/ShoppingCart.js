"use client";

import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function ShoppingCart({ product }) {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(removeFromCart(product.id)); // argument of our reducers is action payload
    dispatch(addToCart({ product, qty: quantity }));
    toast.success("محصول به سبد خرید اضافه شد");
  }

  return (
    <div className="mt-5 d-flex">
      <button onClick={() => handleClick()} className="btn-add">
        افزودن به سبد خرید
      </button>
      <div className="input-counter ms-4">
        <button
          disabled={quantity === product.quantity}
          onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
          className="plus-btn"
        >
          +
        </button>
        <div className="input-number">{quantity}</div>
        <button
          disabled={quantity === 0}
          onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}
          className="minus-btn"
        >
          -
        </button>
      </div>
    </div>
  );
}

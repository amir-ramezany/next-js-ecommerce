"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSilce = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, qty } = action.payload;
      state.cart = [...state.cart, { ...product, qty: qty }];
      console.log(state.cart);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((p) => p.id !== action.payload);
    },
    increment: (state, action) => {
      // console.log(action.payload);

      // state.cart = state.cart.map((item) => {
      //   if (item.id === action.payload.id) {
      //     return { ...item, qty: item.qty + 1 };
      //   }
      //   return item;
      // });

      state.cart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrement: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increment, decrement } =
  cartSilce.actions;
export const cartReducer = cartSilce.reducer;

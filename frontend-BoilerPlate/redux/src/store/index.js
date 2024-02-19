import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice"
import addToCartReducer from "./AddToCartSlice"

export const store = configureStore({
    reducer:{
        productReducer,
        addToCartReducer
    }
})
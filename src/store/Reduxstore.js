import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import visibilityCart from "./visibilityCart";

const store = configureStore({
    reducer: { cart: cartReducer, visibility: visibilityCart }
})

export default store;
//slices
import cartReducer from "../features/cart/cartSlice";
import modalReducer from "../features/modal/modalSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
    }
})
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import toastSlice from "./ui/toastSlice";

const store = configureStore({
    reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    toast: toastSlice.reducer,
},
});

export default store;

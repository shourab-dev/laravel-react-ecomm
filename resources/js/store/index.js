import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./slices/CategorySlice";
import UserSlice from "./slices/UserSlice";
import CartSlice from "./slices/CartSlice";

export const store = configureStore({
    reducer: {
        categories: CategorySlice,
        authCustomer: UserSlice,
        cart: CartSlice,
    },
});

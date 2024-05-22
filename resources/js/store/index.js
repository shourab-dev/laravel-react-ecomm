import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./slices/CategorySlice";

export const store = configureStore({
    reducer: {
        categories: CategorySlice,
    },
});

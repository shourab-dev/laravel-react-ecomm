import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const CartSlice = createSlice({
    name: "carts",
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            
            state = action.payload;

            return state;
        },
        
        getCart: (state, action) => {},
    },
});

export const { setCart, getCart } = CartSlice.actions;
export default CartSlice.reducer;

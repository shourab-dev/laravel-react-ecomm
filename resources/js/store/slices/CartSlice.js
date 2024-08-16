import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: null,
        total: 0,
    },
    reducers: {
        setCart: (state, actions) => {
            state.total = actions.payload;
        },
        incrementCartCount: (state, { payload }) => {
            state.total += payload;
        },
        setCarts: (state, { payload }) => {
            state.items = payload;
        },
    },
});

export const { setCart, incrementCartCount, setCarts } = CartSlice.actions;
export default CartSlice.reducer;

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
        updateCart: (state, { payload }) => {
            if (!state.items) {
                state.items = [payload];
            } else {
                state.items.push(payload);
            }
        },
    },
});

export const { setCart, incrementCartCount, setCarts, updateCart } =
    CartSlice.actions;
export default CartSlice.reducer;

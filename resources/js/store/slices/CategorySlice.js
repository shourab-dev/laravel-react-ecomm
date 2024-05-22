import { createSlice } from "@reduxjs/toolkit";

export const CategorySlice = createSlice({
    name: "category",
    initialState: null,
    reducers: {
        storeCategories: (state, action) => {
            state = action.payload
            return state;

        },
    },
});

// Action creators are generated for each case reducer function
export const { storeCategories } = CategorySlice.actions;

export default CategorySlice.reducer;

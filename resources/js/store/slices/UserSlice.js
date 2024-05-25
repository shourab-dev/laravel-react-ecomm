import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        setUsers: (state, action) => {
            state = action.payload;
            return state;
        },
        removeUser: (state, action) => {
            state = null;
            return state;
        },
    },
});

export const { setUsers, removeUser } = UserSlice.actions;
export default UserSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const reduxSlice = createSlice({
    name: "redux",
    initialState: {
        inputTitle: "",
        data: []
    },
    reducers: { getGender: (state, actions) => { state.gender = actions.payload; },
    },
});

export const {getGender,} = reduxSlice.actions;

export default reduxSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
    name:'global',
  initialState: {
    isLoading: false,
    error: null,
  },
    extraReducers: (builder) => {
        builder.addMatcher(
            (action) => action.type.endsWith("pending"),
            (state) => {
                state.isLoading = true;
                state.error = null;
            }
        ).addMatcher(
            (action) => action.type.endsWith("fulfilled"),
            (state) => {
                state.isLoading = false;
                state.error = null;
            }).addMatcher(
                (action) => action.type.endsWith("rejected"),
                (state, {payload}) => {
                    state.isLoading = false;
                    state.error = payload;
                })
    }
});
export const selectLoading = (state) => state.global.isLoading;
export const selectError = (state) => state.global.error;

export const globalReducer = globalSlice.reducer;
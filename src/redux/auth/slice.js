import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {       
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })  .addCase(refreshUser.pending, (state) => {    
        state.isRefreshing = true;
      })  
      .addCase(refreshUser.fulfilled, (state, action) => {    
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
      })  .addCase(refreshUser.rejected, (state) => {    
        state.isRefreshing = false;
      })  
      .addCase(logout.fulfilled, () => {
        return INITIAL_STATE;
      })
  },
});



export const authReducer = authSlice.reducer;

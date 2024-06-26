import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const response = await instance.post("/users/signup", formData);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      let message = e.message;
      if (e.response.status === 400) {
        message = "Email or password is not valid";
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const response = await instance.post("/users/login", formData);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      let message = e.message;
      if (e.response.status === 400) {
        message = "Email or password is not valid";
      } 
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      setToken(token);
      const response = await instance.get("/users/current");

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(null);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await instance.post("/users/logout");
    clearToken();
    return;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

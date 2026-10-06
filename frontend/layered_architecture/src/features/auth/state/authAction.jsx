import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      let res = await api.post("/auth/login", credentials);
      console.log("response from login api", res);
      localStorage.setItem("accessToken", res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue("login failed");
    }
  },
);
export const hydrateUserAction = createAsyncThunk(
  "auth/hydrate",
  async (thunkApi) => {
    let token = localStorage.getItem("accessToken");
    if (!token) return null;
    try {
      let res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response from hydration api", res);
      return res.data;
    } catch (error) {
      console.log("error in login api", error);
      localStorage.removeItem("accessToken");
      return thunkApi.rejectWithValue("unauthorized user");
    }
  },
);

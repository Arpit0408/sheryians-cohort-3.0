import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

export const AuthStore = configureStore({
  reducer: { auth: authReducer },
});

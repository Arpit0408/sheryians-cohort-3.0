import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginUserApi } from "../api/authApi";
import { loginUserAction } from "../state/authAction";

export const useAuth = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loginForm = (data) => {
    dispatch(loginUserAction(data));
  };
  const [showPassword, setShowPassword] = useState(false);
  return {
    navigate,
    register,
    handleSubmit,
    errors,
    loginForm,
    showPassword,
    setShowPassword,
  };
};

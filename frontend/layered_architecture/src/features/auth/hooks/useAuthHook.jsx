import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginUserApi } from "../api/authApi";
import { addUser } from "../state/authSlice";

export const useAuth = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loginForm = async (data) => {
    console.warn("LOGIN SUCCESS DATA:", data);
    let res = await loginUserApi(data);
    if (res) {
      dispatch(addUser(res));
      navigate("/main");
    }
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

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";

export const useAuth = () => {
  const [usersData, setUsersData] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    let arr = [...usersData, data];
    setUsersData(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    toast.success("user registered..");
    reset();
  };

  const LoginForm = (data) => {
    let user = usersData.find(
      (usr) => usr.email === data.email && usr.password === data.password,
    );

    if (!user) {
      toast.error("invalid something..");
      return;
    }

    dispatch(addUser(data));
    localStorage.setItem("loggedUser", JSON.stringify(data));
    toast.success("login success");
    reset();
    navigate("/main");
  };

  return {
    register,
    handleSubmit,
    reset,
    getValues,
    errors,
    registerForm,
    navigate,
    LoginForm,
  };
};

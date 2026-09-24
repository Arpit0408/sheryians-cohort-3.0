import { useNavigate } from "react-router-dom";
import { Auth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useContext } from "react";

const AuthHook = () => {
  const { registeredUsers, isLoggedIn, setIsLoggedIn } = useContext(Auth);
  const navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  let LoginformSubmit = (data) => {
    let users = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!users) {
      console.error("invalid creds or user not found");
      reset();
      return;
    }
    setIsLoggedIn(users);
    localStorage.setItem("loggedinUser", JSON.stringify(users));
    reset();
    navigate("/main");
  };

  const RegisterformSubmit = (data) => {
    const regData = [...registeredUsers, data];
    setRegisteredUsers(regData);
    localStorage.setItem("registeredUsers", JSON.stringify(regData));
    reset();
  };
  return {
    register,
    handleSubmit,
    reset,
    LoginformSubmit,
    RegisterformSubmit,
  };
};
export default AuthHook;

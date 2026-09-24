import React, { useContext } from "react";
import { Outlet, Navigate  } from "react-router-dom";
import { Auth } from "../context/AuthContext";

const ProtectedRoutes = () => {
  const { isLoggedIn } = useContext(Auth);
  if (!isLoggedIn) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;

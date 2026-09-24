import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Auth } from "../context/AuthContext";

const PublicRoutes = () => {
  const { isLoggedIn } = useContext(Auth);
  if (isLoggedIn) {
    return <Navigate to={"/main"} />;
  }
  return <Outlet />;
};

export default PublicRoutes;

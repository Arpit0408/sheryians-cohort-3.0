import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import App from "../App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import PublicProtected from "../protected/PublicProtected";
import MainProtected from "../protected/MainProtected";
import { toast } from "react-toastify";
const AppRoutes = () => {
  let dispatch = useDispatch();
  const hydrateUser = () => {
    console.log("hydration processed...");
    let loggedInUser = JSON.parse(localStorage.getItem("loggedUser"));

    if (!loggedInUser) {
      toast.error("UnAuthorized user");
      return;
    }

    dispatch(addUser(loggedInUser));
  };

  useEffect(() => {
    hydrateUser();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <App />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <RouterProvider router={router} />
    </>
  );
};
export default AppRoutes;

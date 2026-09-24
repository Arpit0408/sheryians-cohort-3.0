import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import Products from "../pages/Products";
import Home from "../pages/Home";
import Users from "../pages/Users";

let router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoutes />,
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
  {
    path: "/main",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <MainLayout />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "products",
            element: <Products />,
          },
        ],
      },
    ],
  },
]);
const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;

import React, { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import PublicProtected from "../protected/PublicProtected";
import MainProtected from "../protected/MainProtected";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";

// Lazy Loaded Pages
const Login = lazy(() => import("../pages/Login.jsx"));
const Register = lazy(() => import("../pages/Register.jsx"));
const Shop = lazy(() => import("../pages/Shop.jsx"));
const About = lazy(() => import("../pages/About.jsx"));
const App = lazy(() => import("../App.jsx"));

// Fallback Spinner
const PageLoader = () => (
  <div className="flex min-h-[60vh] w-full items-center justify-center">
    <div className="h-9 w-9 animate-spin rounded-full border-3 border-neutral-300 border-t-neutral-900 dark:border-neutral-700 dark:border-t-white" />
  </div>
);

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
              element: (
                <Suspense fallback={<PageLoader />}>
                  <Login />
                </Suspense>
              ),
            },
            {
              path: "register",
              element: (
                <Suspense fallback={<PageLoader />}>
                  <Register />
                </Suspense>
              ),
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
              element: (
                <Suspense fallback={<PageLoader />}>
                  <App />
                </Suspense>
              ),
            },
            {
              path: "shop",
              element: (
                <Suspense fallback={<PageLoader />}>
                  <Shop />
                </Suspense>
              ),
            },
            {
              path: "about",
              element: (
                <Suspense fallback={<PageLoader />}>
                  <About />
                </Suspense>
              ),
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

import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import AuthLayout from "../app/layout/AuthLayout";
import MainLayout from "../app/layout/MainLayout";
import { useDispatch } from "react-redux";
import { hydrateUserAction } from "../features/auth/state/authAction";
import MainProtected from "./protected/MainProtected";
import PublicProtected from "./protected/PublicProtected";

const AppRoutes = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(hydrateUserAction());
  }, [dispatch]);

  let router = createBrowserRouter([
    {
      element: <PublicProtected />,
      children: [
        {
          path: "/",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      element: <MainProtected />,
      children: [
        {
          path: "/main",
          element: <MainLayout />,
          children: [],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;

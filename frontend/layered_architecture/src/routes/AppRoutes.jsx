import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import AuthLayout from "../app/layout/AuthLayout";
import MainLayout from "../app/layout/MainLayout";
import { useDispatch } from "react-redux";
import { hydrateUser } from "../features/auth/api/authApi";
import { addUser } from "../features/auth/state/authSlice";
import MainProtected from "./protected/MainProtected";
import PublicProtected from "./protected/PublicProtected";

const AppRoutes = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        let user = await hydrateUser();
        if (user) {
          dispatch(addUser(user));
        }
      } catch (error) {
        console.log("error in hydration..", error);
      }
    })();
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


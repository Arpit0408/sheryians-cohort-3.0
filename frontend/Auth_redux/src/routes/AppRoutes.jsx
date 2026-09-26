import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import App from "../App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
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
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <App />,
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

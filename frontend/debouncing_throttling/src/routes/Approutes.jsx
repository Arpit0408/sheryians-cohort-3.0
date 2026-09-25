import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
const About = lazy(() => import("../pages/about.jsx"));
const Contact = lazy(() => import("../pages/contact.jsx"));
import MainLayout from "../layouts/MainLayout.jsx";

import { getUsers } from "../apis/usersApi";

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "about",
        loader: getUsers,
        hydrateFallbackElement: <h1>loading users data</h1>,
        element: (
          <Suspense fallback={<div>loading about </div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const Approutes = () => {
  return <RouterProvider router={router} />;
};

export default Approutes;

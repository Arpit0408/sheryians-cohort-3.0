import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { store } from "./app/store.jsx";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppRoutes />
      <ToastContainer />
    </Provider>
  </StrictMode>,
);

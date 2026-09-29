import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes/AppRoutes.jsx";
import { Provider } from "react-redux";
import { AuthStore } from "./app/AuthStore";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={AuthStore}>
      <AppRoutes />
    </Provider>
  </StrictMode>,
);

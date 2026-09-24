import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { EcomProvider } from "./context/EcomContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <EcomProvider>
        <App />
      </EcomProvider>
    </BrowserRouter>
  </StrictMode>,
);

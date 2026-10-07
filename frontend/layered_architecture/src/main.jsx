import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { store } from "./app/store.jsx";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppRoutes />
        <ToastContainer />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);

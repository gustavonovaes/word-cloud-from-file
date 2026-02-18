import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@pages/Dashboard";
import NotFound from "@pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <NotFound />
  },
]);

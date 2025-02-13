import { createBrowserRouter, Navigate } from "react-router";
import Login from "../pages/Login";

const PublicRoutes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);

export default PublicRoutes;

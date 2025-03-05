import { createBrowserRouter, Navigate } from "react-router";
import Login from "../pages/Login";
import TermOfUse from "../pages/TermOfUse";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const PublicRoutes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/term-of-use",
    element: <TermOfUse />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);

export default PublicRoutes;

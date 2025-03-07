import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import TermOfUse from "../pages/TermOfUse";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const PublicRoutes = createBrowserRouter([
  {
    index: true,
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

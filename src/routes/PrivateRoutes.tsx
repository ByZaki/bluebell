import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Technician from "../pages/Technician/Technician";
import Settings from "../pages/Settings";
import MainLayout from "../layouts/MainLayout";
import CreateTechnician from "../pages/Technician/CreateTechnician";
import EditTechnician from "../pages/Technician/EditTechnician";

const PrivateRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "technician", element: <Technician /> },
      { path: "technician/create", element: <CreateTechnician /> },
      { path: "technician/:id", element: <EditTechnician /> },
      { path: "settings", element: <Settings /> },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default PrivateRoutes;

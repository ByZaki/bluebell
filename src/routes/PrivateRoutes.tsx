import { createRoutesFromElements, Route } from "react-router";
import Dashboard from "../pages/Dashboard";
import Technician from "../pages/Technician";
import Settings from "../pages/Settings";
import MainLayout from "../layouts/MainLayout";

const adminRoutes = createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="technician" element={<Technician />} />
    <Route path="settings" element={<Settings />} />
    <Route path="*" element={<Dashboard />} />
  </Route>
);

const distributorRoutes = createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="settings" element={<Settings />} />
    <Route path="*" element={<Dashboard />} />
  </Route>
);

export default { adminRoutes, distributorRoutes };

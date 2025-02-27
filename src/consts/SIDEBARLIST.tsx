import {
  DashboardIcon,
  TechnicianIcon,
  AdminSettingsIcon,
} from "../assets/sidebarIcons";
import { SidebarListType } from "../types/SidebarListType";

export const SIDEBARLIST: SidebarListType[][] = [
  [
    {
      id: 0,
      link: "/",
      title: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      id: 1,
      link: "/technician",
      title: "Technician",
      icon: <TechnicianIcon />,
    },
  ],
  [
    {
      id: 3,
      link: "/settings",
      title: "Profile settings",
      icon: <AdminSettingsIcon />,
    },
  ],
];

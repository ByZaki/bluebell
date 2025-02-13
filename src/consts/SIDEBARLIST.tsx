import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SettingsIcon from "@mui/icons-material/Settings";
import PieChartIcon from "@mui/icons-material/PieChart";

export const SIDEBARLIST = [
  [
    {
      id: 0,
      link: "/",
      title: "Dashboard",
      icon: <PieChartIcon />,
      roles: ["admin", "distributor"],
    },
    {
      id: 1,
      link: "/technician",
      title: "Technician",
      icon: <ManageAccountsIcon />,
      roles: ["admin"],
    },
  ],
  [
    {
      id: 3,
      link: "/settings",
      title: "Profile settings",
      icon: <SettingsIcon />,
      roles: ["admin", "distributor"],
    },
  ],
];

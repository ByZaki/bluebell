import logo from "@assets/logo.svg";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PieChartIcon from "@mui/icons-material/PieChart";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router";

export default function SideBar() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: 250,
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          padding: 2,
          borderRight: "1px solid #ccc",
        }}
        role="presentation"
      >
        <ListItem disablePadding>
          <img
            src={logo}
            width="100%"
            style={{ padding: "10px 20px 20px", objectFit: "contain" }}
          />
        </ListItem>

        <Divider />

        <List>
          <ListItem disablePadding>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <ManageAccountsIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem disablePadding>
            <NavLink
              to="/technician"
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <PieChartIcon />
                </ListItemIcon>
                <ListItemText primary="Technician" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem disablePadding>
            <NavLink
              to="/settings"
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Admin setting" />
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PowerSettingsNewIcon />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
}

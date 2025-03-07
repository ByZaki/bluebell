import { Stack } from "@mui/material";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <Stack direction="row">
      <SideBar />
      <Stack width={"calc(100% - 250px)"} padding="32px">
        <Outlet />
      </Stack>
    </Stack>
  );
}

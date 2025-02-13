import PageHeader from "../components/PageHeader";
import CustomBreadcrumbs from "../components/CustomBreadcrumbs";
import { Stack } from "@mui/material";

export default function Settings() {
  return (
    <>
      <Stack>
        <CustomBreadcrumbs>Settings</CustomBreadcrumbs>

        <PageHeader title="Settings" />

        <Stack>Settings</Stack>
      </Stack>
    </>
  );
}

import PageHeader from "../components/PageHeader";
import CustomBreadcrumbs from "../components/CustomBreadcrumbs";
import { Stack } from "@mui/material";

export default function Technician() {
  return (
    <>
      <Stack>
        <CustomBreadcrumbs>Technician</CustomBreadcrumbs>
        <PageHeader title="Technician" />

        <Stack>Technician</Stack>
      </Stack>
    </>
  );
}

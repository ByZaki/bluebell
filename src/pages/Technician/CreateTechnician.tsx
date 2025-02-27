import CustomBreadcrumbs from "../../components/CustomBreadcrumbs";
import PageHeader from "../../components/PageHeader";
import { createTechnicianService } from "../../services/TechnicianService";
import { useSnackbarStore } from "../../store/useSnackbarStore";
import ComponentTechnician from "./ComponentTechnician";

export default function CreateTechnician() {
  const setToast = useSnackbarStore((store) => store.setSnackbar);

  const handleAdd = async (formData: any) => {
    try {
      await createTechnicianService(formData);
      setToast({
        show: true,
        title: "success",
        message: "New user added successfully ",
        severity: "success",
      });
    } catch (error) {
      console.error("Error creating technician:", error);
      setToast({
        show: true,
        title: "Error",
        message: "Failed to create new user. Please try again.",
        severity: "error",
      });
    }
  };

  return (
    <>
      <CustomBreadcrumbs>Create</CustomBreadcrumbs>
      <PageHeader title="Create" />
      <ComponentTechnician onSubmit={handleAdd} />

      {/* {success ? (
        <Alert variant="outlined" severity="success">
          New user has been successfully created.
        </Alert>
      ) : (
        <Alert variant="outlined" severity="error">
          Failed to create new user. Please try again.
        </Alert>
      )} */}
    </>
  );
}

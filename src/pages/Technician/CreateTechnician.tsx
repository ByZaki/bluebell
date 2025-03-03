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
        message: "New user has been added successfully ",
        severity: "success",
      });
    } catch (error) {
      console.error("Error creating technician:", error);
      setToast({
        show: true,
        title: "Error",
        message: "You have failed to create a new user. Please, try it again!",
        severity: "error",
      });
    }
  };

  return (
    <>
      <CustomBreadcrumbs>Create</CustomBreadcrumbs>
      <PageHeader title="Create" />
      <ComponentTechnician onSubmit={handleAdd} />
    </>
  );
}

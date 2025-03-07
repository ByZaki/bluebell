import { useParams } from "react-router-dom";
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs";
import PageHeader from "../../components/PageHeader";
import {
  editTechnicianService,
  getOneTechnicianService,
} from "../../services/TechnicianService";
import ComponentTechnician from "./ComponentTechnician";
import { useEffect, useState } from "react";
import { useSnackbarStore } from "../../store/useSnackbarStore";

export default function EditTechnician() {
  const { id } = useParams();
  const setToast = useSnackbarStore((store) => store.setSnackbar);

  const technicianId = Number(id) || 0;

  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await getOneTechnicianService(technicianId);
        setUser(response);
      } catch (error) {
        console.log(error);
      }
    };

    data();
  }, [id]);

  const handleEdit = async (formData: any) => {
    try {
      if (technicianId === undefined) return;
      await editTechnicianService(formData, technicianId);
      setToast({
        show: true,
        title: "success",
        message: "This user has been successfully modified!",
        severity: "success",
      });
    } catch (error) {
      setToast({
        show: true,
        title: "Error",
        message: "this user has not been modified. Please, try it again!",
        severity: "error",
      });
    }
  };

  return (
    <>
      <CustomBreadcrumbs>Edit</CustomBreadcrumbs>
      <PageHeader title="Edit" />
      <ComponentTechnician onSubmit={handleEdit} value={user} />
    </>
  );
}

import { useParams } from "react-router";
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs";
import PageHeader from "../../components/PageHeader";
import {
  editTechnicianService,
  getOneTechnicianService,
} from "../../services/TechnicianService";
import ComponentTechnician from "./ComponentTechnician";
import { useEffect, useState } from "react";

export default function EditTechnician() {
  const { id } = useParams();
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
      console.log("success");
    } catch (error) {
      console.log(error);
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

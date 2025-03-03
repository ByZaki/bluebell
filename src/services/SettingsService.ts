import $axios from "../http";
import { TechnicianInfo } from "../types/TechnicianInfoType";

export const getOneUserSettingService = async (id: number) => {
  try {
    const response = await $axios.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserSettingService = async (
  id: number,
  data: Partial<TechnicianInfo>
) => {
  try {
    const response = await $axios.patch<TechnicianInfo>(`/users/${id}/`, data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

import $axios from "../http";
import { TechnicianInfo } from "../types/TechnicianInfoType";

export const getTechnicianService = async (
  page: number,
  limit: number,
  value: string
) => {
  try {
    const response = await $axios.get(
      `/users?page=${page}&limit=${limit}${value ? `&full_name=${value}` : ""}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOneTechnicianService = async (id: number) => {
  try {
    const response = await $axios.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//

export const createTechnicianService = async (data: TechnicianInfo) => {
  try {
    const response = await $axios.post<TechnicianInfo>("/users/", data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const editTechnicianService = async (
  data: TechnicianInfo,
  id: number
) => {
  try {
    const response = await $axios.patch<TechnicianInfo>(`/users/${id}/`, data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const toggleBlockTechnician = async (id: number, isBlocked: boolean) => {
  try {
    const response = await $axios.patch(`users/${id}`, {
      is_blocked: !isBlocked,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

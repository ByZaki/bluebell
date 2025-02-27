import { Dispatch, SetStateAction } from "react";

const phoneRegex = /^\+998\s?\d{2}\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;

export const validatePhone = (
  phone: string,
  setErrorPhone: Dispatch<SetStateAction<boolean>>
) => {
  const result = phoneRegex.test(phone);
  setErrorPhone(!result);
  return result;
};

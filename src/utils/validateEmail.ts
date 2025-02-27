import { Dispatch, SetStateAction } from "react";

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,}$/;

export const validateEmail = (
  email: string,
  setErrorEmail: Dispatch<SetStateAction<boolean>>
) => {
  {
    const result = emailRegex.test(email);
    setErrorEmail(!result);
    return result;
  }
};

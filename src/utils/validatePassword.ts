import { Dispatch, SetStateAction } from "react";

// export const validatePassword = (value: string) => value.length > 7;

export const validatePassword = (
  value: string,
  setState: Dispatch<SetStateAction<boolean>>
) => {
  const result = value.length > 7;
  setState(!result);
  return result;
};

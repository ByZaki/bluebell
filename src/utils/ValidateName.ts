import { Dispatch, SetStateAction } from "react";

// export const validateName = (
//   value: string,
//   setState: Dispatch<SetStateAction<boolean>>
// ) => {
//   const result = value.length > 2;
//   setState(result);
//   return result;
// };

export const validateLength = (
  value: string,
  setState: Dispatch<SetStateAction<boolean>>,
  length = 2
) => {
  const result = value.length > length;
  setState(!result);
  return result;
};

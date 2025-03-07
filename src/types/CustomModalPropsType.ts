import { ReactElement } from "react";

export type CustomModalPropsType = {
  show: boolean;
  title: string;
  text?: string;
  handleClose: () => void;
  children: ReactElement;
};

import { AlertProps } from "@mui/material";
import { create } from "zustand";

type useSnackbarStoreType = {
  show: boolean;
  title: string;
  message: string;
  severity: AlertProps["severity"];
  setSnackbar: (snackbar: Partial<useSnackbarStoreType>) => void;
};

export const useSnackbarStore = create<useSnackbarStoreType>()((set) => ({
  show: false,
  title: "",
  message: "",
  severity: "success",
  setSnackbar(snackbar) {
    set(snackbar);
  },
}));

import { AlertProps } from "@mui/material";
import { create } from "zustand";

type useSnackbarStoreType = {
  show: boolean;
  title: string;
  message: string;
  severity: AlertProps["severity"];
  setSnackbar: (args: Omit<useSnackbarStoreType, "setSnackbar">) => void;
};

export const useSnackbarStore = create<useSnackbarStoreType>()((set) => ({
  show: false,
  title: "",
  message: "",
  severity: "success",
  setSnackbar(toast) {
    set(toast);
  },
}));

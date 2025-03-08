import { useSnackbarStore } from "../store/useSnackbarStore";
import { Alert, AlertTitle } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

export default function CustomSnackbar() {
  const toast = useSnackbarStore();

  const handleClose = () => {
    toast.setSnackbar({ ...toast, show: false });
  };

  return (
    <>
      <Snackbar
        open={toast.show}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={toast.severity}
          sx={{ width: "100%" }}
        >
          <AlertTitle>{toast.title}</AlertTitle>
          {toast.message}
        </Alert>
      </Snackbar>
    </>
  );
}

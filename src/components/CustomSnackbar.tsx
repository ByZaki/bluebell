import { useSnackbarStore } from "../store/useSnackbarStore";
import { Alert, AlertTitle } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

export default function CustomSnackbar() {
  const snackbar = useSnackbarStore();

  const handleClose = () => {
    snackbar.setSnackbar({ ...snackbar, show: false });
  };

  return (
    <>
      <Snackbar
        open={snackbar.show}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          <AlertTitle>{snackbar.title}</AlertTitle>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

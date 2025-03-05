import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router";
import useStore from "../store/store";
import CustomModal from "./CustomModal";

type LogoutModalType = {
  show: boolean;
  setShow: (bool: boolean) => void;
};

export default function LogoutModal({ show, setShow }: LogoutModalType) {
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <CustomModal
        show={show}
        title="Log Out"
        text="Are you sure you want to logout?"
        handleClose={handleClose}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              width: "50%",
              color: "#000",
              borderColor: "#E0E4E7",
              "&:hover": {
                bgcolor: "#E0E4E74D",
              },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            size="large"
            sx={{
              width: "50%",
            }}
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("authStore");
              useStore.getState().setIsAuth(false);
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </Stack>
      </CustomModal>
    </>
  );
}

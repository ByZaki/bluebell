import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import useStore from "../store/store";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,

//   p: 4,
// };

export default function LogoutModal({ logoutModal, setLogoutModal }) {
  const navigate = useNavigate();

  return (
    <>
      <Modal
        open={!!logoutModal}
        onClose={() => setLogoutModal(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          position="absolute"
          top="50%"
          left="50%"
          bgcolor="background.paper"
          borderRadius="12px"
          padding="25px 20px"
          textAlign="center"
          sx={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            marginBottom="25px"
            color="#1F2128"
            sx={{ fontSize: "20px", fontWeight: 700 }}
          >
            Log Out
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="body1"
            component="p"
            color="#72767C"
            marginBottom="30px"
          >
            Are you sure you want to logout?
          </Typography>
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
              onClick={() => setLogoutModal(null)}
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
                localStorage.removeItem("navigationStore");
                localStorage.removeItem("authStore");
                useStore.getState().setIsAuth(false);
                navigate("/login");
              }}
            >
              Logout
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

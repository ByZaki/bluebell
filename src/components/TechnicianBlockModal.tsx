import { Button, Stack } from "@mui/material";
import CustomModal from "./CustomModal";

export default function TechnicianBlockModal({
  show,
  setShow,
  selectedUser,
  handleBlockToggle,
}: any) {
  const handleClose = () => {
    setShow(false);
  };

  if (!selectedUser) return null;

  return (
    <>
      <CustomModal
        show={show}
        title={selectedUser.is_blocked ? "Unblock User" : "Block User"}
        text={`Are you sure you want to ${
          selectedUser.is_blocked ? "unblock" : "block"
        } ${selectedUser.full_name}?`}
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
            color={selectedUser.is_blocked ? "success" : "error"}
            size="large"
            sx={{
              width: "50%",
            }}
            onClick={handleBlockToggle}
          >
            {selectedUser.is_blocked ? "Unblock" : "Block"}
          </Button>
        </Stack>
      </CustomModal>
    </>
  );
}

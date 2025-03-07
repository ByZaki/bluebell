import { Box, Fade, Modal, Typography } from "@mui/material";
import { FC } from "react";
import { CustomModalPropsType } from "../types/CustomModalPropsType";

const CustomModal: FC<CustomModalPropsType> = ({
  show = false,
  title,
  text,
  handleClose,
  children,
}) => {
  return (
    <Modal
      open={show}
      onClose={handleClose}
      closeAfterTransition
      slotProps={{
        backdrop: {
          timeout: 300,
        },
      }}
    >
      <Fade in={show}>
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
            {title}
          </Typography>

          {text && (
            <Typography
              id="modal-modal-title"
              variant="body1"
              component="p"
              color="#72767C"
              marginBottom="30px"
            >
              {text}
            </Typography>
          )}
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;

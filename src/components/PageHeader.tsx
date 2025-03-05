import {
  Button,
  Divider,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import useStore from "../store/store";
import LogoutModal from "./LogoutModal";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
interface ITitle {
  title: string;
}

export default function PageHeader({ title }: ITitle) {
  const [select, setSelect] = useState<null | HTMLElement>(null);
  const [logoutModal, setLogoutModal] = useState<boolean>(false);
  const user = useStore((state) => state.user);

  const adminName = user ? user.full_name : "Unknown User";

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelect(event.currentTarget);
  };

  const handleClose = () => {
    setSelect(null);
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          sx={{ fontSize: "24px", fontWeight: 700, color: "#1F2128" }}
        >
          {title}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={handleMenuOpen}
            variant="text"
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              color: "black",
              textTransform: "none",
              fontWeight: 500,
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              "&:hover": {
                bgcolor: "transparent",
              },
            }}
          >
            {adminName}
          </Button>

          <Menu
            anchorEl={select}
            open={Boolean(select)}
            onClose={handleClose}
            PaperProps={{
              elevation: 3,
              style: { minWidth: 180, padding: "8px 0" },
            }}
          >
            <Typography sx={{ padding: "8px 16px", fontWeight: 600 }}>
              {adminName}
            </Typography>
            <Divider />

            <MenuItem
              onClick={() => {
                setLogoutModal(true);
                handleClose();
              }}
              sx={{ color: "red" }}
            >
              <LogoutIcon sx={{ marginRight: 1 }} />
              Logout
            </MenuItem>
          </Menu>
        </Stack>
      </Stack>

      <LogoutModal show={logoutModal} setShow={setLogoutModal} />
    </>
  );
}

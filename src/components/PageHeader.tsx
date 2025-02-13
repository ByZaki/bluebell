import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import { useState } from "react";

interface ITitle {
  title: string;
}

export default function PageHeader({ title }: ITitle) {
  const [notifications, setNotifications] = useState(true);

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">{title}</Typography>
        <Stack direction="row" spacing={2}>
          <IconButton onClick={() => setNotifications((prev) => !prev)}>
            {notifications ? (
              <NotificationsIcon sx={{ color: "#0760A0" }} />
            ) : (
              <NotificationsOffIcon />
            )}
          </IconButton>

          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">Admin</InputLabel>
            <Select
              sx={{ border: "none" }}
              labelId="demo-simple-select-label"
              // value={Admin}
              label="Admin"
            >
              <MenuItem value="">Ten</MenuItem>
              <MenuItem value="">Twenty</MenuItem>
              <MenuItem value="">Thirty</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
    </>
  );
}

import {
  Breadcrumbs,
  FormControl,
  IconButton,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Dashboard() {
  return (
    <Stack>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#">
          Home
        </Link>
        <Typography sx={{ color: "text.primary" }}>Dashboard</Typography>
      </Breadcrumbs>

      <Stack>
        <Typography>Dashboard</Typography>
        <Stack>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Admin</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
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
    </Stack>
  );
}

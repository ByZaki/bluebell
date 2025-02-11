import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import SideBar from "./SideBar";

export default function DashboardSelect() {
  return (
    <Stack>
      <SideBar />
      <FormControl>
        <InputLabel>
          <CalendarMonthIcon />
          Daily
        </InputLabel>
        <Select label="Daily">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>
          <CalendarMonthIcon />
          Online games
        </InputLabel>
        <Select label="Daily">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>
          <CalendarMonthIcon />
          Kiosk
        </InputLabel>
        <Select label="Daily">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>
          <CalendarMonthIcon />
          Distributor
        </InputLabel>
        <Select label="Daily">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

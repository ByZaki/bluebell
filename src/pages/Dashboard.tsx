import { useState } from "react";
import PageHeader from "../components/PageHeader";
import CustomBreadcrumbs from "../components/CustomBreadcrumbs";
import {
  Button,
  Menu,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { data } from "../consts/DASHBOARDSELECT";
import { DashboardStatistic } from "../consts/DASHBOARDSTATISTIC";
import { DashboardTable } from "../consts/DASHBOARDTABLE";

export default function Dashboard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const firstRow = DashboardStatistic.slice(0, 4);
  const secondRow = DashboardStatistic.slice(4, 8);

  return (
    <Stack>
      <CustomBreadcrumbs>Dashboard</CustomBreadcrumbs>
      <PageHeader title="Dashboard" />
      <Stack direction="row" spacing={2} marginTop="22px">
        {data.map((item, index) => (
          <div key={index}>
            <Button
              id={`basic-button-${index}`}
              aria-controls={open ? `basic-menu-${index}` : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="outlined"
              startIcon={item.icon}
              endIcon={<ArrowDropDownIcon />}
              sx={{ color: "#475467", borderColor: "#E0E4E7" }}
            >
              {item.title}
            </Button>
            <Menu
              id={`basic-menu-${index}`}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": `basic-button-${index}`,
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Menu>
          </div>
        ))}
      </Stack>
      <Stack spacing={2} marginTop="20px">
        {[firstRow, secondRow].map((row, rowIndex) => (
          <Stack
            key={rowIndex}
            direction="row"
            spacing={2}
            justifyContent="space-between"
          >
            {row.map((item, index) => (
              <Stack
                key={index}
                sx={{
                  width: 300,
                  height: 104,
                  border: "1px solid #E0E4E7",
                  borderRadius: "8px",
                  padding: 2,
                  alignItems: "left",
                  justifyContent: "center",
                }}
              >
                <Typography fontSize="18px" color="#32475C99">
                  {item.title}
                </Typography>
                <Typography fontSize="24px" color="#32475CDE" fontWeight={700}>
                  {item.number}
                </Typography>
              </Stack>
            ))}
          </Stack>
        ))}
      </Stack>
      <Stack marginTop="24px">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontSize: "13px", fontWeight: 500, color: "#5F6165" }}
              >
                №
              </TableCell>
              <TableCell
                sx={{ fontSize: "13px", fontWeight: 500, color: "#5F6165" }}
              >
                Full name
              </TableCell>
              <TableCell
                sx={{ fontSize: "13px", fontWeight: 500, color: "#5F6165" }}
              >
                Kiosk
              </TableCell>
              <TableCell
                sx={{ fontSize: "13px", fontWeight: 500, color: "#5F6165" }}
              >
                Date of sign up
              </TableCell>
              <TableCell
                sx={{ fontSize: "13px", fontWeight: 500, color: "#5F6165" }}
              >
                Distributor
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {DashboardTable.map((user, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{ fontSize: "14px", fontWeight: 400, color: "#475467" }}
                >
                  {user.id}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "14px", fontWeight: 500, color: "#101828" }}
                >
                  {user.full_name}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "14px", fontWeight: 400, color: "#475467" }}
                >
                  {user.kiosk}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "14px", fontWeight: 400, color: "#475467" }}
                >
                  {user.date_of_sign_up}
                </TableCell>
                <TableCell
                  sx={{ fontSize: "14px", fontWeight: 500, color: "#101828" }}
                >
                  {user.distributor}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Stack>
    </Stack>
  );
}

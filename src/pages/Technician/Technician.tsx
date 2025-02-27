import PageHeader from "../../components/PageHeader";
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { getTechnicianService } from "../../services/TechnicianService";
import { UsersType } from "../../types/UsersType";
import { useNavigate } from "react-router";
import debounce from "debounce";

export default function Technician() {
  const [users, setUsers] = useState<UsersType[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limitPage, setLimitPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const technicianGetData = async () => {
    try {
      const data = await getTechnicianService(page, limitPage, searchValue);
      setUsers(data.items);
      setTotalPages(data.meta.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeSearch = (event: any) => {
    debouncedSearch(event.target.value);
    setPage(1);
  };

  const debouncedSearch = debounce((value) => {
    setSearchValue(value);
  }, 600);

  const handleChange = (event: any) => {
    setLimitPage(event.target.value);
    setPage(1);
  };

  useEffect(() => {
    technicianGetData();
  }, [page, limitPage, searchValue]);

  return (
    <>
      <Stack>
        <CustomBreadcrumbs>Technician</CustomBreadcrumbs>
        <PageHeader title="Technician" />

        <Stack
          direction="row"
          justifyContent="space-between"
          marginTop={"20px"}
        >
          <TextField
            label="Search by full name"
            type="search"
            sx={{ width: "260px" }}
            size="small"
            onChange={handleChangeSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" color="primary" />
                </InputAdornment>
              ),
            }}
          />

          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => navigate("/technician/create")}
          >
            Create
          </Button>
        </Stack>
      </Stack>

      <TableContainer>
        <Table sx={{ minWidth: 750, marginTop: "20px" }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Full name</TableCell>
              <TableCell>Phone number</TableCell>
              <TableCell>Shop ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date Created</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users && users.length > 0 ? (
              users.map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>
                    {user.full_name}
                  </TableCell>
                  <TableCell sx={{ color: "#475467" }}>
                    {user.phone_number}
                  </TableCell>
                  <TableCell sx={{ color: "#475467" }}>
                    {user.shop_id}
                  </TableCell>
                  <TableCell sx={{ color: "#475467" }}>{user.email}</TableCell>
                  <TableCell sx={{ color: "#475467" }}>
                    {user.date_created}
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" justifyContent="center" gap="10px">
                      <Button
                        onClick={() => navigate(`/technician/${user.id}`)}
                        variant="outlined"
                        type="button"
                        sx={{
                          textTransform: "none",
                          minWidth: "85px",
                          fontSize: "14px",
                        }}
                        size="small"
                        color="primary"
                      >
                        View
                      </Button>
                      {user.status === "Blocked" ? (
                        <Button
                          variant="outlined"
                          // onClick={user.status === "Unblocked"}
                          sx={{
                            textTransform: "none",
                            minWidth: "85px",
                            color: "#0797A0",

                            borderColor: "#0797A0",
                            "&:hover": {
                              backgroundColor: "#0797A04D",
                            },
                          }}
                        >
                          Unblock
                        </Button>
                      ) : (
                        <Button
                          variant="outlined"
                          color="error"
                          sx={{
                            textTransform: "none",
                            minWidth: "85px",
                            color: "#DB3E3F",
                            borderColor: "#DB3E3F",
                            "&:hover": {
                              bgcolor: "#DB3E3F4D",
                            },
                          }}
                        >
                          Block
                        </Button>
                      )}
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        marginTop={"30px"}
        alignItems={"center"}
      >
        <Pagination
          page={page}
          onChange={(_, page: number) => setPage(page)}
          count={totalPages}
          variant="outlined"
          shape="rounded"
          color="primary"
          hideNextButton
          hidePrevButton
        />
        <FormControl sx={{ width: "200px" }} size="small">
          <InputLabel>Items per page:</InputLabel>
          <Select
            value={limitPage}
            label="Items per page:"
            onChange={handleChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </>
  );
}

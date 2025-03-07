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
import {
  getTechnicianService,
  toggleBlockTechnician,
} from "../../services/TechnicianService";
import { UsersType } from "../../types/UsersType";
import { useNavigate } from "react-router-dom";
import debounce from "debounce";
import TechnicianBlockModal from "../../components/TechnicianBlockModal";

export default function Technician() {
  const [users, setUsers] = useState<UsersType[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limitPage, setLimitPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [blockModal, setBlockModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<UsersType | null>(null);

  const navigate = useNavigate();

  const handleBlockToggle = async () => {
    if (!selectedUser) return;

    try {
      await toggleBlockTechnician(selectedUser.id, selectedUser.is_blocked);
      setUsers((prev) =>
        prev.map((user) =>
          user.id === selectedUser.id
            ? { ...user, is_blocked: !user.is_blocked }
            : user
        )
      );
    } catch (error) {
      console.error(error);
    } finally {
      setBlockModal(false);
    }
  };

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
                      <Button
                        variant="outlined"
                        onClick={() => {
                          setSelectedUser(user);
                          setBlockModal(true);
                        }}
                        sx={{
                          textTransform: "none",
                          minWidth: "85px",
                          color: user.is_blocked ? "#0797A0" : "#DB3E3F",
                          borderColor: user.is_blocked ? "#0797A0" : "#DB3E3F",
                          "&:hover": {
                            bgcolor: user.is_blocked
                              ? "#0797A04D"
                              : "#DB3E3F4D",
                          },
                        }}
                      >
                        {user.is_blocked ? "Unblock" : "Block"}
                      </Button>
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

      <TechnicianBlockModal
        show={blockModal}
        setShow={setBlockModal}
        selectedUser={selectedUser}
        handleBlockToggle={handleBlockToggle}
      />

      {/* <CustomModal
        show={logoutModal}
        title={selectedUser.is_blocked ? "Unblock User" : "Block User"}
        text={`Are you sure you want to ${
          selectedUser.is_blocked ? "unblock" : "block"
        } ${selectedUser.full_name}?`}
        handleClose={handleClose}
        // setLogoutModal={setLogoutModal}
        // logoutModal={logoutModal}
        // title={selectedUser.is_blocked ? "Unblock User" : "Block User"}
        // text={`Are you sure you want to ${
        //   selectedUser.is_blocked ? "unblock" : "block"
        // } ${selectedUser.full_name}?`}
        // children={selectedUser.is_blocked ? "Unblock" : "Block"}
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
              selectedUser.is_blocked ? "Unblock" : "Block";
            }}
          >
            Logout
          </Button>
        </Stack>
      </CustomModal> */}
    </>
  );
}

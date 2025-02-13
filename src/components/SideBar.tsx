import logo from "@assets/logo.svg";
import Box from "@mui/material/Box";

export default function SideBar() {
  return (
    <>
      <Box width={220} height="100vh" borderRight={`1px solid #ccc`}>
        <img
          src={logo}
          width="100%"
          height="160px"
          style={{ padding: "10px 20px 0", objectFit: "contain" }}
        />
        <Box padding="10px 0" borderBottom={`1px solid #ccc`}>
          {/* <SidebarTabs
            tabs={menu[0]}
            navigation={navigation}
            handleChange={handleChange}
          /> */}
          asdasd
        </Box>
        <Box padding="10px 0">
          {/* <SidebarTabs
            tabs={menu[1]}
            count={menu[0].length}
            navigation={navigation}
            handleChange={handleChange}
          /> */}
          asdasd
        </Box>
      </Box>
      {/* <Box
        sx={{
          height: "100vh",
          width: 220,
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          padding: 2,
          borderRight: "1px solid #ccc",
        }}
        role="presentation"
      > */}
      {/* <Box padding="10px 0" borderBottom={`1px solid #ccc`}>  
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={false}
            TabIndicatorProps={{ style: { backgroundColor: "transparent" } }}
            sx={{ gap: "0", minWidth: "100%" }}
          >
            <Tab
              sx={{
                padding: "10px 20px",
                textTransform: "none",
                alignItems: "start",
              }}

              // label={}
            />
            <Stack direction="row" alignItems="center" spacing={1}>
              <Stack width={16} height={16} alignItems="center"></Stack>
              <Typography
                variant="body2"
                component="span"
                fontWeight={500}
                // color={
                //   navigation?.link === item?.link
                //     ? COLORS.MAIN_PRIMARY
                //     : COLORS.DARK_2
                // }
              >
                Dashboard
              </Typography>
            </Stack>
          </Tabs>
        </Box> */}

      {/* <ListItem disablePadding>
          <img
            src={logo}
            width="70%"
            style={{ padding: "10px 20px 20px", objectFit: "contain" }}
          />
        </ListItem> */}

      {/* <List>
          <ListItem disablePadding>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
                fontSize: "14px",
              }}
            >
              <ListItemButton>
                <PieChartIcon sx={{ color: "#5F6165" }} />
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem disablePadding>
            <NavLink
              to="/technician"
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <ListItemButton>
                <ManageAccountsIcon sx={{ color: "#5F6165" }} />
                <ListItemText primary="Technician" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <NavLink
              to="/settings"
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Admin setting" />
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <PowerSettingsNewIcon />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItemButton>
          </ListItem>
        </List> */}
      {/* </Box> */}
    </>
  );
}

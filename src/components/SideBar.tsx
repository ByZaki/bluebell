import SideLogo from "@assets/SideLogo.svg";
import { SIDEBARLIST } from "../consts/SIDEBARLIST";
import { useNavigate, useLocation } from "react-router";
import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useNavigationStore } from "../store/useNavigationStore";
import { SidebarListType } from "../types/SidebarListType";
import { cloneElement, FC, isValidElement, useEffect } from "react";

type HandleChangeType = (index: number) => void;

export default function SideBar() {
  const { navigation, setNavigation } = useNavigationStore();
  const sidebarAllList = [...SIDEBARLIST[0], ...SIDEBARLIST[1]];
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const activeItem = sidebarAllList.find(
      (item) => item.link?.slice(1) === location.pathname.split("/")[1]
    );
    setNavigation(activeItem || sidebarAllList[0]);
  }, [location, setNavigation]);

  const handleChange: HandleChangeType = (index) => {
    const checked = sidebarAllList[index];

    if (checked?.link) {
      navigate(checked.link);
    }
  };

  return (
    <Box width={220} height="100vh" borderRight={`1px solid #ccc`}>
      <Stack borderBottom={`1px solid #ccc`} padding="15px 20px">
        <img src={SideLogo} width="82px" height="30px" alt="Logo" />
      </Stack>
      <Box padding="10px 0" borderBottom={`1px solid #ccc`}>
        <SidebarTabs
          tabs={SIDEBARLIST[0]}
          navigation={navigation}
          handleChange={handleChange}
        />
      </Box>
      <Box padding="10px 0">
        <SidebarTabs
          tabs={SIDEBARLIST[1]}
          count={SIDEBARLIST[0].length}
          navigation={navigation}
          handleChange={handleChange}
        />
      </Box>
    </Box>
  );
}

type SidebarTabsProps = {
  tabs: SidebarListType[];
  navigation: SidebarListType;
  handleChange: HandleChangeType;
  count?: number;
};

const SidebarTabs: FC<SidebarTabsProps> = ({
  tabs,
  navigation,
  handleChange,
  count,
}) => {
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={Math.max(
        0,
        tabs.findIndex((tab) => tab.link === navigation.link)
      )}
      TabIndicatorProps={{ style: { backgroundColor: "transparent" } }}
      sx={{ gap: "0", minWidth: "100%" }}
    >
      {tabs.map((item, index) => (
        <Tab
          key={item.id}
          onClick={() => handleChange((count ?? 0) + index)}
          sx={{
            paddingY: "10px",
            textTransform: "none",
            alignItems: "start",
            justifyContent: "start",
          }}
          label={<SidebarTabsItem item={item} navigation={navigation} />}
        />
      ))}
    </Tabs>
  );
};

type SidebarTabsItemProps = {
  item: SidebarListType;
  navigation: SidebarListType;
};

const SidebarTabsItem: FC<SidebarTabsItemProps> = ({ item, navigation }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Stack width={16} height={16} alignItems="center">
        {isValidElement(item.icon) &&
          cloneElement(item.icon as React.ReactElement<{ fill: string }>, {
            fill: navigation.link === item?.link ? "#0760A0" : "#5F6165",
          })}
      </Stack>
      <Typography
        variant="body2"
        component="span"
        fontWeight={500}
        color={navigation?.link === item?.link ? "#0760A0" : "#5F6165"}
      >
        {item.title}
      </Typography>
    </Stack>
  );
};

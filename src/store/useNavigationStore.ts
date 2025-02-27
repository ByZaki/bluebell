import { persist } from "zustand/middleware";
import { SidebarListType } from "../types/SidebarListType";
import { SIDEBARLIST } from "../consts/SIDEBARLIST";
import { create } from "zustand";

type useNavigationStoreType = {
  navigation: SidebarListType;
  setNavigation: (navigation?: SidebarListType) => void;
};

export const useNavigationStore = create<useNavigationStoreType>()(
  persist(
    (set) => ({
      navigation: SIDEBARLIST[0][0],
      setNavigation(navigation) {
        navigation
          ? set({
              navigation,
            })
          : set({
              navigation: SIDEBARLIST[0][0],
            });
      },
    }),
    { name: "navigationStore" }
  )
);

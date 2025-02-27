import { create } from "zustand";
import { UsersMeResponseType } from "../types/UserResponseType";

type useUserStoreType = {
  user: UsersMeResponseType | null;
  setUser: (user: useUserStoreType["user"]) => void;
};

export const useUserStore = create<useUserStoreType>()((set) => ({
  user: null,
  setUser(user) {
    set({
      user,
    });
  },
}));

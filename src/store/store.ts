import AuthService from "../services/AuthService";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Roles = "admin" | "distributor";

type useStoreType = {
  isAuth: boolean;
  role: Roles | null;
  setIsAuth: (isAuth: boolean, role: Roles | null) => void;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message: string }>;
};

const useStore = create<useStoreType>()(
  persist(
    (set) => ({
      isAuth: false,
      role: null,

      setIsAuth: (isAuth: boolean, role: Roles | null) => {
        set({ isAuth, role });
      },

      async login(email: string, password: string) {
        try {
          const response = await AuthService.login(email, password);

          const role = response.data.role as Roles;

          localStorage.setItem("token", response.data.token);
          set({ isAuth: true, role });

          return { success: true, message: "OK" };
        } catch (error: any) {
          return { success: false, message: "Email or password wrong" };
        }
      },
    }),
    { name: "authStore" }
  )
);

export default useStore;

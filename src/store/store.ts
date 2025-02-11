import AuthService from "../services/AuthService";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type useStoreType = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message: string }>;
};

const useStore = create<useStoreType>()(
  persist(
    (set) => ({
      isAuth: false,

      setIsAuth(bool: boolean) {
        set({ isAuth: bool });
      },

      async login(email: string, password: string) {
        try {
          const response = await AuthService.login(email, password);
          localStorage.setItem("token", response.data.token);
          set({ isAuth: true });
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

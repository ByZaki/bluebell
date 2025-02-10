import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";

export default class Store {
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.token);
      this.setAuth(true);
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  }
}

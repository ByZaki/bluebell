import { UsersType } from "../../types/UsersType";

export interface AuthResponse {
  token: string;
  data: UsersType;
}

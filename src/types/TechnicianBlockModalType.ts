import { UsersType } from "./UsersType";

export type TechnicianBlockModalType = {
  show: boolean;
  setShow: (bool: boolean) => void;
  selectedUser: UsersType | null;
  handleBlockToggle: () => Promise<void>;
};

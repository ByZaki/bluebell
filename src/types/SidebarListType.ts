import { ReactNode } from "react";

export type SidebarListType = {
  id: number;
  link?: string;
  title: string;
  fn?: (value: any) => void;
  icon: ReactNode;
};

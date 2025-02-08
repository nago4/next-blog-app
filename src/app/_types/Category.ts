import { ReactNode } from "react";

export type Category = {
  [x: string]: ReactNode;
  id: string;
  name: string;
};

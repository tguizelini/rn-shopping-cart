import { ReactNode } from "react";

export default interface IModuleRoute {
    title: string;
    route: string;
    component: () => JSX.Element;
  }
import type { ReactNode } from "react";

export type HomeSectionHeaderProps = {
  title: ReactNode;
  action?: {
    label: string;
    href: string;
  };
};
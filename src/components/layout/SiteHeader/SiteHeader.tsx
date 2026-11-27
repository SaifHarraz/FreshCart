
import { Suspense } from "react";

import Navbar from "../Navbar/Navbar";
import TopInfoBar from "../TopInfoBar/TopInfoBar";
import type { NavbarProps } from "../types";

export default function SiteHeader(props: NavbarProps) {
  return (
    <>
      <TopInfoBar
        user={props.user}
        onLogout={props.onLogout}
      />

      <Suspense
        fallback={
          <div className="h-16 bg-white shadow-sm lg:h-[72px]" />
        }
      >
        <Navbar {...props} />
      </Suspense>
    </>
  );
}

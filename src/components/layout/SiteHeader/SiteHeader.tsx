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

      <Navbar {...props} />
    </>
  );
}
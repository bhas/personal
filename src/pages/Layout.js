import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import "./Layout.css";

export default function Layout() {
  return (
    <>
        <SideMenu/>
        <main id="page-wrap">
          <Outlet />
        </main>
    </>
  );
}

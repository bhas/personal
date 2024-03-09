import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu";

export default function Layout() {
  return (
    <>
        <SideMenu/>
        <main id="page-wrap" className="flex flex-col items-stretch m-auto max-w-4xl">
          <Outlet />
        </main>
    </>
  );
}

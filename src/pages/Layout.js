import { Outlet } from "react-router-dom";
import TopMenu from "../components/TopMenu";
import SideMenu from "../components/SideMenu";
import { SideMenuContext } from "../contexts/SideMenuContext";
import { useContext } from "react";

export default function Layout() {
  const { sideMenuOpen } = useContext(SideMenuContext);
  return (
    <>
      {sideMenuOpen && <SideMenu />}
      <TopMenu />
      <main className={`flex flex-col items-stretch`}>
      {/* lg:m-auto lg:max-w-5xl */}
        <Outlet />
      </main>
    </>
  );
}

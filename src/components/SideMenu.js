import { Link } from "react-router-dom";
import { useContext } from "react";
import { SideMenuContext } from "../contexts/SideMenuContext";
import IconLink from "./ui/IconLink";
import IconButton from "./ui/IconButton";

export default function SideMenu() {
  const { setSideMenuOpen } = useContext(SideMenuContext);

  return (
    <div className="fixed z-50 inset-0 backdrop-blur-sm backdrop-brightness-75" onClick={() => setSideMenuOpen(false)}>

      <div className="relative flex flex-col w-60 lg:w-72 h-full bg-slate-700 p-8 pt-20" onClick={preventEvent}>
        <IconButton className="text-xl absolute top-3 right-3 text-slate-400 self-end"
          icon={"fa-solid fa-xmark"}
          onClick={() => setSideMenuOpen(false)}></IconButton>
        <div>
          <div className="flex flex-row text-3xl justify-between">
            <IconLink icon="fa-solid fa-envelope" href="mailto:g.bvinther@gmail.com" />
            <IconLink icon="fa-brands fa-linkedin" href="https://www.linkedin.com/in/bjorn-vinther/" />
            <IconLink icon="fa-brands fa-github" href="https://github.com/bhas" />
          </div>
        </div>
        <nav className="flex flex-col mt-5 text-2xl" >
          <Link className="text-white my-3 hover:text-orange-500" to="/">Overview</Link>
          <Link className="text-white my-3 hover:text-orange-500" to="/experience">Experience</Link>
          <Link className="text-white my-3 hover:text-orange-500" to="/projects">Projects</Link>
        </nav>
      </div>
    </div>
  );
}

function preventEvent(e) {
  e.stopPropagation();
}

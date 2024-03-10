import { Link } from "react-router-dom";
import IconLabel from "./IconLabel";
import { GenerateDocument } from "../pdf/PdfGenerator";
import { useContext } from "react";
import { SideMenuContext } from "../contexts/SideMenuContext";

export default function SideMenu() {
  const { setSideMenuOpen } = useContext(SideMenuContext);

  return (
    <div className="fixed z-50 inset-0 backdrop-blur-sm backdrop-brightness-75" onClick={() => setSideMenuOpen(false)}>

      <div className="w-60 lg:w-72 h-full bg-slate-700 p-8"
        onClick={preventEvent}>
        <button onClick={() => GenerateDocument()}>Generate</button>
        <div>
          <h1>Bjørn Vinther</h1>
          <div className="flex flex-row">
            <IconLabel iconClass="fa-solid fa-at" />
            <IconLabel iconClass="fa-brands fa-linkedin" />
            <IconLabel iconClass="fa-brands fa-github" />
          </div>
        </div>       
        <nav className="flex flex-col mt-10 text-2xl" >
          <Link className="text-white my-3 hover:text-orange-500" to="/">Home</Link>
          <Link className="text-white my-3 hover:text-orange-500" to="/about">About Me</Link>
          <Link className="text-white my-3 hover:text-orange-500" to="/experience">Experience</Link>
          <Link className="text-white my-3 hover:text-orange-500" to="/projects">Projects</Link>
        </nav>
      </div>
    </div>
  );
}

function preventEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}

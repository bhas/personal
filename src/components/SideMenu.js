import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import IconLabel from "./IconLabel";
import { GenerateDocument } from "../pdf/PdfGenerator";
import "./SideMenu.css";

export default function SideMenu() {
  return (
    <Menu>
      <button onClick={() => GenerateDocument()}>Generate</button>
      <div>
        <h1>Bjørn Vinther</h1>
        <div className="flex flex-row">
          <IconLabel iconClass="fa-solid fa-at" />
          <IconLabel iconClass="fa-brands fa-linkedin" />
          <IconLabel iconClass="fa-brands fa-github" />
        </div>
      </div>
      <div className="flex flex-col" >
        <Link className="text-white my-3 hover:text-orange-500" to="/">Home</Link>
        <Link className="text-white my-3 hover:text-orange-500" to="/about">About Me</Link>
        <Link className="text-white my-3 hover:text-orange-500" to="/experience">Experience</Link>
        <Link className="text-white my-3 hover:text-orange-500" to="/projects">Projects</Link>
      </div>
    </Menu>
  );
}

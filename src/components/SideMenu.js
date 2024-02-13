import { Link } from "react-router-dom";
import "./SideMenu.css";
import { slide as Menu } from "react-burger-menu";
import IconLabel from "./IconLabel";

export default function SideMenu() {
  return (
    <Menu>
      
      <div>
        <h1>Bjørn Vinther</h1>
        <div className="icon-container">
          <IconLabel iconClass="fa-solid fa-at" />
          <IconLabel iconClass="fa-brands fa-linkedin" />
          <IconLabel iconClass="fa-brands fa-github" />
        </div>
      </div>
      <div className="navigation-container">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </Menu>
  );
}

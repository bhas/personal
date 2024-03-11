import { useContext } from "react";
import { SideMenuContext } from "../contexts/SideMenuContext";
import IconButton from "./ui/IconButton";



export default function TopMenu() {
    const { setSideMenuOpen } = useContext(SideMenuContext);
    return (
        <div className="sticky top-0 flex flex-row bg-red-500 lg:bg-blue-400 justify-center z-20 drop-shadow-lg">
            <div className="flex-1 flex flex-row items-center px-4 p-2 sm:px-6 text-lg sm:text-xl lg:w-[1024px] lg:flex-initial">
                <IconButton className="text-2xl mr-4 text-blue-100" icon={"fa fa-bars"} onClick={() => setSideMenuOpen(true)}></IconButton>
                <span>Bjørn Vinther</span>
                <div className="flex-1"></div>
                <IconButton className="text-blue-100" icon={"fa fa-file-pdf"}>Get Resume</IconButton>
            </div>
        </div>
    );
}
import { useContext } from "react";
import { SideMenuContext } from "../contexts/SideMenuContext";



export default function TopMenu() {
    const { setSideMenuOpen } = useContext(SideMenuContext);
    return (
        <div className="sticky top-0 flex flex-row bg-red-500 lg:bg-blue-400 justify-center z-20 drop-shadow-lg">
            <div className="flex-1 flex flex-row items-center p-4 gap-4 text-base sm:text-xl lg:w-[1024px] lg:flex-initial"> 
                <button onClick={() => setSideMenuOpen(true)}><i className="fa fa-bars"></i></button>
                <span>Bjørn Vinther</span>
                <div className="flex-1"></div>
                <button><i className="fa fa-file-pdf mr-2"></i>Get Resume</button>
            </div>
        </div>
    );
}
import { useState } from "react";
import Stars from "./Stars";



export default function Skill({ name, level, children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="group flex flex-col items-stretch py-2 hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex flex-row items-center justify-between">
                <span className="group-hover:text-orange-300">{name}</span>
                <Stars level={level} />
            </div>
            {isOpen && <div className="mb-2 text-slate-500">
                {children}
            </div>}
        </div>
    )
}
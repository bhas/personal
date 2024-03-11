import IconLabel from "./IconLabel";

export default function Card({ title, children, icon }) {
    return (
        <div className="flex flex-col bg-slate-900 p-4 rounded drop-shadow-lg">
            <IconLabel icon={icon} className="text-blue-300 mb-2 text-2xl">
                <h2 className="font-bold mb-0.5 text-xl">{title}</h2>
            </IconLabel>
            <div className="text-gray-100">{children}</div>
        </div>
    );
}
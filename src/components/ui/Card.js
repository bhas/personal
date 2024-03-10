


export default function Card({ title, children, icon }) {
    return (
        <div className="flex flex-col bg-slate-900 p-4 rounded drop-shadow-lg">
            <div className="flex flex-row items-center text-blue-300 mb-2 text-xl" >
                {icon && <i className={"text-2xl mr-2.5 " + icon}></i>}
                <h2 className="font-bold mb-0.5">{title}</h2>
            </div>
            <div className="text-gray-100">{children}</div>
        </div>
    );
}
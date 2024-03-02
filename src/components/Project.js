
export default function Project({title, subtitle, children, width, height}) {
    return (
        <div className="flex flex-col items-start mb-7 last:mb-0">
            <div className="text-gray-500">{subtitle}</div>
            <div className="text-lg bold mb-1 font-bold">{title}</div>
            <div className="flex flex-1 flex-col items-start">{children}</div>
        </div>
    )
}
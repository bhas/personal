import Stars from "./Stars";


export default function SkillLevelTip({ level, title, children}) {
    return (
        <div className="flex flex-col gap-2 mb-5 items-center text-center min-w-72 flex-1">
            <Stars level={level} />
            <span className="text-xl font-bold mt-1">{title}</span>
            <span>{children}</span>
        </div>
    )
}
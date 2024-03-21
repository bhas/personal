

export default function SkillHeader({children}) {
    return (
        <div className="flex flex-row justify-between items-center mt-10">
            <h2 className="text-xl font-bold text-blue-300">{children}</h2>
            <span className="text-sm text-slate-500 font-normal"><i class="fa-solid fa-circle-info mr-0.5"></i> Click on each skill to learn more</span>
          </div>
    )
}
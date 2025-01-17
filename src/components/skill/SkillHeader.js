

export default function SkillHeader({children, showTooltip}) {
    return (
        <div className="flex flex-row justify-between items-center mt-10">
            <h2 className="text-xl font-bold text-blue-300">{children}</h2>
            {showTooltip && <span className="text-xs lg:text-sm text-slate-500 font-normal"><i className="fa-solid fa-circle-info"></i> Click on each skill to learn more</span> }
          </div>
    )
}
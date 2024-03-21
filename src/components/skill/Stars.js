

export default function Stars({ level }) {
    return (
        <div className="flex flex-row items-center">
            <Star solid={level >= 1} />
            <Star solid={level >= 2} />
            <Star solid={level >= 3} />
        </div>
    )
}

function Star({ solid }) {
    let classes = solid ?
        "fa-solid text-blue-300 group-hover:text-orange-300" :
        "fa-regular text-slate-500/70";
    return (
        <i className={`${classes} fa-star mx-1`}></i>
    )
}
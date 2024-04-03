import { formatDate, formatTimeElapsed } from "../../utilities/DateUtilities";
import { HashLink } from "react-router-hash-link";



export default function TimelineItem({ children, company, companyIcon, companyUrl, alignRight, type, href, startDate, endDate, secondary }) {
    return <>
        {alignRight && <DotLine secondary={secondary} />}
        <div className={`flex flex-col -mt-8 mb-14 ${alignRight ? "items-start col-start-3" : "items-end col-start-1"}`}>
            <DateRangeLabel startDate={startDate} endDate={endDate} alignRight={alignRight} />
            <TitleBar company={company} companyIcon={companyIcon} alignRight={alignRight} type={type} url={companyUrl} />
            <div className={`mt-3 px-4 ${!alignRight && "text-right"}`}>
                {children}
            </div>
            <HashLink  to={href} className="text-sm py-2 px-4 text-slate-500 hover:text-sky-500">
                Read more...
            </HashLink>

        </div>
        {!alignRight && <DotLine secondary={secondary} />}
    </>
}

function DateRangeLabel({ startDate, endDate, alignRight }) {
    let dateText = formatDate(startDate);
    if (endDate !== undefined) {
        dateText += " - " + formatDate(endDate);
    }

    return <>
        <div className={`flex text-xs mb-2 mx-1 text-slate-500 items-center gap-3 ${alignRight ? "flex-row" : "flex-row-reverse"}`}>
            <span>{dateText}</span>
            {endDate !== undefined && <span>({formatTimeElapsed(startDate, endDate)})</span>}
        </div>
    </>
}

function TitleBar({ company, companyIcon, alignRight, type, url }) {
    return (
        <div className={`flex justify-start items-center gap-1 sm:gap-3 ${alignRight ? "flex-row-reverse" : "flex-row"}`}>
            <span className="bg-slate-500 px-1 py-0.5 text-xs drop-shadow-sm rounded-sm">
                {type}
            </span>
            <a className={`flex flex-row items-center px-1 py-0.5 font-bold drop-shadow-sm text-lg cursor-pointer hover:underline`} href={url} target="_blank">
                <img width={32} height={32} className="rounded-sm mr-2" src={companyIcon} alt={company} />
                {company}
            </a>
        </div>
    )
}

function DotLine({ secondary }) {
    const width = 20;
    const r = width / 2;
    return (
        <svg height="100%" width={width} className="col-start-2 self-center">
            <line x1={width / 2} y1="0" x2={width / 2} y2="100%" className={"stroke-white"} strokeWidth={3} />
            <circle cx={width / 2} cy={r} r={r} className={secondary ? "fill-gray-700" : "fill-red-500"} />
            <circle cx={width / 2} cy={r} r={r - 4} fill="white" strokeWidth={0} />
        </svg>
    )
}
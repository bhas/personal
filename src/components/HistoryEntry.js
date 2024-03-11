import { formatDate, formatTimeElapsed } from "../utilities/DateUtilities";


export default function HistoryEntry({company, position, startDate, type, endDate, children}) {
    return <>
        <div className="flex flex-row margin-bottom mb-1">
            <DateRangeLabel startDate={startDate} endDate={endDate}/>
            <TimeLine type={type}/>
            <HistoryEntryContent 
                title={position} 
                subtitle={company.name} 
                iconSrc={company.iconUrl}
                iconUrl={company.linkedInUrl}>
                {children}
            </HistoryEntryContent>
        </div>
    </>
}

function HistoryEntryContent({title, subtitle, iconSrc, iconUrl, children}) {
    return <>
        <div className="flex-1 flex flex-col items-start">
            <div className="flex flex-row items-center">
                <span className="text-lg font-bold mr-3 mb-0.5">{title}</span>
                <span>at</span>
                <a className="flex flex-row items-center font-normal ml-3 text-gray-950 cursor-pointer" href={iconUrl} target="_blank">
                    <img width={20} height={20} className="mr-1 rounded grow-0 basis-5" src={iconSrc} alt={subtitle}/>
                    <div>{subtitle}</div>
                </a>
            </div>
            
            <div className="mt-1 mb-5">{children}</div>
        </div>
    </>
}

function TimeLine({type}) {
    const icon = type === "work" ? 
        process.env.PUBLIC_URL + "/briefcase-solid.svg" :
        process.env.PUBLIC_URL + "/graduation-cap-solid.svg";
    const dotSize = 17;
    const iconSize = 18;
    const color = "#139";
    return <svg className="grow-0 shrink-0 basis-10 mr-5 ml-2.5">
        <circle cx={dotSize} cy={dotSize} r={dotSize} fill={color}/>
        <line x1={dotSize} y1={dotSize} x2={dotSize} y2="100%" stroke={color} strokeWidth="2"/>
        <image xlinkHref={icon} x={dotSize-iconSize/2} y={dotSize-iconSize/2} height={iconSize} width={iconSize}></image>
    </svg>
}

function DateRangeLabel({startDate, endDate}) {
    return <>
        <div className="flex flex-col items-end mt-1 grow-0 shrink-0 basis-40">
            <div className="text-sm font-bold">{formatDate(startDate)} - {formatDate(endDate)}</div>
            <div className="text-xs text-gray-500">({formatTimeElapsed(startDate, endDate)})</div>
        </div>
    </>
}
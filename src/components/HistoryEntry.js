import "./HistoryEntry.css";


export default function HistoryEntry({company, position, startDate, type, endDate, children}) {
    return <>
        <div className="history-entry">
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
        <div className="history-entry-content">
            <div className="history-entry-header">
                <span className="title">{title}</span>
                <span>at</span>
                <a className="company-link" href={iconUrl} target="_blank">
                    <img height={24} className="icon" src={iconSrc} alt={subtitle}/>
                    <div>{subtitle}</div>
                </a>
            </div>
            
            <div className="history-entry-description">{children}</div>
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
    return <svg className="time-line">
        <circle cx={dotSize} cy={dotSize} r={dotSize} fill={color}/>
        <line x1={dotSize} y1={dotSize} x2={dotSize} y2="100%" stroke={color} stroke-width="2"/>
        <image xlinkHref={icon} x={dotSize-iconSize/2} y={dotSize-iconSize/2} height={iconSize} width={iconSize}></image>
    </svg>
}

function DateRangeLabel({startDate, endDate}) {
    return <>
        <div className="date-range">
            <div className="date-range-label">{formatDate(startDate)} - {formatDate(endDate)}</div>
            <div className="date-range-elapsed">({formatTimeElapsed(startDate, endDate)})</div>
        </div>
    </>
}

function formatDate(date) {
    if (date === null) {
        return "Present";
    }

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
    });
}

function formatTimeElapsed(startDate, endDate) {
    if (endDate === null) {
        endDate = new Date();
    }

    const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    const differenceYears = Math.floor(totalMonths / 12);
    const differenceMonths = totalMonths % 12;
    
    if (differenceYears === 0) {
        return `${differenceMonths} months`;
    }
    else {
        if (differenceMonths === 0) {
            return `${Math.floor(differenceYears)} years`;
        } 
        else {
            return `${Math.floor(differenceYears)} years and ${differenceMonths} months`;
        }
    }
}




export default function HistoryEntry({company, position, startDate, endDate, description}) {
    return <>
    <b>{company}</b>
    <ul>
        <li>{company}</li>
        <li>{position}</li>
        <li>{formatDate(startDate)}</li>
        <li>{formatDate(endDate)}</li>
        <li>{description}</li>
    </ul>
    </>
}

function formatDate(date) {
    if (date === null) {
        return "Present";
    }

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
    });
}

import { formatDate, formatTimeElapsed } from "../../utilities/DateUtilities";



export default function TimelineItem({ children, company, alignRight, type, href, startDate, endDate, secondary }) {
  return <>
      {alignRight && <DotLine secondary={secondary} />}
      <div className={`flex flex-col -mt-6 mb-10 ${alignRight ? "items-start col-start-3" : "items-end col-start-1"}`}>
          <DateRangeLabel startDate={startDate} endDate={endDate} alignRight={alignRight} />
          <div className={`flex  justify-start items-end ${alignRight ? "flex-row-reverse" : "flex-row"}`}>
              <span className="bg-slate-500 px-1 py-0.5 text-xs drop-shadow-sm">{type}</span>
              <span className={`${secondary ? "bg-gray-700" : "bg-blue-500"} px-2 py-0.5 font-bold drop-shadow-sm`}>{company}</span>
          </div>
          <a href={href} className={`my-2 px-3 py-1 rounded-sm hover:bg-slate-700 ${!alignRight && "text-right"}`}>
              {children}
              <div className="text-sm mt-1 text-slate-500">
                  Click to learn more
              </div>
          </a>

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
      <div className={`flex text-xs mb-1 text-slate-500 items-center gap-3 ${alignRight ? "flex-row" : "flex-row-reverse"}`}>
          <span>{dateText}</span>
          {endDate !== undefined && <span>({formatTimeElapsed(startDate, endDate)})</span>}
      </div>
  </>
}

function DotLine({secondary}) {
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

export default function IconLabel({iconClass, label, url, size = 17}) {
  return (
    <a className="flex flex-row items-center hover:text-gray-300" style={{fontSize: size}} href={url} target="_blank">
      <i className={"text-2xl " + iconClass}></i>
      <span className="ml-2">{label}</span>
    </a>
  )
}
import './IconLabel.css';

export default function IconLabel({iconClass, label, url, size = 17}) {
  return (
    <a className={"icon-label"} style={{fontSize: size}} href={url} target="_blank">
      <i className={iconClass}></i>
      <span>{label}</span>
    </a>
  )
}
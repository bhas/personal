import './IconLabel.css';

export default function IconLabel({iconClass, label, url}) {
  return (
    <a className="icon-label" href={url} target="_blank">
      <i className={iconClass}></i>
      <span>{label}</span>
    </a>
  )
}
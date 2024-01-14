import './IconLabel.css';

export default function IconLabel({iconClass, label}) {
  return (
    <div className="icon-label">
      <i className={iconClass}></i>
      <span>{label}</span>
    </div>
  )
}
import "./Badge.css";

export default function Badge({badge}) {
  return (
    <span className="badge2">
      <img alt={badge.label} src={formatUrl(badge.label, badge.color)}/>
    </span>
  )
}

function formatUrl(label, color) {
  return `https://img.shields.io/badge/${encodeURIComponent(label)}-${color.replace('#', '')}?style=flat`;
}
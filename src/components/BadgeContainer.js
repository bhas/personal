
export default function BadgeContainer({ badges }) {
  return (
    <div className="flex flex-row">
      {badges.map(badge => <Badge key={badge.label} badge={badge} />)}
    </div>
  );
}

function Badge({badge}) {
  return (
    <span className="mr-1 mb-2">
      <img alt={badge.label} src={formatUrl(badge.label, badge.color)}/>
    </span>
  )
}

function formatUrl(label, color) {
  return `https://img.shields.io/badge/${encodeURIComponent(label)}-${color.replace('#', '')}?style=flat`;
}

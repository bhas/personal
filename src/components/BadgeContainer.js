import Badge from "./Badge";

export default function BadgeContainer({ badges }) {
  return (
    <div>
      {badges.map(badge => <Badge key={badge.label} badge={badge} />)}
    </div>
  );
}

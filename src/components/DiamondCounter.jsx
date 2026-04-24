export default function DiamondCounter({ count, label = 'You' }) {
  return (
    <div className="diamond-counter">
      <span className="diamond-icon">💎</span>
      <span className="diamond-count">{count}</span>
      <span className="diamond-label">{label}</span>
    </div>
  );
}

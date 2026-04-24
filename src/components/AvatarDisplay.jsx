import { getHouseColors } from '../data/avatars';

export default function AvatarDisplay({ avatar, size = 'md', label, isAI = false }) {
  const colors = getHouseColors(avatar.house);
  const sizes = {
    sm: { circle: 48, font: 16, emoji: 20 },
    md: { circle: 72, font: 22, emoji: 28 },
    lg: { circle: 96, font: 28, emoji: 36 },
  };
  const s = sizes[size] || sizes.md;

  return (
    <div className="avatar-wrapper">
      <div
        className="avatar-circle"
        style={{
          width: s.circle,
          height: s.circle,
          background: `radial-gradient(circle at 30% 30%, ${colors.secondary}44, ${colors.primary})`,
          border: `3px solid ${colors.secondary}`,
          fontSize: s.emoji,
          boxShadow: `0 0 12px ${colors.secondary}66`,
        }}
      >
        <span role="img" aria-label={avatar.name}>{avatar.emoji}</span>
      </div>
      {label && <span className="avatar-label">{label}</span>}
      {isAI && <span className="avatar-ai-badge">AI</span>}
    </div>
  );
}

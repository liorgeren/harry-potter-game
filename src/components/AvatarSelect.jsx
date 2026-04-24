import { useState } from 'react';
import { PLAYER_AVATARS, getHouseColors } from '../data/avatars';
import AvatarDisplay from './AvatarDisplay';

export default function AvatarSelect({ onSelect }) {
  const [selected, setSelected] = useState(null);

  function handleConfirm() {
    if (selected !== null) {
      onSelect(PLAYER_AVATARS[selected]);
    }
  }

  return (
    <div className="screen avatar-select-screen">
      <div className="screen-header">
        <h2 className="screen-title">Choose Your Champion</h2>
        <p className="screen-subtitle">Pick the wizard who will represent you throughout the tournament</p>
      </div>

      <div className="avatar-grid">
        {PLAYER_AVATARS.map((avatar, i) => {
          const colors = getHouseColors(avatar.house);
          const isSelected = selected === i;
          return (
            <button
              key={i}
              className={`avatar-card ${isSelected ? 'avatar-card--selected' : ''}`}
              style={isSelected ? { borderColor: colors.secondary, boxShadow: `0 0 16px ${colors.secondary}88` } : {}}
              onClick={() => setSelected(i)}
              aria-pressed={isSelected}
            >
              <AvatarDisplay avatar={avatar} size="md" />
              <span className="avatar-card-name">{avatar.name}</span>
              <span
                className="avatar-card-house"
                style={{ color: colors.text || colors.secondary }}
              >
                {avatar.house.charAt(0).toUpperCase() + avatar.house.slice(1)}
              </span>
            </button>
          );
        })}
      </div>

      <div className="avatar-select-footer">
        <button
          className="btn btn-primary btn-large"
          onClick={handleConfirm}
          disabled={selected === null}
        >
          Enter the Arena
        </button>
      </div>
    </div>
  );
}

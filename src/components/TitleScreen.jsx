export default function TitleScreen({ onStart }) {
  return (
    <div className="screen title-screen">
      <div className="title-stars" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${8 + Math.random() * 10}px`,
            }}
          >✦</span>
        ))}
      </div>

      <div className="title-content">
        <div className="title-crest" aria-hidden="true">⚡</div>
        <h1 className="title-heading">
          <span className="title-harry">Harry Potter</span>
          <span className="title-trivia">Trivia Challenge</span>
        </h1>
        <p className="title-tagline">You vs AI · 15 Rounds · 5 Questions Each</p>
        <div className="title-features">
          <span className="feature-pill">💎 Earn Diamonds</span>
          <span className="feature-pill">💡 Buy Hints</span>
          <span className="feature-pill">⚡ Race the AI</span>
        </div>
        <button className="btn btn-primary btn-large" onClick={onStart}>
          Begin Your Quest
        </button>
        <p className="title-hint-text">Answer first to win · Type quickly · Use diamonds wisely</p>
        <p className="title-credit">by Chloe Gerenstein</p>
      </div>
    </div>
  );
}

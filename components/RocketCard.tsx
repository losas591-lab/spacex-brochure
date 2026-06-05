"use client";

interface RocketCardProps {
  name: string;
  tagline: string;
  description: string;
  height: string;
  diameter: string;
  mass: string;
  payloadLeo: string;
  engines: string;
  reusable: boolean;
  launches: number;
  successRate: string;
  image: string;
}

export default function RocketCard({
  name,
  tagline,
  description,
  height,
  diameter,
  mass,
  payloadLeo,
  engines,
  reusable,
  launches,
  successRate,
  image,
}: RocketCardProps) {
  return (
    <div className="rocket-card">
      <div className="rocket-card-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="rocket-card-body">
        <h3 className="rocket-card-name">{name}</h3>
        <p className="rocket-card-tagline">{tagline}</p>
        <p className="rocket-card-desc">{description}</p>
        <div className="rocket-card-specs">
          <div className="spec">
            <span className="spec-label">Height</span>
            <span className="spec-value">{height}</span>
          </div>
          <div className="spec">
            <span className="spec-label">Payload (LEO)</span>
            <span className="spec-value">{payloadLeo}</span>
          </div>
          <div className="spec">
            <span className="spec-label">Mass</span>
            <span className="spec-value">{mass}</span>
          </div>
          <div className="spec">
            <span className="spec-label">Engines</span>
            <span className="spec-value">{engines}</span>
          </div>
        </div>
        <div className="rocket-card-stats">
          <div className="stat-chip">
            <span className="stat-num">{launches}</span>
            <span className="stat-label">Launches</span>
          </div>
          <div className="stat-chip">
            <span className="stat-num">{successRate}</span>
            <span className="stat-label">Success</span>
          </div>
          {reusable && (
            <div className="stat-chip reusable">
              <span className="stat-num">Yes</span>
              <span className="stat-label">Reusable</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

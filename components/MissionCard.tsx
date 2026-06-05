"use client";

const iconMap: Record<string, string> = {
  satellite: "🛰",
  planet: "🔴",
  moon: "🌙",
  spacecraft: "🚀",
  suit: "👨‍🚀",
  fuel: "⛽",
};

const statusColors: Record<string, string> = {
  Active: "#10b981",
  Planning: "#f59e0b",
  "In Development": "#3b82f6",
};

interface MissionCardProps {
  name: string;
  description: string;
  status: string;
  launched: string;
  coverage: string;
  icon: string;
}

export default function MissionCard({
  name,
  description,
  status,
  launched,
  coverage,
  icon,
}: MissionCardProps) {
  const color = statusColors[status] || "#6b7280";

  return (
    <div className="mission-card">
      <div className="mission-card-header">
        <span className="mission-icon">{iconMap[icon] || "🚀"}</span>
        <span className="mission-status" style={{ color, borderColor: color }}>
          {status}
        </span>
      </div>
      <h3 className="mission-card-name">{name}</h3>
      <p className="mission-card-desc">{description}</p>
      <div className="mission-card-meta">
        <div className="meta-item">
          <span className="meta-label">Deployed</span>
          <span className="meta-value">{launched}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Coverage</span>
          <span className="meta-value">{coverage}</span>
        </div>
      </div>
    </div>
  );
}

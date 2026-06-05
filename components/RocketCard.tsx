interface RocketCardProps {
  name: string;
  description: string;
}

export default function RocketCard({ name, description }: RocketCardProps) {
  return (
    <div
      style={{
        padding: "1.5rem",
        border: "1px solid #4a5fd4",
        borderRadius: "8px",
        background: "rgba(74, 95, 212, 0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(74, 95, 212, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <h3 style={{ marginBottom: "0.5rem", color: "#4a9eff" }}>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

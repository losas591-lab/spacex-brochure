"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RocketCard from "@/components/RocketCard";
import rocketsData from "@/data/rockets.json";
import missionsData from "@/data/missions.json";

const heroGradient = {
  background: "radial-gradient(ellipse at 50% 0%, rgba(74,95,212,0.15) 0%, transparent 70%)",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "4rem 2rem 2rem", ...heroGradient }}>
        <section style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "3.5rem",
              marginBottom: "1rem",
              textAlign: "center",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            SpaceX Mission Dashboard
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              textAlign: "center",
              marginBottom: "4rem",
              opacity: 0.7,
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.6,
            }}
          >
            A futuristic brochure inspired by Elon Musk and SpaceX.
          </p>

          <h2
            id="rockets"
            style={{
              fontSize: "2rem",
              marginBottom: "2rem",
              fontWeight: 700,
              borderBottom: "1px solid rgba(74, 95, 212, 0.3)",
              paddingBottom: "0.5rem",
            }}
          >
            Our Rockets
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              marginBottom: "4rem",
            }}
          >
            {rocketsData.map((rocket, index) => (
              <RocketCard key={index} {...rocket} />
            ))}
          </div>

          <h2
            id="missions"
            style={{
              fontSize: "2rem",
              marginBottom: "2rem",
              fontWeight: 700,
              borderBottom: "1px solid rgba(74, 95, 212, 0.3)",
              paddingBottom: "0.5rem",
            }}
          >
            Active Missions
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {missionsData.map((mission, index) => (
              <div
                key={index}
                style={{
                  padding: "1.5rem",
                  border: "1px solid rgba(74, 95, 212, 0.3)",
                  borderRadius: "8px",
                  background: "rgba(74, 95, 212, 0.08)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(74, 95, 212, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h3 style={{ marginBottom: "0.5rem", color: "#4a9eff" }}>
                  {mission.name}
                </h3>
                <p style={{ marginBottom: "0.5rem", lineHeight: 1.5 }}>
                  {mission.description}
                </p>
                <p style={{ fontSize: "0.9rem", opacity: 0.6 }}>
                  Status: {mission.status}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

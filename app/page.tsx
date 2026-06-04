"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RocketCard from "@/components/RocketCard";
import rocketsData from "@/data/rockets.json";
import missionsData from "@/data/missions.json";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "3rem 2rem" }}>
        <section style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem", textAlign: "center" }}>
            SpaceX Mission Dashboard
          </h1>
          <p style={{ fontSize: "1.25rem", textAlign: "center", marginBottom: "4rem", opacity: 0.9 }}>
            A futuristic brochure inspired by Elon Musk and SpaceX.
          </p>

          <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Our Rockets</h2>
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

          <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Active Missions</h2>
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
                  border: "1px solid #4a5fd4",
                  borderRadius: "8px",
                  background: "rgba(74, 95, 212, 0.1)",
                }}
              >
                <h3 style={{ marginBottom: "0.5rem", color: "#4a9eff" }}>{mission.name}</h3>
                <p style={{ marginBottom: "0.5rem" }}>{mission.description}</p>
                <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>Status: {mission.status}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

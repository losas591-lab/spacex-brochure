"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import RocketCard from "@/components/RocketCard";
import MissionCard from "@/components/MissionCard";
import Footer from "@/components/Footer";
import rocketsData from "@/data/rockets.json";
import missionsData from "@/data/missions.json";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />

      <section className="section" id="rockets">
        <div className="section-inner">
          <p className="section-eyebrow">OUR FLEET</p>
          <h2 className="section-title">Rockets</h2>
          <p className="section-subtitle">
            From the proven Falcon 9 to the transformative Starship, each
            vehicle is engineered for reusability, reliability, and the next
            frontier.
          </p>
          <div className="rocket-grid">
            {rocketsData.map((rocket) => (
              <RocketCard key={rocket.name} {...rocket} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="missions">
        <div className="section-inner">
          <p className="section-eyebrow">ACTIVE PROGRAMS</p>
          <h2 className="section-title">Missions</h2>
          <p className="section-subtitle">
            A portfolio of missions spanning low Earth orbit, the Moon, and
            the path to Mars.
          </p>
          <div className="mission-grid">
            {missionsData.map((mission) => (
              <MissionCard key={mission.name} {...mission} />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <h2 className="section-title">Join the Mission</h2>
          <p className="section-subtitle" style={{ maxWidth: "540px", margin: "0 auto 2rem" }}>
            SpaceX is hiring engineers, technicians, and dreamers who want to
            help build a future where humanity explores the stars.
          </p>
          <a
            href="https://www.spacex.com/careers"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Careers
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

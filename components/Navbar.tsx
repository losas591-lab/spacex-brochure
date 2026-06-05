"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(10, 14, 39, 0.95)"
          : "rgba(10, 14, 39, 0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(74, 95, 212, 0.2)",
        transition: "background 0.3s",
      }}
    >
      <h2 style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "0.05em" }}>
        SpaceX Dashboard
      </h2>
      <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.9rem" }}>
        <a href="#rockets" style={{ opacity: 0.8, transition: "opacity 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
        >
          Rockets
        </a>
        <a href="#missions" style={{ opacity: 0.8, transition: "opacity 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
        >
          Missions
        </a>
      </div>
    </nav>
  );
}

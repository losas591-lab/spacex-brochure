"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <span className="navbar-brand">SPACEX</span>
      <div className="navbar-links">
        <a href="#rockets">Rockets</a>
        <a href="#missions">Missions</a>
      </div>
    </nav>
  );
}

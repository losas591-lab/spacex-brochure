"use client";

import { useEffect, useRef } from "react";

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const stars: { x: number; y: number; r: number; speed: number; alpha: number }[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * (canvas?.width ?? window.innerWidth),
        y: Math.random() * (canvas?.height ?? window.innerHeight),
        r: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.3 + 0.05,
        alpha: Math.random() * 0.8 + 0.2,
      });
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.fill();
        s.y -= s.speed;
        if (s.y < -2) {
          s.y = canvas.height + 2;
          s.x = Math.random() * canvas.width;
        }
      }
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <StarField />
      <div className="hero-content">
        <p className="hero-eyebrow">SPACEX MISSION DASHBOARD</p>
        <h1 className="hero-title">
          Making Life
          <br />
          Multiplanetary
        </h1>
        <p className="hero-subtitle">
          Track the rockets, missions, and milestones driving humanity&apos;s
          journey to the Moon, Mars, and beyond.
        </p>
        <div className="hero-actions">
          <a href="#rockets" className="btn-primary">
            Explore Rockets
          </a>
          <a href="#missions" className="btn-secondary">
            View Missions
          </a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span className="scroll-arrow" />
      </div>
    </section>
  );
}

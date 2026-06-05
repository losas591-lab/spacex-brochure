"use client";

import { useEffect, useState } from "react";

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

const stats: Stat[] = [
  { label: "Total Launches", value: 370, suffix: "+" },
  { label: "Landing Success", value: 98, suffix: "%" },
  { label: "Reflights", value: 310, suffix: "+" },
  { label: "People Flown", value: 52, suffix: "" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [target]);

  return (
    <span className="stats-number">
      {current.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <div className="stats-bar">
      {stats.map((stat) => (
        <div key={stat.label} className="stats-item">
          <AnimatedNumber target={stat.value} suffix={stat.suffix} />
          <span className="stats-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

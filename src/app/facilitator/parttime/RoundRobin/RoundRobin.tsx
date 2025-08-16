import React, { useEffect, useMemo, useState } from "react";
import { Play, Pause } from "lucide-react";

type RoundRobinProps = {
  players: number;
  timer: number; // in minutes
};

const RoundRobin = ({ players, timer }: RoundRobinProps) => {
  const slotDuration = useMemo(() => (timer * 60 * 1000) / players, [players, timer]);
  const [activeCount, setActiveCount] = useState(0);
  const [countdown, setCountdown] = useState(slotDuration);
  const [isPaused, setIsPaused] = useState(true);

  // --- Precompute dot coordinates (alternating small/large steps) ---
  const dotCoordinates = useMemo(() => {
    const radius = 100;
    const delta = 0.3; // controls spacing difference
    const small = 1 - delta;
    const large = 1 + delta;

    // alternating weights
    const weights = Array.from({ length: players }, (_, i) => {
      switch (true) {
        case i === players - 1:
          return large;
        case i % 2 === 0:
          return small;
        case i % 2 === 1 && i === players - 2:
          return small;
        case i === players - 2:
          return large;
        default:
          return large;
      }
    });

    // normalize so total sum of angles = 2π
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    const step = (2 * Math.PI) / totalWeight;

    let theta = -Math.PI / 2; // start at top
    return weights.map((w) => {
      const x = radius * Math.cos(theta);
      const y = radius * Math.sin(theta);
      theta += w * step;
      return { x, y };
    });
  }, [players]);

  // --- Timer handling ---
  useEffect(() => {
    if (isPaused || activeCount >= players) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        // const newTime = prev - 1000;
        if (prev <= 1000) {
          setActiveCount((p) => p + 0.5);
          return slotDuration;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, activeCount, players, slotDuration]);

  // --- Formatting helper ---
  const timerFormat = (time: number) => {
    const totalSeconds = Math.floor(time / 1000);
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-col gap-2 h-full w-full items-center justify-center">
      {/* Control bar */}
      <div
        className="absolute z-10 w-30 flex items-center justify-center gap-2 text-[var(--primary-blue)] cursor-pointer rounded-md"
        onClick={() => setIsPaused((p) => !p)}
      >
        <div className="flex items-center justify-center gap-2 px-2 border-[var(--primary-blue)] border-[0.25px] rounded-md hover:bg-[var(--primary-blue)] hover:text-[var(--primary-white)] transition-colors duration-[500ms]">
          {isPaused ? (
            <Play strokeWidth={1} size={17} />
          ) : (
            <Pause strokeWidth={1} size={17} />
          )}
          <div className="p-1 w-12 flex items-center justify-center">
            {timerFormat(countdown)}
          </div>
        </div>
      </div>

      {/* Player dots */}
      <div className="relative h-64 w-64">
        {dotCoordinates.map(({ x, y }, i) => {
          const isActive = i < activeCount;
          return (
            <div
              key={i}
              className="absolute flex items-center justify-center 
                         h-8 w-8 rounded-full text-[var(--primary-white)] border-[0.25px] 
                         border-[var(--primary-blue)] transition-colors duration-[2000ms] ease-in-out"
              style={{
                backgroundColor: isActive
                  ? "var(--primary-blue)"
                  : "lightgray",
                color: isActive
                  ? "var(--primary-white)"
                  : "var(--primary-blue)",
                top: `calc(50% + ${y}px - 1rem)`,
                left: `calc(50% + ${x}px - 1rem)`,
              }}
            >
              {/* {i + 1} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoundRobin;

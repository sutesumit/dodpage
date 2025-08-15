import React, { useEffect, useState } from "react";
import { Play, Pause } from "lucide-react";

const RoundRobin = ({ players, timer }: { players: number, timer: number }) => {
    const slotDuration = timer*1000*60 / players;
    const [activeCount, setActiveCount] = useState(0);
    const [countdown, setCountdown] = useState(slotDuration);
    const [isPaused, setIsPaused] = useState(true);

    // Handle moving to the next player:
    useEffect(() => {
        if (activeCount >= players || isPaused) return;
        const interval = setInterval(() => {
            setActiveCount((prev) => (prev + 1));
            setCountdown(slotDuration);
        }, slotDuration);
        return () => clearInterval(interval); // cleanup
    }, [activeCount, slotDuration, players, isPaused]);

    // Handle countdown for the current player:
    useEffect(() => {
        if (activeCount >= players || isPaused) return;
        const time = setInterval(()=>{
            setCountdown((prev)=>{
                if (prev <= 1000) {
                    clearInterval(time);
                    return 0;
                }
                return (prev-1000)
            })
        },1000)
        return ()=> clearInterval(time)
    }, [countdown, isPaused]);

    const timerFormat = (time: number) => {
        const totalSeconds = Math.floor(time / 1000);
        const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    const handlePause = () => {
        setIsPaused(!isPaused);
    }

    return (
    <div className="flex flex-col gap-2 h-full w-full items-center justify-center">
      <div 
        className="absolute z-10 w-30 flex items-center justify-center gap-2 text-[var(--primary-blue)] cursor-pointer rounded-md"
        onClick={handlePause}
      >
        <div className="flex items-center justify-center gap-2 px-2 border-[var(--primary-blue)] border-[0.25px] rounded-md hover:bg-[var(--primary-blue)] hover:text-[var(--primary-white)] transition-colors duration-[500ms]">
            {isPaused
                ? <Play className="" strokeWidth={1} size={17} />
                : <Pause className="" strokeWidth={1} size={17} />
            }
            <div className="p-1 w-12 flex items-center justify-center">{timerFormat(countdown)}</div>
        </div>
      </div>
      <div className="relative h-64 w-64">
        {Array.from({ length: players }, (_, i) => {
          const angle = (i / players) * 2 * Math.PI;
          const radius = 100;
          const x = Math.round(radius * Math.cos(angle) * 1000) / 1000;
          const y = Math.round(radius * Math.sin(angle) * 1000) / 1000;

          const isActive = i < activeCount;

          return (
            <div
              key={i}
              className={`absolute flex items-center justify-center 
                          h-8 w-8 rounded-full text-[var(--primary-white)] border-[0.25px] 
                          border-[var(--primary-blue)] transition-colors duration-[2000ms] ease-in-out`}
              style={{
                backgroundColor: isActive
                  ? "var(--primary-blue)" // active color
                  : "lightgray", // inactive color
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

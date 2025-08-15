import React, { useState } from "react";
import { Play, Pause } from "lucide-react";
import RoundRobin from "./RoundRobin";

// const RoundRobin = ({ players, timer }: { players: number; timer: number }) => {
//   const slotDuration = (timer * 1000 * 60) / players;

//   return (
//     <div className="p-4 border rounded">
//       <h2 className="text-lg font-bold">RoundRobin</h2>
//       <p>Players: {players}</p>
//       <p>Timer (minutes): {timer}</p>
//       <p>Slot Duration (ms): {slotDuration}</p>
//     </div>
//   );
// };

const RoundRobinForm = () => {
  const [players, setPlayers] = useState("");
  const [timer, setTimer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex p-2 flex-col gap-2 min-w-[50ch]">
          <div className="flex p-1 gap-4 items-center justify-center">
            <label className="flex sr-only items-center justify-center font-medium">Players</label>
            <input
              type="number"
              placeholder="Total number of Players"
              value={players}
              onChange={(e) => setPlayers(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
          </div>

          <div className="flex p-1 gap-4 items-center justify-center">
            <label className="flex sr-only items-center justify-center font-medium">Timer</label>
            <input
              type="number"
              placeholder="Collective time for IntroTime in minutes"
              value={timer}
              onChange={(e) => setTimer(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="nav-btn px-4 py-1 border-[var(--primary-blue)] border-[0.25px]"
          >
            Start <span className="font-title pl-2">IntroTime</span>
          </button>
        </form>
      ) : (
        <RoundRobin players={Number(players)} timer={Number(timer)} />
      )}
    </>
  );
};

export default RoundRobinForm;

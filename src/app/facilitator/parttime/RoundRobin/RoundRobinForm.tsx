import React, { useState } from "react";
import RoundRobin from "./RoundRobin";

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
              placeholder="Collective time for PartTime A in minutes"
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
            Start <span className="font-title pl-2">PartTime A</span>
          </button>
        </form>
      ) : (
        <RoundRobin players={Number(players)} timer={Number(timer)} />
      )}
    </>
  );
};

export default RoundRobinForm;

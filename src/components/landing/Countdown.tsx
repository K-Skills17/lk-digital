"use client";

import { useState, useEffect } from "react";

const DEADLINE = new Date("2026-06-30T23:59:59-03:00").getTime();

function getTimeLeft() {
  const now = Date.now();
  const diff = DEADLINE - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

export function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (time.expired) return null;

  const units = [
    { value: time.days, label: "dias" },
    { value: time.hours, label: "horas" },
    { value: time.minutes, label: "min" },
    { value: time.seconds, label: "seg" },
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-4" aria-label="Tempo restante para a oferta">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className="font-heading text-2xl sm:text-3xl font-bold text-accent tabular-nums min-w-[2.5rem] text-center">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider text-text-muted mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";

type PendingChallenge = {
  disciplineIndex: number;
  challengeIndex: number;
} | null;

const STORAGE_KEY = "pendingChallenge";

export default function usePendingChallenge() {
  const [pendingChallenge, setPendingChallenge] = useState<PendingChallenge>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setPendingChallenge(JSON.parse(stored));
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pendingChallenge) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(pendingChallenge));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [pendingChallenge]);

  function savePending(disciplineIndex: number, challengeIndex: number) {
    setPendingChallenge({ disciplineIndex, challengeIndex });
  }

  function clearPending() {
    setPendingChallenge(null);
  }

  return {
    pendingChallenge,
    savePending,
    clearPending,
  };
}

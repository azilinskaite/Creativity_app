"use client";
import { useState, useEffect } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  return user;
}

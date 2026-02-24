"use client";
import { useEffect } from "react";
import { useEventsStore } from "@/zustand-store/EventStore";

export function EventsPrefetch() {
  const fetchEvents = useEventsStore((s) => s.fetchEvents);

  useEffect(() => {
    fetchEvents();
  }, []);

  return null;
}
"use client";
import { useEffect, useState } from "react";
import { useEventsStore } from "@/zustand-store/EventStore";

export interface IEvent {
  id: string;
  name: string;
  description?: string;
  date: string;
  totalFunding: number;
  peopleBenefited: number;
  photos: {
    photoUrl: string;
    id: number;
    eventId: number;
    description?: string;
  }[];
}

export function useGetEvents() {
  const globalEvents = useEventsStore((s) => s.events);
  const storeFetchEvents = useEventsStore((s) => s.fetchEvents);

  const [events, setEvents] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setIsLoading(true);
        if (globalEvents) {
          setEvents(globalEvents);
        } else {
          await storeFetchEvents();
          setEvents(useEventsStore.getState().events || []);
        }
      } catch {
        setError("Erro ao carregar evento");
      } finally {
        setIsLoading(false);
      }
    };
    loadEvents();
  }, [globalEvents, storeFetchEvents]);

  return {
    events,
    isLoading,
    error,
  };
}

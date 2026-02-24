"use client";
import { useEffect, useState } from "react";
import { http } from "@/services/http";
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
  const fetchEvents = useEventsStore((s) => s.fetchEvents);
  
  const [events, setEvents] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
setIsLoading(true); if (globalEvents) { setEvents(globalEvents); }
else { await fetchEvents(); setEvents(useEventsStore.getState().events || []); }
      } catch {
        setError("Erro ao carregar evento");
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, [globalEvents, fetchEvents]);
  return {
    events,
    isLoading,
    error,
  };
}

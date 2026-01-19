"use client";
import { useEffect, useState } from "react";
import { http } from "@/services/http";

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
  const [events, setEvents] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const response = await http.get("/api/events");
        setEvents(response.data);
      } catch {
        setError("Erro ao carregar evento");
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);
  return {
    events,
    isLoading,
    error,
  };
}

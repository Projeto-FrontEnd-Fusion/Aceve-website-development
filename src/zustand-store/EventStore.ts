import { create } from "zustand";
import { http } from "@/services/http";
import { IEvent } from "@/features/admin-dashboard/hooks/useGetEvents";

const CACHE_TTL = 1000 * 60 * 30;

interface EventsState {
  events: IEvent[] | null;
  lastFetched: number | null;
  isFetching: boolean;
  fetchEvents: () => Promise<void>;
}

export const useEventsStore = create<EventsState>((set, get) => ({
  events: null,
  lastFetched: null,
  isFetching: false,
  fetchEvents: async () => {
    const { lastFetched, isFetching } = get();
    const isStale = !lastFetched || Date.now() - lastFetched > CACHE_TTL;

    if (!isStale || isFetching) return;
    set({ isFetching: true });
    try {
      const { data } = await http.get<IEvent[]>("/api/events");
      set({ events: data, lastFetched: Date.now() });
    } finally {
      set({ isFetching: false });
    }
  },
}));
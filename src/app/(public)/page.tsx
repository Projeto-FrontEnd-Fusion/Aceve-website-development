"use client"
import BannerHero from "@/features/home/components/BannerHero/BannerHero";
import { OurPartners } from "@/features/home/components/Partners/OurPartners";
import { Media } from "@/features/home/components/Media/Media";
import { WhoWeAre } from "@/features/home/components/WhoWeAre/WhoWeAre";
import { useEventsStore } from "@/zustand-store/EventStore";
import { useEffect } from "react";

export default function Home() {
  
  const fetchEvents = useEventsStore((s) => s.fetchEvents)
  useEffect(() => {
    fetchEvents()
  }, []);

  return (
    <main className="overflow-x-hidden">
      <BannerHero />
      <WhoWeAre />
      <Media />
      <OurPartners />
    </main>
  );
}

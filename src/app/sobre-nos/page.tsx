"use client";
import { ImpactfulStories } from "@/features/about-us/components/ImpactfulStories";
import OurImpact from "@/features/about-us/components/OurImpact";
import { Changemaker } from "@/features/about-us/components/Changemaker";
import { AboutUs } from "@/features/about-us/components/AboutUs";
import { WhatWeDo } from "@/features/about-us/components/WhatWeDo";

function SobreNos() {
  return (
    <main className="flex flex-col">
      <AboutUs />
      <OurImpact />
      <WhatWeDo />
      <ImpactfulStories />
      <Changemaker />
    </main>
  );
}

export default SobreNos;

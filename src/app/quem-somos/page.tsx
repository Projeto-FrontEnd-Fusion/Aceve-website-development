import React from "react";
import BannerWhoWeAre from "@/components/whoweare-extended/Banner";
import HeroSectionWhoWeAre from "@/components/whoweare-extended/HeroSection";
import InfoSectionWhoWeAre from "@/components/whoweare-extended/InfoSection";
import WorksSectionWhoWeAre from "@/components/whoweare-extended/WorksSection";
import GallerySection from "@/components/whoweare-extended/GallerySection";

const QuemSomos = () => {
  return (
    <main>
      <BannerWhoWeAre />
      <HeroSectionWhoWeAre />
      <WorksSectionWhoWeAre />
      <InfoSectionWhoWeAre />
      <GallerySection />
    </main>
  );
};
export default QuemSomos;

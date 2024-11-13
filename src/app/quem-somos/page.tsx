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
      <div className="flex flex-col-reverse laptop:flex-col">
        <InfoSectionWhoWeAre />
        <GallerySection />
      </div>
    </main>
  );
};
export default QuemSomos;

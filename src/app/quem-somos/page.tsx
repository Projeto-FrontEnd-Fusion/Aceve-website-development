import React from "react";
import BannerWhoWeAre from "@/components/whoweare-extended/Banner";
import HeroSectionWhoWeAre from "@/components/whoweare-extended/HeroSection";
import InfoSectionWhoWeAre from "@/components/whoweare-extended/InfoSection";
import WorksSectionWhoWeAre from "@/components/whoweare-extended/WorksSection";
import GallerySection from "@/components/whoweare-extended/GallerySection";
import Partners from "@/components/whoweare-extended/Partners";

const QuemSomos = () => {
  return (
    <main>
      <BannerWhoWeAre />
      <HeroSectionWhoWeAre />
      <WorksSectionWhoWeAre />
      <div className="flex flex-col-reverse tablet:flex-col">
        <InfoSectionWhoWeAre />
        <GallerySection />
      </div>
      <Partners />
    </main>
  );
};
export default QuemSomos;

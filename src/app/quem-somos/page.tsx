import BannerWhoWeAre from "@/components/whoweare-extended/Banner";
import GallerySectionWhoWeAre from "@/components/whoweare-extended/GallerySection";
import HeroSectionWhoWeAre from "@/components/whoweare-extended/HeroSection";
import InfoSectionWhoWeAre from "@/components/whoweare-extended/InfoSection";
import WorksSectionWhoWeAre from "@/components/whoweare-extended/WorksSection";
import React from "react";

const QuemSomos = () => {
  return (
    <main>
      <BannerWhoWeAre />
      <HeroSectionWhoWeAre />
      <WorksSectionWhoWeAre />
      <InfoSectionWhoWeAre />
      <GallerySectionWhoWeAre />
    </main>
  );
};
export default QuemSomos;

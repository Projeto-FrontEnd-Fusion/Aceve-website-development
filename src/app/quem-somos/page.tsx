import React from "react";
import BannerWhoWeAre from "@/components/whoweare-extended/banner";
import InfoSectionWhoWeAre from "@/components/whoweare-extended/info-section";
import WorksSectionWhoWeAre from "@/components/whoweare-extended/works-section";
import Partners from "@/components/whoweare-extended/partners-section";
import GallerySection from "@/components/whoweare-extended/gallery-section";
import HeroSectionWhoWeAre from "@/components/whoweare-extended/hero-section";

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

import BannerHero from "@/components/Banner/mainbanner";
import { FooterBanner } from "@/components/FooterBanner/Banner";
import { ImpactHistory } from "@/components/History/ImpactHistory";
import { OurPartners } from "@/components/Partners/OurPartners";
import Partners from "@/components/whoweare-extended/partners-section";
import { WhoWeAre } from "@/components/WhoWeAre/WhoWeAre";
import { bannerDetails } from "@/model/bannerdetailsModel";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <BannerHero
        title={bannerDetails.title}
        description={bannerDetails.description}
        bannerImg={bannerDetails.bannerImg}
      />
      {/*  <ImpactHistory /> */}
      {/*       <FooterBanner /> */}
      <WhoWeAre />
      <OurPartners />
    </main>
  );
}

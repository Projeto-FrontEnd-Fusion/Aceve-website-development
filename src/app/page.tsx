import BannerHero from "@/components/Banner/mainbanner";
import { FooterBanner } from "@/components/FooterBanner/Banner";
import { ImpactHistory } from "@/components/History/ImpactHistory";
import { OurPartners } from "@/components/Partners/OurPartners";
import { Media } from "@/components/Media/Media";
import Partners from "@/components/whoweare-extended/partners-section";
import { WhoWeAre } from "@/components/WhoWeAre/WhoWeAre";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <BannerHero/>
      {/*  <ImpactHistory /> */}
      {/*  <FooterBanner /> */}
      <WhoWeAre />
      <Media />
      <OurPartners />
    </main>
  );
}

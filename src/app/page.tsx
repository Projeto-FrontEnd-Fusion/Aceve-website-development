import BannerHero from "@/components/Banner/mainbanner";
import { FooterBanner } from "@/components/FooterBanner/Banner";
import { ImpactHistory } from "@/components/History/ImpactHistory";
import { UsPartners } from "@/components/Partners/UsPartners";
import Partners from "@/components/whoweare-extended/partners-section";
import { WhoWeAre } from "@/components/WhoWeAre/WhoWeAre";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <BannerHero/>
     {/*  <ImpactHistory /> */}
{/*       <FooterBanner /> */}
      <WhoWeAre/>
      <UsPartners />
    </main>
  );
}

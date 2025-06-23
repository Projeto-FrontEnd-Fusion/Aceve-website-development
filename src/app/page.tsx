import BannerHero from "@/components/Banner/mainbanner";
import { FooterBanner } from "@/components/FooterBanner/Banner";
import { ImpactHistory } from "@/components/History/ImpactHistory";
import { UsPartners } from "@/components/Partners/UsPartners";
import Partners from "@/components/whoweare-extended/partners-section";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <BannerHero/>
     {/*  <ImpactHistory /> */}
{/*       <FooterBanner /> */}
      <UsPartners />
    </main>
  );
}

import BannerHero from "@/components/Banner/mainbanner";
import { FooterBanner } from "@/components/FooterBanner/Banner";
import { ImpactHistory } from "@/components/History/ImpactHistory";
import { UsPartners } from "@/components/Partners/UsPartners";
import Partners from "@/components/whoweare-extended/partners-section";
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
      <UsPartners />
    </main>
  );
}

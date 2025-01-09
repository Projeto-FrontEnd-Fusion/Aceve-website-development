import { Activity } from "@/components/Areasofactivity/Activity";
import BannerHero from "@/components/Banner/mainbanner";
import { FooterBanner } from "@/components/FooterBanner/Banner";
import { ImpactHistory } from "@/components/History/ImpactHistory";
import { UsPartners } from "@/components/Partners/UsPartners";
import { SupportUs } from "@/components/SupportUs/supportUs";
import Partners from "@/components/whoweare-extended/partners-section";
import { Whoweare } from "@/components/Whoweare/whoweare";
import { bannerDetails } from "@/model/bannerdetailsModel";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <BannerHero
        title={bannerDetails.title}
        description={bannerDetails.description}
        bannerImg={bannerDetails.bannerImg}
      />
      <Whoweare />
      <Activity />
      <ImpactHistory />
      <FooterBanner />
      <SupportUs />
      <UsPartners />
    </main>
  );
}

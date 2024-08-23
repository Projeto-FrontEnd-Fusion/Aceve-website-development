import BannerHero from "@/components/Banner/mainbanner";
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
    </main>
  );
}

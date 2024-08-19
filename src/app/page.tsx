import BannerHero from "@/components/Banner/mainbanner";
import { bannerDetails } from "@/model/bannerdetailsModel";

export default function Home() {
  return (
    <main>
      <BannerHero
        title={bannerDetails.title}
        description={bannerDetails.description}
        bannerImg={bannerDetails.bannerImg}
      />
    </main>
  );
}

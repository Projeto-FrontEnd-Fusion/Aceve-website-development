import BannerHero from "@/components/Banner/mainbanner";
import { OurPartners } from "@/components/Partners/OurPartners";
import { Media } from "@/components/Media/Media";
import { WhoWeAre } from "@/components/WhoWeAre/WhoWeAre";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <BannerHero/>
      <WhoWeAre />
      <Media />
      <OurPartners />
    </main>
  );
}

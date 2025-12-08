import BannerHero from "@/features/home/components/BannerHero/BannerHero";
import { OurPartners } from "@/features/home/components/Partners/OurPartners";
import { Media } from "@/features/home/components/Media/Media";
import { WhoWeAre } from "@/features/home/components/WhoWeAre/WhoWeAre";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <BannerHero />
      <WhoWeAre />
      <Media />
      <OurPartners />
    </main>
  );
}

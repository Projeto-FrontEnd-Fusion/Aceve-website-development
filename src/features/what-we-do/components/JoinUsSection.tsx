import Image from "next/image";
import joinussectionIMG from "@/assets/joinussectionIMG.png";

export default function JoinUsSection() {
  return (
    <section className="relative w-full  h-[40.8125rem] mx-auto overflow-hidden">
      <Image
        src={joinussectionIMG}
        alt="Foto do grupo de voluntários "
        fill
        className="object-cover"
        priority
      />

      <div
        className="absolute bottom-10 right-10
          flex flex-col gap-4 
          bg-white/80  backdrop-blur-md shadow-lg
          rounded-[1rem]
          w-[21.5rem] h-[15.375rem] px-[0.5rem] py-[1.25rem] left-1/2 -translate-x-1/2 bottom-4
          sm:w-[43rem] sm:h-[12rem] sm:px-[1.25rem] sm:py-[1.25rem] sm:left-1/2 sm:-tranlate-x-1/2 sm:bottom-8
          lg:w-[29.375rem] lg:h-[12rem] lg:px-[1.25rem] lg:py-[1.25rem] lg:right-10 lg:bottom-10 lg:translate-x-0 lg:left-auto
        "
      >
        <h2>Gostou?</h2>
        <p> Nos ajude a transformar vidas</p>
      </div>
    </section>
  );
}

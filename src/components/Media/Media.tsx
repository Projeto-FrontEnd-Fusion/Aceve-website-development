export function Media() {
  return (
    <section className="flex flex-col 
    px-4 
    tablet:px-8 laptop:px-[72px]
    min-[400px]:px-8 desktop:mx-auto py-10">
      <h2 className="uppercase text-sm leading-[30px] text-[#6F6975] tracking-tighter font-semibold min-[400px]:text-2xl">
        mídia
      </h2>
      <h3 className="text-lg leading-6 text-[#54287B] tracking-tighter font-semibold mb-4 min-[400px]:text-3xl ">
        Nossa causa em destaque
      </h3>
      <div className="flex flex-col gap-8 md:flex-row">
        <iframe
          className="w-full aspect-video rounded"
          src="https://www.youtube.com/embed/oZbtMHtT_LI"
          title="Tribunal de Justiça de SP registra recorde de medidas protetivas concedidas em 2024"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          className="w-full aspect-video rounded"
          src="https://www.youtube.com/embed/rbPbmunqQro"
          title="2°EPISODIO DO PODCAST LIBERTÁRIOS DO CAPÃO."
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

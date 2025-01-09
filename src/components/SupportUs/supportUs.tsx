import { HeaderSection } from "../Header";

export const SupportUs = () => {
  return (
    <section className="px-6 flex flex-col gap-8 py-20 bg-beige-normal">
      <HeaderSection
        title="Acompanhe-nos"
        sub="Curta, compartilhe e participe de nossa comunidade online"
      />

      <picture>
        {/* Imagem para telas menores que mobileXLarger */}
        <source
          media="(max-width: 767px)"
          srcSet="https://i.imgur.com/lkyaTPq.jpg"
        />
        {/* Imagem para telas maiores ou iguais a mobileLarger */}
        <source
          media="(min-width: 768px)"
          srcSet="https://i.imgur.com/9YNK6sQ.jpg"
        />
        {/* Imagem padrão para navegadores que não suportam <picture> */}
        <img
          src="https://i.imgur.com/lkyaTPq.jpg"
          alt="instagram frame"
          className="w-[90vw] mx-auto"
        />
      </picture>
    </section>
  );
};

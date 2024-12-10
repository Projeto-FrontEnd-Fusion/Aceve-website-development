
type ImageSectionProps = {
  data: {
    title2: string;
    p2: string;
    title3: string;
    p3: string;
  };
}
const ValuesSection = ({data}: ImageSectionProps) => {
  return (
    <div className="w-full flex flex-col justify-between">
      <p className="mb-10 tablet:py-0 ">
        Fundada em 2014, na favela Morro da Mandioca, a Violeta Eliz é uma
        associação sem fins econômicos, com a finalidade principal de promover{" "}
        <span className="font-bold">
          ações de caráter educacional, cultural, de assistência social e de
          cidadania.
        </span>{" "}
        Entre suas atividades, destacam-se a
        <span className="font-bold">capacitação profissional gratuita</span> e a{" "}
        <span className="font-bold">
          integração de jovens e adultos ao mercado de trabalho.
        </span>
      </p>
      <div>
        <h2 className="hero-h-2">
          {data.title2}
        </h2>
        <p className="mb-10">{data.p2}</p>
      </div>
      <div>
        <h2 className="hero-h-2">
          {data.title3}
        </h2>
        <p>{data.p3}</p>
      </div>
    </div>
  );
};

export default ValuesSection;
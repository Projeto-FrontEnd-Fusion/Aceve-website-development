interface HeaderSectionProps {
  title: string;
  sub: string;
}
export const HeaderSection = ({ title, sub }: HeaderSectionProps) => {
  return (
    <header className="text-center font-montserrat">
      <h2
        className="text-[1.2rem] font-bold text-preto-bunker 
    desktop:text-[1.6rem]
    "
      >
        {title}
      </h2>
      <h3
        className="text-[.8rem] font-normal 
    desktop:text-[.9rem] px-6
    "
      >
        {sub}
      </h3>
    </header>
  );
};

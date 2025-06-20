interface HeaderSectionProps {
  title: string;
}
export const HeaderSection = ({ title }: HeaderSectionProps) => {
  return (
    <header className="text-center font-montserrat">
      <h2 className="max-mobileLarger:text-lg text-3xl font-bold text-[#54287B]">
        {title}
      </h2>
    </header>
  );
};

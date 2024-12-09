const Article = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <article
        className="grid grid-cols-1 gap-6
          tablet:grid-cols-6 tablet:gap-10 tablet:pb-20"
      >
        {children}
      </article>
    </>
  );
};

export default Article;
import React from "react";

const InfoSectionWhoWeAre = () => {
  return (
    <section className="px-5 py-10 text-gray-normal">
      <Article>
        <div>
          <Heading3>Área de atuação</Heading3>
          <p className="px-2 pt-4">
            Apoiamos mulheres vulnerabilizadas a alcançar autonomia econômica e
            desenvolver suas habilidades socioemocionais essenciais para mudar
            sua vulnerabilidade para que elas consiga ser uma empreendedora
            fortalecendo os vínculos familiares com amor. Atuamos com
            empreendedorismos, cultura, esporte e cursos profissionalizante.
          </p>
        </div>
        <div className="order-3 flex flex-col gap-4 pb-6">
          <Heading3>Desafios</Heading3>
          <p className="px-2">
            A desigualdade de gênero deixou marcas profundas em nossa alma. Com
            essas heranças históricas, temos consequências graves em nossas
            relações sociais. Elas são usadas como justificativa para a
            violência e reforçam a falta de políticas públicas eficazes para
            proteger as mulheres de seus algozes. Nossa maior necessidade é ter
            um espaço seguro onde as mulheres e meninas nas favelas se sintam
            protegidas, mesmo estando em território onde a violência atua.
          </p>
          <p className="px-2">
            Fazer com que os governantes entendam a realidade das pessoas que
            vivem em situações de vulnerabilidade e apoiar organizações que
            combatem os problemas provocados pelas desigualdades é fundamental
            para construirmos um país mais justo e solidário para todos.
          </p>
        </div>
        <img
          className="order-2 rounded-lg w-[90%] mx-auto"
          src="https://s3-alpha-sig.figma.com/img/6a54/3e61/7b31d1888aa77eb960ba0d4b49c249a4?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kbMnWXcyL6nD7qPADFUe73w7mBAKi8lN2hxzKfWBnk5b5Nhi7r5N1tHfQZA38px7pcCCQIwUNMgPwYJiPSePL1gPlJxJgbEZi4XoU~ZqVaLBOdmc~OTHFDEx7bCEfLL-CSsK5fBN1ZUiq5BdU-U2Mmny2LlK7BGk40I6Lbxt2OUPhq1AZ9m1bdxSIBRlrnbYrka5dzcx8rR0Zl83jAG1JD6tu-RxirFbEX9i6lAeb2Qdw03ySc-1vKwbcpeb~5etEp2ggydzrkTuyP70zOZfTTK1sT7O276EW9jWL~cbquLdf3i1VpHGgTI--d-mkJOdZeAoC3vbchc0Qahnr7-LgQ__"
          alt="Grupo de pessoas juntas sorrindo com skate em mãos"
        />
      </Article>
      <Article>
        <div className="flex flex-col gap-4 order-2">
          <Heading3>Território</Heading3>
          <p className="px-2">
            O Morro da Mandioca é uma favela localizada próximo à represa
            Billings, com aproximadamente 420 famílias. Nessa comunidade, há
            crianças com seus direitos violados, jovens entre 15 e 21 anos que
            trabalham direta ou indiretamente em pontos de venda de drogas
            (biqueiras), mães adolescentes e famílias que residem dentro da
            represa, em barracos insalubres, convivendo com ratos e esgotos. A
            favela está situada no extremo da zona sul de São Paulo e carece de
            saneamento básico.
          </p>
          <p className="px-2">
            De acordo com o IBGE, 5% dos domicílios do Morro da Mandioca e áreas
            adjacentes são considerados indigentes, seus moradores sobrevivem
            com ¼ de salário mínimo por pessoa e 20% estão em situação de
            vulnerabilidade social e pessoal, cuja renda per capita é de meio
            salário mínimo.
          </p>
        </div>
        <img
          className="order-1 rounded-lg w-[90%] mx-auto"
          src="https://s3-alpha-sig.figma.com/img/f5bc/3fd4/c2d654900cfc38ef62318f4ca45cabc5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F3WgsVGASSJ8ZYN7LRjLJY--t8ROVcwtSPp~-s42GZAgWRRfzEIHvP49dZ2cySfRlFbENi5~G3G0XClHwRc~UsdyIMjDUB6UTUVdDog7DrWCK0kcTtK22aUlx0Hv5C7U3Y95bEZVh~3Xz3uTqiJRPA~iv5d22of27kATtYvZBcGzsl3aH-QoFaWWwNWh5WxXanV~21wcJ-4sdpeX9LeOM3Fw8vkDrhcTUVj5rAwxqacOE7lO7LK2~ZAen4WFddXe-g0~MoiuW0gcauzi878BhKqUFjRvyrtzUW8XDH32Rz7YTBRgY51loS2ykU47-Bwr1AVSOpi1UD9xzvnlNDsrlw__"
          alt="Grupo de pessoas reunidas"
        />
      </Article>
    </section>
  );
};

const Article = ({ children }: { children: React.ReactNode }) => {
  return <article className="grid grid-cols-1 gap-6">{children}</article>;
};

const Heading3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="uppercase font-bold text-gray-dark text-center pt-6">
      {children}
    </h3>
  );
};

export default InfoSectionWhoWeAre;

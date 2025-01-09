export const FooterBanner = () => {
  return (
    <section className="relative z-0 flex flex-col items-center justify-center ">
      <div
        className="absolute z-50 text-[1.8rem] font-montserrat text-center bg-gradient-to-t from-[#15052A]
               to-[#4A2595]/10 h-full text-white-normal flex items-center px-4 desktop:w-full"
      >
        <h2 className="text-[.6rem] desktop:text-[2rem] desktop:px-[10%]">
          "Quando fortalecemos uma mulher, estamos dizendo a nós mesmas:{" "}
          <span className="font-bold text-[#EEAA45]">‘Eu tenho valor’</span> e
          rejeitando o silêncio do ciclo violento imposto pelo meu algoz."
        </h2>
      </div>
      <img src="https://i.imgur.com/0BP4OU1.jpg" alt="" />
    </section>
  );
};

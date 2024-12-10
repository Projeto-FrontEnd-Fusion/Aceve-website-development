import { Button } from "@/components/button/GlobalButton";
import clsx from "clsx";
import Link from "next/link";
import { FaBarcode, FaPaypal, FaPix } from "react-icons/fa6";

const sectionCollection = clsx("flex flex-col items-center py-8 gap-10");

const donationAndCollection = clsx(
  "flex flex-col items-center text-center gap-2 font-roboto"
);

const donationAndCollectionTittle = clsx(
  "text-xl text-[#222222] font-bold leading-[120%]"
);

const donationAndCollectionParagraph = clsx(
  "flex items-center font-normal leading-[150%]"
);

const methodsOfPayments = clsx("flex flex-col gap-6 items-center w-full");

const methodsOfPaymentsSubTittle = clsx("font-roboto font-bold text-[#222222]");

const methodsOfPaymentsList = clsx("flex gap-10");

const methodsOfPaymentsListOptions = clsx("flex items-center flex-col");

const methodsOfPaymentsListOptionsName = clsx("text-[#22222] font-roboto");

const receiveDonation = clsx(
  "bg-white-smooth flex flex-col w-[90%] px-2 py-3  rounded-lg relative gap-8 max-w-96 items-center"
);

const receiveDonationTitle = clsx(
  "font-bold text-[#222222] flex text-center font-roboto leading-[120%] text-lg mb-16"
);

const receiveDonationDate = clsx(
  "bg-purple-light w-[108%]  items-center  justify-center text-center absolute self-center rounded p-2 text-beige-normal top-20"
);

const receiveDonationBarProgress = clsx(
  "bgProgress ml-[5%] w-[80%] self-start py-1 rounded-lg relative"
);

const receiveDonationPercentProgress = clsx(
  "text-purple-light font-montserrat font-bold absolute right-[-40px] top-[-8px]"
);

const knowProjectAndDonate = clsx(
  "flex  w-full flex-col gap-8 items-center justify-center"
);

const linkKnowProject = clsx(
  "self-start  font-bold ml-2 text-purple-DaisyBush underline"
);

export function Collections() {
  return (
    <section className={sectionCollection}>
      <div className={donationAndCollection}>
        <h2 className={donationAndCollectionTittle}>Doações e arrecadações</h2>
        <p className={donationAndCollectionParagraph}>
          Doe esperança, plante o futuro: juntos podemos mais!
        </p>
      </div>
      <div className={methodsOfPayments}>
        <h4 className={methodsOfPaymentsSubTittle}>Métodos disponiveis:</h4>
        <ul className={methodsOfPaymentsList}>
          <li className={methodsOfPaymentsListOptions}>
            <FaPaypal size={40} />
            <span className={methodsOfPaymentsListOptionsName}>Paypal</span>
          </li>
          <li className={methodsOfPaymentsListOptions}>
            <FaBarcode size={40} />
            <span className={methodsOfPaymentsListOptionsName}>Boleto</span>
          </li>
          <li className={methodsOfPaymentsListOptions}>
            <FaPix size={40} />
            <span className={methodsOfPaymentsListOptionsName}>Pix</span>
          </li>
        </ul>
      </div>

      {/* Esses dados virão da API */}
      <div className={receiveDonation}>
        <h2 className={receiveDonationTitle}>
          Atendimento às mulheres vítimas de violência doméstica
        </h2>

        <span className={receiveDonationDate}>
          De 00/00/0000 Até 00/00/0000
        </span>

        <div className="w-full  py-20 bg-gray-500 rounded-lg" />

        <div className={receiveDonationBarProgress}>
          <span className={receiveDonationPercentProgress}>91%</span>
        </div>

        <div className={knowProjectAndDonate}>
          <Link className={linkKnowProject} href="/">
            Conheça o projeto
          </Link>
          <Button
            children="Doar"
            Background="purple"
            fontColor="white"
            size="small"
          />
        </div>
      </div>
    </section>
  );
}

import clsx from "clsx";
import { useState } from "react";
import { FaPaypal, FaPix } from "react-icons/fa6";
import { ModalPix } from "./ModalPix";

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

const methodsOfPaymentsListOptions = clsx("flex items-center justify-center flex-col group hover:fill-purple-light transition-colors duration-300");

const methodsOfPaymentsListOptionsName = clsx("text-[#22222] font-roboto self-center");

const methodsOfPaymentsListOptionsIcon = clsx("transition-colors duration-300 group-hover:fill-purple-light")

const buttonOpenPixModal = clsx("flex flex-col cursor-pointer")

// const receiveDonation = clsx(
//   "bg-white-smooth flex flex-col w-[90%] px-2 py-3  rounded-lg relative gap-8 max-w-96 items-center"
// );

// const receiveDonationTitle = clsx(
//   "font-bold text-[#222222] flex text-center font-roboto leading-[120%] text-lg mb-16"
// );

// const receiveDonationDate = clsx(
//   "bg-purple-light w-[108%]  items-center  justify-center text-center absolute self-center rounded p-2 text-beige-normal top-20"
// );

// const receiveDonationBarProgress = clsx(
//   "bgProgress ml-[5%] w-[80%] self-start py-1 rounded-lg relative"
// );

// const receiveDonationPercentProgress = clsx(
//   "text-purple-light font-montserrat font-bold absolute right-[-40px] top-[-8px]"
// );

// const knowProjectAndDonate = clsx(
//   "flex  w-full flex-col gap-8 items-center justify-center"
// );

// const linkKnowProject = clsx(
//   "self-start  font-bold ml-2 text-purple-DaisyBush underline"
// );


export function Collections() {
  const [modal, setModal] = useState(false)
  return (
    <section className={sectionCollection}>
      {modal &&
        (<ModalPix closeModal={() => setModal(false)} />)
      }
      <div className={donationAndCollection}>
        <h2 className={donationAndCollectionTittle}>Doações e arrecadações</h2>
        <p className={donationAndCollectionParagraph}>
          Doe esperança, plante o futuro: juntos podemos mais!
        </p>
      </div>
      <div className={methodsOfPayments}>
        <h3 className={methodsOfPaymentsSubTittle}>Métodos disponiveis:</h3>
        <ul className={methodsOfPaymentsList}>
          <li className={methodsOfPaymentsListOptions}>
            <a
              href="https://www.paypal.com/fundraiser/charity/3960801"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              aria-label="Doar via Paypal"
            >
              <FaPaypal size={40} className={methodsOfPaymentsListOptionsIcon} />
              <span className={methodsOfPaymentsListOptionsName}>Paypal</span>
            </a>
          </li>
          <li className={methodsOfPaymentsListOptions}>
            <button
              type='button'
              className={buttonOpenPixModal}
              onClick={() => setModal(true)}
              aria-label="Abrir modal com QR Code e chave Pix para doações">
              <FaPix size={40} className={methodsOfPaymentsListOptionsIcon} />
              <span className={methodsOfPaymentsListOptionsName}>Pix</span>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

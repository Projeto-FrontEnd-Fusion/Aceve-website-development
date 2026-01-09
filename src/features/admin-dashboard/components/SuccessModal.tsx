import { GlobalLink } from "@/components/GlobalLink/GlobalLink";
import { ModalBase } from "./ModalBase";
import { GlobalButton } from "@/components/GlobalButton/GlobalButton";
import { FaCheck } from "react-icons/fa";

interface SucessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SucessModalProps) {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-6 justify-between items-center">
        <div className="w-[40px] h-[40px] rounded-full border-4 border-primary-800 flex items-center justify-center">
          <FaCheck className="text-primary-800 w-[20px] h-[20px]" />
        </div>

        <div className="flex flex-col gap-2.5 text-center">
          <h2 className="font-inter font-semibold text-xl sm:text-2xl text-grey-800">
            Dados salvos com sucesso!
          </h2>

          <p className="font-inter text-grey-700 text-sm sm:text-base">
            As informações foram registradas com sucesso. Você pode voltar ao
            início ou adicionar um novo registro.
          </p>
        </div>

        <div className="flex flex-row gap-4 justify-center">
          <GlobalLink
            variant="outlined-primary-700"
            href="https://violetaeliz.org.br"
            className="w-[150px] sm:w-[173px] h-[52px] sm:h-[60px]"
          >
            Ir para eventos
          </GlobalLink>

          <GlobalButton
            variant="primary"
            onClick={onClose}
            className="w-[150px] sm:w-[173px] h-[52px] sm:h-[60px]"
          >
            Novo registro
          </GlobalButton>
        </div>
      </div>
    </ModalBase>
  );
}

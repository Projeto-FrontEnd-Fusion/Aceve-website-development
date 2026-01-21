import { GlobalButton } from "@/components/GlobalButton/GlobalButton";
import { ModalBase } from "@/components/ModalBase/ModalBase";
import {
  formatInitialValue,
  parseAndFormatCurrency,
} from "@/utils/parseAndFormatCurrency";
import { HiCurrencyDollar, HiUserGroup } from "react-icons/hi";

interface PanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  total: number;
  beneficiaries: number;
  report: string;
}

export function PanelModal({
  isOpen,
  onClose,
  title,
  total,
  beneficiaries,
  report,
}: PanelModalProps) {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <div className="w-full bg-white rounded-xl p-2 space-y-2">
        <div className="text-center space-y-2">
          <h2 className="text-lg sm:text-2xl font-bold text-grey-900">
            Painel da transparância
          </h2>
          <p className="text-sm sm:text-base text-grey-700">
            Aqui você acompanha o que realizamos com o apoio e o amor de todos
            que transformam junto com o Violeta Eliz.
          </p>
        </div>

        {/* Card roxo */}
        <div className="bg-primary-200 rounded-lg p-3 space-y-3 sm:p-4 sm:space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-end gap-1.5 text-grey-900">
              <HiCurrencyDollar className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
              <span className="font-semibold text-grey-900">
                Total arrecadado:
              </span>
            </div>
            <strong className="text-primary-600 text-lg">
              {formatInitialValue(total)}
            </strong>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-end gap-1.5 text-grey-900">
              <HiUserGroup className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />

              <span className="font-semibold text-grey-900">
                Pessoas beneficiadas:
              </span>
            </div>
            <strong className="text-primary-600 text-lg">
              {beneficiaries}
            </strong>
          </div>
        </div>
        {/* Card roxo */}
        <div className="bg-grey-100/25 border rounded-lg p-4 sm:p-6 space-y-2">
          <h3 className="font-bold text-grey-800">Relato da ação</h3>
          <p className="text-grey-700 leading-relaxed">{report}</p>
        </div>
        <div className="flex justify-center gap-4 pt-2">
          <GlobalButton
            variant="outlined-primary-700"
            className="w-[140px] sm:w-[160px] h-[44px] sm:h-[52px] rounded-[8px] border-2 px-4 py-2 sm:py-3 text-sm font-semibold"
          >
            Voltar
          </GlobalButton>

          <GlobalButton
            variant="primary"
            type="button"
            className="w-[140px] sm:w-[160px] h-[44px] sm:h-[52px] rounded-[8px] border-2 px-4 py-2 sm:py-3 text-sm font-semibold"
          >
            Doar
          </GlobalButton>
        </div>
      </div>
    </ModalBase>
  );
}

import { GlobalButton } from "@/components/GlobalButton/GlobalButton";
import { ModalBase } from "@/components/ModalBase/ModalBase";
import {
  formatInitialValue,
  parseAndFormatCurrency,
} from "@/utils/parseAndFormatCurrency";

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
      <div className="max-w-[640px] w-full bg-white rounded-xl p-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-grey-900">
            Painel da transparância
          </h2>
          <p className="text-grey-700">
            Aqui você acompanha o que realizamos com o apoio e o amor de todos
            que transformam junto com o Violeta Eliz.
          </p>
        </div>
      </div>
      {/* Card roxo */}
      <div className="bg-primary-200 rounded-lg p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-grey-900">Total arrecadado:</span>
          <strong className="text-primary-600 text-lg">
            {formatInitialValue(total)}
          </strong>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-grey-900">
            Pessoas beneficiadas:
          </span>
          <strong className="text-primary-600 text-lg">{beneficiaries}</strong>
        </div>
      </div>
      {/* Card roxo */}
      <div className="bg-grey-100/25 border rounded-lg p-6 space-y-2">
        <h3 className="font-bold text-grey-800">Relato da ação</h3>
        <p className="text-grey-700 leading-relaxed">{report}</p>
      </div>
      <div className="flex justify-center gap-4 pt-4">
        <GlobalButton
          variant="outlined-primary-700"
          className="w-[173px] h-[60px] rounded-[8px] border-2 pt-4 pb-4 pr-5 pl-5 text-sm font-semibold"
        >
          Voltar
        </GlobalButton>

        <GlobalButton
          variant="primary"
          type="button"
          className="w-[173px] h-[60px] rounded-[8px] border-2 pt-4 pb-4 pr-5 pl-5 text-sm font-semibold"
        >
          Doar
        </GlobalButton>
      </div>
    </ModalBase>
  );
}

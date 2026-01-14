import { ModalBase } from "@/components/ModalBase/ModalBase";

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
      <div>
        <h2>Painel da transparância</h2>
      </div>
    </ModalBase>
  );
}

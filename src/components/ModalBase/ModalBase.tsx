import { FiX } from "react-icons/fi";

interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function ModalBase({ isOpen, onClose, children }: ModalBaseProps) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center bg-black/50 sm:items-center pt-10"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] sm:w-[570px] bg-primary-100 rounded-sm px-7 py-4 flex flex-col h-fit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className="text-grey-700 transition-colors duration-300 hover:text-primary-700"
          >
            <FiX className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

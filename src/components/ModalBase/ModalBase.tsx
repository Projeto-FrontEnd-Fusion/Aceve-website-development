interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function ModalBase({ isOpen, onClose, children }: ModalBaseProps) {
  if (!isOpen) return null;
  return (
    <dialog
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[520px] bg-primary-100 rounded-lg px-6 py-6 sm:px-8 sm:py-8"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </dialog>
  );
}

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
        className="relative max-w-[480px] bg-primary-100 rounded-sm px-4 py-4 sm:px-8 sm:py-2 flex flex-col h-fit"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

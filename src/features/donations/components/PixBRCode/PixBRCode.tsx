import { FaCheckCircle } from "react-icons/fa";

export const PixBRCode = ({
  brCode,
  copied,
  onCopy,
}: {
  brCode: string | null;
  copied: boolean;
  onCopy: () => void;
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 mt-2 w-full">
      <input
        type="text"
        readOnly
        value={brCode || ""}
        className="w-full sm:w-[calc(100%-165px)] px-4 py-3 rounded-lg border-2 border-primary-500 bg-white text-zinc-700 text-sm outline-none"
      />

      <button
        onClick={onCopy}
        className={`w-full sm:w-[157px] px-5 py-3 border-2 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap flex items-center justify-center gap-2
          ${copied
            ? "bg-primary-600 text-grey-100 border-primary-600 hover:bg-primary-800"
            : "text-primary-600 border-primary-600 hover:bg-primary-600 hover:text-grey-100"
          }`}
      >
        {copied ? (
          <>
            <span className="text-grey-100">Copiado</span>
            <FaCheckCircle size={16} className="text-grey-100" />
          </>
        ) : (
          "Copiar link"
        )}
      </button>
    </div>
  );
}

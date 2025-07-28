import { GlobalButton } from "@/components/GlobalButton/GlobalButton";
import { FaCheckCircle } from "react-icons/fa";

interface PixBRCodeProps {
  brCode: string | null;
  copied: boolean;
  onCopy: () => void;
}

export const PixBRCode = ({ brCode, copied, onCopy }: PixBRCodeProps) => {
  const buttonVariant = copied ? 'primary' : 'outlined-primary-600'

  return (
    <div className="flex flex-col sm:flex-row gap-2 mt-2 w-full">
      <input
        type="text"
        readOnly
        value={brCode || ""}
        className="w-full sm:w-[calc(100%-165px)] px-4 py-3 rounded-lg border-2 border-primary-500 bg-white text-zinc-700 text-sm outline-none"
      />

      <GlobalButton
        onClick={onCopy}
        className='
          w-full sm:w-[157px] 
          px-5 py-3 font-semibold text-sm 
          whitespace-nowrap gap-2'
        variant={buttonVariant}
      >
        {copied ? (
          <>
            <span className="text-grey-100">Copiado</span>
            <FaCheckCircle size={16} className="text-grey-100" />
          </>
        ) : (
          "Copiar link"
        )}
      </GlobalButton>
    </div>
  );
}

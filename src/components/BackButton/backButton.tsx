"use client";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex w-fit items-center p-2 gap-4 font-semibold text-[0.75rem] tablet:text-[1.25rem] text-[#A5A1A8] rounded-[8px] hover:bg-[#F5F3F6] active:bg-[#CCC] focus:outline-[#CBCBCB] tablet:px-5 tablet:py-4 transition mb-0"
    >
      <span className="text-[0.75rem] tablet:text-[1.25rem]">&lt;</span>
      Voltar
    </button>
  );
};

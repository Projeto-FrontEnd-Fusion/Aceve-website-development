"use client";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-[#A5A1A8] text-lg font-semibold rounded-[8px] hover:bg-[#C1C2C7] active:bg-[#D3D4D9] px-5 py-4 transition mb-0"
    >
      <span className="text-lg">&lt;</span>
      Voltar
    </button>
  );
};

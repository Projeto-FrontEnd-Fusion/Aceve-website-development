"use client"
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center w-full left-6 py-6 
        tablet:rounded-[16px] tablet:py-[16px] tablet:px-[32px] desktop:py-[24px] 
        tablet:w-[85%] ">

      <div className="flex w-full absolute top-0 left-4 text-[#A5A1A8] text-xl font-semibold font-inter transition">
        <button className="flex justify-between items-center gap-4 hover:cursor-pointer" onClick={() => router.back()}>
          <span>&lt;</span>
          Voltar
        </button>
      </div>
    </div>
  )
}
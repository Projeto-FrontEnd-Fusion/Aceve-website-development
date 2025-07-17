"use client"
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center w-full pt-8 
        tablet:rounded-[16px] tablet:py-[16px] tablet:px-[32px] desktop:py-[24px] 
        tablet:w-[85%] ">

      <button className="absolute top-0 left-0 text-[#A5A1A8] text-xl font-semibold font-inter transition" onClick={() => router.back()}>
        &lt;    Voltar
      </button>
    </div>
  )
}
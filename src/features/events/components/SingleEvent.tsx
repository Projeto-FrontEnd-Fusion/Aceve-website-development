import { GlobalButton } from "@/components/GlobalButton/GlobalButton";
import { SingleCard } from "./SingleCard";

export function SingleEvent({ title }: { title: string }) {
  return (
    <article>
      <h2 className="text-md font-semibold">{title}</h2>

      <div
        className="mt-4 grid gap-4 grid-cols-5"
        aria-label={`Fotos do evento ${title}`}
      >
        <SingleCard
          imageSrc="/"
          imageAlt="Foto do evento"
          description="Descrição da foto."
        />
        <SingleCard
          imageSrc="/"
          imageAlt="Foto do evento"
          description="Descrição da foto."
        />
        <SingleCard
          imageSrc="/"
          imageAlt="Foto do evento"
          description="Descrição da foto."
        />
        <SingleCard
          imageSrc="/"
          imageAlt="Foto do evento"
          description="Descrição da foto."
        />
        <SingleCard
          imageSrc="/"
          imageAlt="Foto do evento"
          description="Descrição da foto."
        />
      </div>

      <div className="mt-6 flex justify-center">
        <GlobalButton variant={"text"}
          className="items-center justify-center rounded-md bg-violet-600 px-4 py-2 font-semibold text-white"
        >
          Painel da Transparência
        </GlobalButton>
      </div>
    </article>
  )
}

import { NavigationLink } from "@/components/Menu/NavigationLink";

export default function EventFormHeader() {
  return (
    <header className="mb-8">

      <NavigationLink
        variant="text"
        href="/"
        className="inline-flex sm:text-sm laptop:text-xl bg-transparent
        hover:bg-purple-200 text-purple-700 p-3 rounded-md"
      >
        ◀ Início
      </NavigationLink>

      <h1 className="text-grey-800 font-semibold text-2xl">
        Registre seu evento
      </h1>
      <p className="text-sm text-black mt-1">
        Preencha os detalhes para registrar este evento com sucesso.
      </p>
    </header>
  );
}

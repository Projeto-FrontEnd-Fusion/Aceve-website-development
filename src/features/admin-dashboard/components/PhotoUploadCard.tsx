export function PhotUploadCard() {
  return (
    <div className="relative bg-white border border-neutral-200 rounded-md p-3 flex flex-col gap-3 shadow-sm">
      <button className="absolute top-2 right-2 text-xs text-neutral-400">
        X
      </button>
      <div className="w-full aspect-square bg-purple-200 rounded-sm">
        <input
          type="text"
          placeholder="Digite uma legenda opcional... "
          className="text-xs text-neutral-700 border-none border-b border-neutral-300 focus:outline-none focus:border-neutral-500 bg-tranparent pt-2"
        />
      </div>
    </div>
  );
}

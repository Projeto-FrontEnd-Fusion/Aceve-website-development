export function PhotUploadCard() {
  return (
    <div className="relative bg-white border border-neutral-200 rounded-sm p-4 flex flex-col gap-3 shadow-md">
      <button className="absolute top-2 right-2 text-sm text-neutral-700">
        X
      </button>
      <div className="w-full aspect-square bg-primary-300 rounded-sm" />
      <input
        type="text"
        placeholder="Digite uma legenda opcional..."
        className="text-sm text-grey-600 border-none focus:outline-none bg-transparent"
      />
    </div>
  );
}

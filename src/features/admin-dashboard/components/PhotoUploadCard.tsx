import Image from "next/image";

type EventPhoto = {
  file: File;
  previewUrl: string;
  caption: string;
};

type PhotoUploadCardProps = {
  photo?: EventPhoto;
  onRemove: () => void;
  onCaptionChange: (value: string) => void;
};

export function PhotoUploadCard({
  photo,
  onRemove,
  onCaptionChange,
}: PhotoUploadCardProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-sm p-4 flex flex-col gap-3 shadow-md">
    {photo && (
      <button
        type="button"
        onClick={onRemove}
        className="absolute self-end z-50 text-sm font-extrabold text-neutral-700"
      >
        X
      </button>
    )}

    <div className="relative w-full aspect-square bg-primary-300 rounded-sm overflow-hidden">
      {photo && (
        <Image
          src={photo.previewUrl}
          alt="Foto do evento"
          fill
          className="object-cover"
        />
      )}
    </div>

    <input
      type="text"
      placeholder="Digite uma legenda opcional..."
      value={photo?.caption ?? ""}
      onChange={(e) => onCaptionChange(e.target.value)}
      disabled={!photo}
      className="text-sm text-grey-600 border-none focus:outline-none bg-transparent disabled:opacity-50"
    />
  </div>

  );
}


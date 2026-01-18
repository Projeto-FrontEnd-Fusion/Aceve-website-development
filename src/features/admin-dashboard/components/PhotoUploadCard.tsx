import Image from "next/image";

type UploadedEventPhoto = {
  file: File;
  previewUrl: string;
  caption: string;
};

type ApiEventPhoto = {
  url: string;
  caption?: string;
};

type PhotoUploadCardProps = {
  photo?: UploadedEventPhoto | ApiEventPhoto;
  onRemove?: () => void;
  onCaptionChange?: (value: string) => void;
  readOnly?: boolean;
};

export function PhotoUploadCard({
  photo,
  onRemove,
  onCaptionChange,
  readOnly = false,
}: PhotoUploadCardProps) {
  const imageUrl = photo
    ? "previewUrl" in photo
      ? photo.previewUrl
      : photo.url
    : "";
  const showRemove = Boolean(photo && onRemove && !readOnly);
  const allowCaptionEdit = Boolean(photo && onCaptionChange && !readOnly);

  return (
    <div className="bg-white border border-neutral-200 rounded-sm p-5 flex flex-col flex-1 max-w-80 gap-3 shadow-md">
      {showRemove && (
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
            src={imageUrl}
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
        onChange={(e) => onCaptionChange?.(e.target.value)}
        disabled={!allowCaptionEdit}
        className="text-sm text-grey-600 border-none focus:outline-none bg-transparent disabled:opacity-50"
      />
    </div>
  );
}

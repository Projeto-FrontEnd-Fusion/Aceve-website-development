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
  onImageClick?: (imageUrl: string, alt: string) => void;
  readOnly?: boolean;
};

export function PhotoUploadCard({
  photo,
  onRemove,
  onCaptionChange,
  onImageClick,
  readOnly = false,
}: PhotoUploadCardProps) {
  const imageUrl = photo
    ? "previewUrl" in photo
      ? photo.previewUrl
      : photo.url
    : "";
  const imageAlt = photo?.caption ? photo.caption : "Foto do evento";
  const showRemove = Boolean(photo && onRemove && !readOnly);
  const allowCaptionEdit = Boolean(photo && onCaptionChange && !readOnly);
  const isClickable = Boolean(onImageClick && imageUrl);
  const captionPlaceholder = allowCaptionEdit
    ? "Digite uma legenda opcional..."
    : undefined;

  return (
    <div className="bg-white border border-neutral-200 rounded-sm p-5 flex flex-col flex-1 max-w-80 gap-3 shadow-md">
      {showRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="absolute self-end text-sm font-extrabold text-neutral-700 -mr-3 -mt-5 hover:text-red-600"
        >
          X
        </button>
      )}

      {isClickable ? (
        <button
          type="button"
          onClick={() => onImageClick?.(imageUrl, imageAlt)}
          className="relative w-full aspect-square bg-primary-300 rounded-sm overflow-hidden"
          aria-label="Ampliar foto do evento"
        >
          {photo && (
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          )}
        </button>
      ) : (
        <div className="relative w-full aspect-square bg-primary-300 rounded-sm overflow-hidden">
        {photo && (
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        )}
      </div>
      )}

      <input
        type="text"
        placeholder={captionPlaceholder}
        value={photo?.caption ?? ""}
        onChange={(e) => onCaptionChange?.(e.target.value)}
        disabled={!allowCaptionEdit}
        className={`text-sm border-none focus:outline-none bg-transparent 
        ${photo?.caption ? "text-black" : "text-grey-600"}`}
      />
    </div>
  );
}

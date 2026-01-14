"use client";

interface SingleCardProps {
  imageSrc: string;
  imageAlt: string;
  description: string;
  onImageClick: (imageSrc: string, imageAlt: string) => void;
}

export function SingleCard({
  imageSrc,
  imageAlt,
  description,
  onImageClick,
}: SingleCardProps) {
  return (
    <div className="overflow-hidden rounded-md border border-neutral-200 bg-white shadow-sm">
      <button
        type="button"
        className="w-full text-left"
        onClick={() => onImageClick(imageSrc, imageAlt)}
      >
        <div className="relative aspect-[4/3] w-full">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover"
            loading="lazy"
          />
        </div>

        <p className="p-2 text-[11px] leading-snug text-neutral-700">
          {description}
        </p>
      </button>
    </div>
  );
}

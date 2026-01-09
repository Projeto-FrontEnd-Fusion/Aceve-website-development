export function SingleCard({
  imageSrc,
  imageAlt,
  description,
}:{
    imageSrc: string;
    imageAlt: string;
    description: string;
  }){
    return (
      <div className="overflow-hidden rounded-md border border-neutral-200 bg-white shadow-sm">
        <button
          type="button"
          className="w-full text-left"
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
  )
}

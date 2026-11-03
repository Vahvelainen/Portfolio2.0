import { ZoomImage } from "./ZoomImage";

type GalleryProps = {
  images: { src: string; alt: string }[];
};

export function Gallery({ images }: GalleryProps) {
  const columns = images.length === 1 ? "columns-1 max-w-sm" : "columns-2 sm:columns-3";

  return (
    <div className={`my-8 gap-3 ${columns}`}>
      {images.map((image) => (
        <ZoomImage
          key={image.src}
          src={image.src}
          alt={image.alt}
          className="mb-3 block w-full break-inside-avoid overflow-hidden"
          imageClassName="w-full transition-transform duration-300 hover:scale-[1.03]"
        />
      ))}
    </div>
  );
}

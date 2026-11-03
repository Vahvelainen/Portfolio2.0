type ZoomImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export function ZoomImage({ src, alt, className = "", imageClassName = "" }: ZoomImageProps) {
  return (
    <button
      type="button"
      data-zoom={src}
      data-alt={alt}
      aria-label={alt ? `Enlarge: ${alt}` : "Enlarge image"}
      className={`cursor-zoom-in p-0 ${className}`}
    >
      <img src={src} alt={alt} loading="lazy" className={`block ${imageClassName}`} />
    </button>
  );
}

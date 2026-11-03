import { useEffect, useRef } from "react";

type WorkMediaProps = {
  src: string;
  alt: string;
  className?: string;
};

const IMAGE_TYPES = ["jpg", "jpeg", "png", "webp", "gif"];

export function mediaKind(src: string) {
  const extension = src.slice(src.lastIndexOf(".") + 1).toLowerCase();
  if (IMAGE_TYPES.includes(extension)) return "image";
  if (extension === "mp4") return "video";
  return "embed";
}

export function WorkMedia({ src, alt, className = "" }: WorkMediaProps) {
  const kind = mediaKind(src);
  if (kind === "image") return <img src={src} alt={alt} className={className} loading="lazy" />;
  if (kind === "video") return <LoopVideo src={src} label={alt} className={className} />;
  return <embed src={src} title={alt} className={className} />;
}

function LoopVideo({ src, label, className }: { src: string; label: string; className: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // Prerendered HTML lacks the muted attribute, which browsers require for autoplay.
    video.muted = true;
    Promise.resolve(video.play()).catch(() => undefined);
  }, []);

  return (
    <video ref={ref} autoPlay muted loop playsInline aria-label={label} className={className}>
      <source src={src} type="video/mp4" />
    </video>
  );
}

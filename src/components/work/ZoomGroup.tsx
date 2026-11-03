import { type MouseEvent, type ReactNode, useState } from "react";
import Lightbox, { type SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Gallery = { slides: SlideImage[]; index: number };

/** Opens any `ZoomImage` inside it in a lightbox, paging through its siblings in page order. */
export function ZoomGroup({ children, className }: { children: ReactNode; className?: string }) {
  const [gallery, setGallery] = useState<Gallery | null>(null);

  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = (event.target as HTMLElement).closest<HTMLElement>("[data-zoom]");
    if (!target) return;
    const items = [...event.currentTarget.querySelectorAll<HTMLElement>("[data-zoom]")];
    setGallery({
      slides: items.map((item) => ({ src: item.dataset.zoom!, alt: item.dataset.alt })),
      index: items.indexOf(target),
    });
  };

  return (
    <div className={className} onClick={onClick}>
      {children}
      <Lightbox
        open={gallery !== null}
        close={() => setGallery(null)}
        slides={gallery?.slides}
        index={gallery?.index}
      />
    </div>
  );
}

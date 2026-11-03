import type { ReactNode } from "react";
import { Link } from "react-router";
import { ZoomGroup } from "./ZoomGroup";
import { ZoomImage } from "./ZoomImage";

type WorkArticleProps = {
  cover: { src: string; alt: string };
  children: ReactNode;
};

export function WorkArticle({ cover, children }: WorkArticleProps) {
  return (
    <ZoomGroup className="bg-cream pb-24">
      <ZoomImage
        src={cover.src}
        alt={cover.alt}
        className="mb-16 block w-full"
        imageClassName="max-h-[40vh] w-full object-cover"
      />
      <article className="mx-auto prose-work max-w-text px-4">
        {children}
        <Link to="/work" className="mt-16 block">
          Return to other works
        </Link>
      </article>
    </ZoomGroup>
  );
}

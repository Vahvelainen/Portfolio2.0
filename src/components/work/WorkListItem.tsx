import { Link } from "react-router";
import type { Work } from "@/content/types";
import { workCredit, workPagePath } from "@/content/works";
import { mediaKind, WorkMedia } from "./WorkMedia";
import { ZoomImage } from "./ZoomImage";

const MEDIA_CLASS = "h-auto w-full object-cover md:h-[30em] md:w-auto md:max-w-[60vw]";

export function WorkListItem({ work }: { work: Work }) {
  const alt = `Picture of ${work.title} by Leevi Vahvelainen for ${workCredit(work)}`;
  const pagePath = workPagePath(work);

  return (
    <article
      id={work.slug}
      className="mb-24 flex scroll-mt-8 flex-col gap-8 md:mb-32 md:flex-row md:items-center md:gap-16"
    >
      {mediaKind(work.media) === "image" ? (
        <ZoomImage src={work.media} alt={alt} imageClassName={MEDIA_CLASS} />
      ) : (
        <WorkMedia src={work.media} alt={alt} className={MEDIA_CLASS} />
      )}
      <div className="max-w-[26rem] px-4 md:px-0">
        <h2 className="mb-4 text-2xl">{work.title}</h2>
        {work.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="mb-3 text-ink-2 last:text-ink-3">
            {paragraph}
          </p>
        ))}
        {pagePath && (
          <Link to={pagePath} className="mt-2 inline-block font-medium">
            Read more
          </Link>
        )}
      </div>
    </article>
  );
}

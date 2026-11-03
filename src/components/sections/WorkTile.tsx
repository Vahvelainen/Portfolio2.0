import { Link } from "react-router";
import { WorkMedia } from "@/components/work/WorkMedia";
import type { Work } from "@/content/types";
import { workAnchor, workCredit } from "@/content/works";

type WorkTileProps = {
  work: Work;
  focused: boolean;
};

export function WorkTile({ work, focused }: WorkTileProps) {
  const reveal = focused ? "is-focused" : "";

  return (
    <article className={`group relative aspect-square overflow-hidden ${reveal}`}>
      <Link to={workAnchor(work)} className="block h-full text-white no-underline hover:text-white">
        <WorkMedia
          src={work.media}
          alt={`Picture of ${work.title} by Leevi Vahvelainen for ${workCredit(work)}`}
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-[.is-focused]:scale-110 md:group-hover:scale-110 md:group-focus-visible:scale-110"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 p-6 text-center opacity-0 transition-opacity duration-200 group-[.is-focused]:opacity-100 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
          <h3 className="mb-2 text-lg md:text-xl">{work.title}</h3>
          <p className="mb-2 hidden text-white/85 md:block">{work.paragraphs[0]}</p>
          <p className="text-sm text-white/70">{workCredit(work)}</p>
        </div>
      </Link>
    </article>
  );
}

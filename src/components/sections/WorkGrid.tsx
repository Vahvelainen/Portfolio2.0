import { useRef } from "react";
import { visibleWorks } from "@/content/works";
import { useScrollFocus } from "@/hooks/useScrollFocus";
import { WorkTile } from "./WorkTile";

export function WorkGrid() {
  const grid = useRef<HTMLDivElement>(null);
  const focused = useScrollFocus(grid);

  return (
    <section aria-label="Work">
      <div ref={grid} className="grid grid-cols-2 md:grid-cols-3">
        {visibleWorks.map((work, index) => (
          <WorkTile key={work.slug} work={work} focused={focused === index} />
        ))}
      </div>
    </section>
  );
}

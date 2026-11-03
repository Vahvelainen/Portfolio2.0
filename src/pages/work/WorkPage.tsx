import { WorkListItem } from "@/components/work/WorkListItem";
import { ZoomGroup } from "@/components/work/ZoomGroup";
import { visibleWorks } from "@/content/works";

export function WorkPage() {
  return (
    <ZoomGroup className="flex flex-col items-center bg-mist pt-0 md:px-8 md:pt-40">
      {visibleWorks.map((work) => (
        <WorkListItem key={work.slug} work={work} />
      ))}
    </ZoomGroup>
  );
}

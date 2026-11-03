import { Section } from "@/components/layout/Section";
import { history, historyIntro } from "@/content/history";
import type { HistoryEntry } from "@/content/types";

export function HistorySection() {
  return (
    <Section innerClassName="flex flex-col items-center pt-20 pb-24">
      <div className="mb-20 text-center">
        <h2 className="section-title">History</h2>
        <p className="text-ink-3">{historyIntro}</p>
      </div>
      {history.map((entry) => (
        <HistoryItem key={entry.title} entry={entry} />
      ))}
    </Section>
  );
}

function HistoryItem({ entry }: { entry: HistoryEntry }) {
  return (
    <article className="mb-14 w-full max-w-[42.5rem] border-t border-hairline pt-6">
      <p className="mb-1 eyebrow">{entry.years}</p>
      <h3 className="mb-3 text-xl">{entry.title}</h3>
      {entry.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 32)} className="mb-3 text-ink-2">
          {paragraph}
        </p>
      ))}
    </article>
  );
}

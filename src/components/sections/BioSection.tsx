import portrait from "@/assets/bio.jpg";
import { Section } from "@/components/layout/Section";
import { bio, profile } from "@/content/profile";

export function BioSection() {
  return (
    <Section
      className="bg-stone"
      innerClassName="flex flex-col items-start gap-8 py-16 sm:flex-row sm:items-center sm:justify-center sm:gap-16 sm:py-32"
    >
      <img
        src={portrait}
        alt={profile.portraitAlt}
        className="h-32 w-32 rounded-full object-cover sm:h-auto sm:w-1/5 sm:min-w-40 sm:rounded-none sm:object-contain"
      />
      <div className="max-w-[30rem]">
        <h2 className="section-title mb-6">Bio</h2>
        {bio.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="mb-4 text-ink-2">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}

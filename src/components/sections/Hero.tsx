import heroImage from "@/assets/lio.png";
import { Section } from "@/components/layout/Section";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <Section className="relative overflow-hidden bg-mist" innerClassName="flex justify-around">
      <img
        src={heroImage}
        alt={profile.heroAlt}
        className="absolute bottom-0 left-0 max-h-[30em] self-end opacity-25 md:static md:opacity-100"
      />
      <div className="relative z-10 w-full max-w-md py-32 md:pt-56 md:pb-32">
        <h1 className="mb-4 text-xl text-ink-2">{profile.name}</h1>
        <p className="mb-6 text-4xl leading-tight font-semibold tracking-tight md:text-5xl">
          {profile.tagline}
        </p>
        <p className="text-ink-2">{profile.intro}</p>
      </div>
    </Section>
  );
}

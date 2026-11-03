import { DotWaves } from "@/components/placeholder/DotWaves";
import { SocialLinks } from "@/components/placeholder/SocialLinks";
import { profile } from "@/content/profile";

export function MaintenancePage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-fog px-4">
      <DotWaves />
      <div className="relative flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-3">
          <p className="eyebrow">{profile.name}</p>
          <h1 className="text-3xl text-ink md:text-4xl">A new site is cooking.</h1>
          <p className="text-ink-2">Under maintenance for now. Back soon.</p>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}

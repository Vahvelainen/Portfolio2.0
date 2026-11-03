import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="bg-sand px-4 py-10 text-center">
      <p className="mb-1">Thank you for visiting</p>
      <p className="text-ink-2">{profile.email}</p>
    </footer>
  );
}

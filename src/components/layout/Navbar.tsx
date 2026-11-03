import { NavLink } from "react-router";
import linkedIn from "@/assets/linkedin.svg";
import { profile } from "@/content/profile";

const LINKS = [
  { to: "/", label: "Dashboard" },
  { to: "/work", label: "Work" },
  { to: "/bio", label: "Bio" },
  { to: "/history", label: "History" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `py-2 text-night-ink decoration-2 hover:text-white ${isActive ? "underline" : "no-underline"}`;

export function Navbar() {
  return (
    <nav className="bg-night">
      <div className="mx-auto flex h-20 max-w-page items-center justify-between px-4 md:px-8">
        <div className="flex gap-4 sm:gap-8">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <a href={profile.linkedIn} aria-label="LinkedIn">
          <img src={linkedIn} alt="" className="h-8 w-8" />
        </a>
      </div>
    </nav>
  );
}

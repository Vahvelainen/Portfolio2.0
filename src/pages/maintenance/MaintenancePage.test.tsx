import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { profile } from "@/content/profile";
import { MaintenancePage } from "./MaintenancePage";

describe("MaintenancePage", () => {
  it("shows the message and links to LinkedIn and GitHub", () => {
    render(<MaintenancePage />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      profile.linkedIn,
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", profile.gitHub);
  });
});

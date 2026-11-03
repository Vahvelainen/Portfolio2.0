import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { visibleWorks, workAnchor, workPagePath, works } from "./works";

const PUBLIC = path.resolve(import.meta.dirname, "../../public");

describe("works", () => {
  it("shows works in portfolio order, without the hidden ones", () => {
    expect(visibleWorks.map((work) => work.slug)).toEqual([
      "ai-in-knowledge-work",
      "creativerse",
      "voiceyoga",
      "kutsu",
      "amapper",
      "menddie",
      "valmet",
      "course-collector",
      "dash-2018",
      "robot-rabbit",
      "water-purifier",
      "chest-of-drawers",
    ]);
  });

  it("has unique slugs", () => {
    const slugs = works.map((work) => work.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it.each(works)("$title media exists in public/", (work) => {
    expect(work.media.startsWith("/")).toBe(true);
    expect(existsSync(path.join(PUBLIC, work.media))).toBe(true);
  });

  it("links tiles to the work list and detail pages to their own URL", () => {
    const kutsu = works.find((work) => work.slug === "kutsu")!;
    const valmet = works.find((work) => work.slug === "valmet")!;
    expect(workAnchor(kutsu)).toBe("/work#kutsu");
    expect(workPagePath(kutsu)).toBe("/work/kutsu");
    expect(workPagePath(valmet)).toBeUndefined();
  });
});

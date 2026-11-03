import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { works } from "./content/works";
import routes from "./routes";

describe("routes", () => {
  it("routes every work that has a page", () => {
    const paths = routes.map((route) => route.path);
    for (const work of works.filter((w) => w.hasPage)) {
      expect(paths).toContain(`work/${work.slug}`);
    }
  });

  it("points every route at an existing module", () => {
    for (const route of routes) {
      expect(existsSync(path.resolve(import.meta.dirname, route.file))).toBe(true);
    }
  });
});

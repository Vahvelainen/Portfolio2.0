import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import routes from "./routes";

describe("routes", () => {
  it("points every route at an existing module", () => {
    for (const route of routes) {
      expect(existsSync(path.resolve(import.meta.dirname, route.file))).toBe(true);
    }
  });
});

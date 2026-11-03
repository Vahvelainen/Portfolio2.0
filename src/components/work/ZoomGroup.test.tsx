import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ZoomGroup } from "./ZoomGroup";
import { ZoomImage } from "./ZoomImage";

describe("ZoomGroup", () => {
  it("opens the clicked image in a lightbox", () => {
    render(
      <ZoomGroup>
        <ZoomImage src="/a.png" alt="First" />
        <ZoomImage src="/b.png" alt="Second" />
      </ZoomGroup>,
    );
    expect(screen.queryByRole("dialog")).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "Enlarge: Second" }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});

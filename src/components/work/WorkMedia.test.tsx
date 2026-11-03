import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { mediaKind, WorkMedia } from "./WorkMedia";

describe("WorkMedia", () => {
  it.each([
    ["/images/a.png", "image"],
    ["/images/a.JPG", "image"],
    ["/images/a.mp4", "video"],
    ["/docs/a.pdf", "embed"],
  ])("treats %s as %s", (src, kind) => {
    expect(mediaKind(src)).toBe(kind);
  });

  it("renders a muted looping video for mp4", () => {
    render(<WorkMedia src="/images/roborabbit.mp4" alt="Robot rabbit" />);
    const video = screen.getByLabelText("Robot rabbit") as HTMLVideoElement;
    expect(video.tagName).toBe("VIDEO");
    expect(video.muted).toBe(true);
    expect(video.loop).toBe(true);
  });
});

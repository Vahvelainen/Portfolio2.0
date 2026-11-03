import { render, screen } from "@testing-library/react";
import type { ComponentType } from "react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { history } from "@/content/history";
import { BioPage } from "./bio/BioPage";
import { HistoryPage } from "./history/HistoryPage";
import { HomePage } from "./home/HomePage";
import { AmapperPage } from "./work/amapper/AmapperPage";
import { CreativersePage } from "./work/creativerse/CreativersePage";
import { KutsuPage } from "./work/kutsu/KutsuPage";
import { MenddiePage } from "./work/menddie/MenddiePage";
import { VoiceYogaPage } from "./work/voiceyoga/VoiceYogaPage";
import { WorkPage } from "./work/WorkPage";

function renderPage(Page: ComponentType) {
  return render(
    <MemoryRouter>
      <Page />
    </MemoryRouter>,
  );
}

describe("pages", () => {
  it("home shows the hero, work grid, bio and history", () => {
    renderPage(HomePage);
    expect(
      screen.getByRole("heading", { level: 1, name: "Leevi Vahvelainen" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Creativerse/ })).toHaveAttribute(
      "href",
      "/work#creativerse",
    );
    expect(screen.getByRole("heading", { name: "Bio" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "History" })).toBeInTheDocument();
  });

  it("history lists every entry", () => {
    renderPage(HistoryPage);
    expect(screen.getAllByRole("article")).toHaveLength(history.length);
  });

  it("bio renders on its own", () => {
    renderPage(BioPage);
    expect(screen.getByRole("heading", { name: "Bio" })).toBeInTheDocument();
  });

  it("work list links to detail pages", () => {
    renderPage(WorkPage);
    const links = screen.getAllByRole("link", { name: "Read more" });
    expect(links.map((link) => link.getAttribute("href"))).toContain("/work/menddie");
  });

  it.each([
    [AmapperPage, "aMapper"],
    [CreativersePage, "Creativerse"],
    [KutsuPage, "Kutsu.app"],
    [MenddiePage, "Menddie.com"],
    [VoiceYogaPage, "VoiceYoga"],
  ])("detail page %# shows %s and links back", (Page, title) => {
    renderPage(Page);
    expect(screen.getByRole("heading", { level: 1, name: title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Return to other works" })).toHaveAttribute(
      "href",
      "/work",
    );
  });
});

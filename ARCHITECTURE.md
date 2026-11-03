# Architecture

A Vite + React 19 site built with React Router in framework mode, `ssr: false`, and
prerendering. `yarn build` writes one HTML file per route to `build/client/`, plus
`404.html`. In the browser each page hydrates into a single-page app, so later navigation
is client-side.

## Code layout

```text
public/            static media served as-is (images/, favicon, og thumbnail)
src/
  root.tsx         document shell and layout (Navbar, main, Footer), analytics hook
  routes.ts        route config — the URL map below
  routes/          thin route modules: meta + default export of a page
  pages/           one folder per URL: home/ work/ (and work/<slug>/) bio/ history/ not-found/
  components/
    layout/        Navbar, Footer, Section (page gutter)
    sections/      page sections shared across pages: Hero, WorkGrid, BioSection, …
    work/          WorkMedia, WorkListItem, WorkArticle, Gallery, ZoomGroup/ZoomImage
  content/         typed site content: works, history, profile
  hooks/           useScrollFocus (mobile grid highlight), useAnalytics
  platform/        browser integrations: analytics (gtag), page meta
  assets/          images imported by components
  global.css       Tailwind, design tokens, shared typography utilities
```

## URL map

| URL            | Page                                                       |
| -------------- | ---------------------------------------------------------- |
| `/`            | Hero, work grid, bio and history                           |
| `/work`        | Every visible work; `/work#<slug>` anchors one             |
| `/work/<slug>` | Case study, for works with `hasPage` in `content/works.ts` |
| `/bio`         | Bio                                                        |
| `/history`     | Career history                                             |
| anything else  | Not found (served as `404.html`)                           |

Detail routes and prerender paths both derive from `content/works.ts`: adding a case study
means adding `hasPage: true`, a page in `src/pages/work/<slug>/` and a route module in
`src/routes/work/<slug>.tsx`. A test fails if the route module is missing.

## Lightbox

`ZoomGroup` wraps a page; clicking any `ZoomImage` inside it opens a lightbox
(yet-another-react-lightbox) that pages through the group's images in document order.

## Hosting

Firebase Hosting serves `build/client/` with clean URLs and no trailing slash, so `/bio`
resolves to `bio/index.html`. Unknown paths get `404.html` with a 404 status. Hashed
`/assets/**` are cached immutably. The GitHub `Deploy` workflow publishes `main` to the
live channel and pull requests to preview channels.

Analytics (GA4 via gtag) load only in production builds, when `VITE_GA_ID` is set
(`.env.production`), and track a page view on each client-side navigation.

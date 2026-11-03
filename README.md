# Leevi's portfolio

Source of [vahvelainen.com](https://vahvelainen.com).

## Projects

Projects are sadly restricted to what I have visual evidence about and what I'm allowed to
show.

## Content

I claim full rights to every piece of content and using them in any context without
permission is not allowed excluding use by legal basis.

## Stack

React 19 + React Router (prerendered static site), Tailwind CSS, Vitest, hosted on Firebase
Hosting. See [ARCHITECTURE.md](ARCHITECTURE.md) for the layout and [AGENTS.md](AGENTS.md)
for the conventions.

## Development

Requires Node 22+ and Yarn 1.

```sh
yarn install
yarn dev        # dev server
yarn build      # prerender to build/client/
yarn preview    # serve the build like Firebase Hosting does
yarn lint       # eslint + prettier check (yarn format to fix)
yarn typecheck
yarn test
```

## Deploy

Pushes to `main` deploy to the live site; pull requests get a preview URL. Both run through
`.github/workflows/deploy.yml`, which needs one repository secret:

- `FIREBASE_SERVICE_ACCOUNT_VAHVELAINEN` — a service account JSON key for the `vahvelainen`
  Firebase project (`npx firebase-tools init hosting:github` creates it and stores the
  secret).

Manual deploy: `yarn deploy` (runs `firebase-tools` through npx; log in first with
`npx firebase-tools login`).

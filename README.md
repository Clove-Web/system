# Doughmination System

A real-time plural system tracker for the Doughmination System — current fronters,
system members, and switching patterns. Member data is pulled live from PluralKit
through the Doughmination API, so pages render fresh on every request.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, React 19)
- [vanilla-extract](https://vanilla-extract.style/) for styling
- [TanStack Query](https://tanstack.com/query) + `@doughmination/react-api` for data
- Deployed to **Cloudflare Workers** via [OpenNext](https://opennext.js.org/cloudflare)

## Local development

```bash
npm install
npm run dev
```

Runs the Next.js dev server at http://localhost:3000.

To preview in the real Workers runtime (closer to production):

```bash
npm run preview
```

## Deploy

Deployed to Cloudflare Workers with the OpenNext adapter — **not** Pages / next-on-pages.

```bash
npm run deploy
```

This runs `opennextjs-cloudflare build` (which wraps `next build`) and then
`wrangler deploy`. First run will prompt `wrangler login`.

Alternatively, connect the repo as a **Workers** project in the Cloudflare
dashboard with:

- Build command: `npx opennextjs-cloudflare build`
- Deploy command: `npx wrangler deploy`

Worker config lives in [`wrangler.jsonc`](./wrangler.jsonc); adapter options in
[`open-next.config.ts`](./open-next.config.ts). Member pages (`/[member_id]`) are
server-rendered on demand so Discord embeds and live data stay current with no
rebuild.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Next.js dev server (Turbopack) |
| `npm run build` | Plain `next build` |
| `npm run preview` | Build + serve in the local Workers runtime |
| `npm run deploy` | Build + deploy to Cloudflare Workers |
| `npm run lint` | ESLint |

## Contributing & licence

See [Contributing.md](./Contributing.md), [Security.md](./Security.md), and
[Licence.md](./Licence.md).

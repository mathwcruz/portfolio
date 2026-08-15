# AGENTS.md

Personal portfolio site (Matheus Cruz). Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4.

## Commands

- `npm run dev` — dev server (turbopack is default in Next 16)
- `npm run build` — production build (turbopack; does NOT run lint in Next 16)
- `npm run lint` — ESLint flat config (`eslint .`); `next lint` was removed in Next 16. ESLint held at 9.x (10.x blocked by a typescript-eslint scope-manager incompat; revisit when parser ships a compatible build).
- `npx tsc --noEmit` — typecheck (no dedicated script)
- No test framework is set up.

## Structure

- i18n via next-intl: locales `en-us` (default), `pt-br`, `es-es` with sub-path routing. Config in `src/i18n/` (`routing.ts`, `request.ts`, `navigation.ts`); locale detection in `src/proxy.ts`; UI strings in `messages/<locale>.json`.
- App routes live in `src/app/[locale]/` (`/`, `/resume`, `/work`, `/contact`), each page is wrapped in `PageTransition` (motion/react) by the locale layout.
- Content data (`src/lib/data/`) is locale-aware via `LocalizedText` maps resolved with `tr(map, locale)` (`src/lib/localize.ts`); missing locales fall back to `en-us`. Server components resolve to plain strings before passing to client islands.
- Components: `src/components/ui/` is shadcn/ui (install via `npx shadcn@latest add <name>`, alias `@/components/ui`); `src/components/app/` is site-specific.
- Import path alias: `@/*` → `./src/*`.

## Conventions

- Tailwind v4, CSS-first. There is no `tailwind.config.ts`; theme tokens (`--color-primary`, `--color-accent`, `--color-background-*`, `--font-primary`, custom `--breakpoint-lg/xl`, accordion keyframes) live in `@theme` in `src/app/globals.css`. PostCSS plugin is `@tailwindcss/postcss` (`postcss.config.mjs`); `tailwindcss-animate` loads via `@plugin 'tailwindcss-animate'`. Extend `@theme`, don't hardcode hex.
- Font is JetBrains Mono loaded via `next/font` as `--font-jetbrainsMono`, applied on `<html>` (not `<body>`) so the `@theme` `--font-primary: var(--font-jetbrainsMono)` resolves at `:root`. Don't move it back to `<body>` — v4 computes `@theme` vars on `:root`, so the source var must be defined there or the font silently falls back.
- ESLint disables quote rules and `react/no-unescaped-entities`; don't add quote-style rules.
- React components and server actions use the current Next 16/React 19 conventions; code is otherwise vanilla (no heavy state libs besides motion, swiper, react-countup).
- Always use Context7 when the user needs library/API documentation, code generation, setup, or configuration steps without them explicitly asking.

## Environment

- Contact form sends email through Resend via server action `src/actions/sendEmail.ts`, using `RESEND_API_KEY` from `.env.local` (gitignored; committed secrets will be blocked).
- Note: `.gitignore` ignores `cspell.json`, so it won't be tracked even though it exists.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

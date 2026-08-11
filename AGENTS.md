# AGENTS.md

Personal portfolio site (Matheus Cruz). Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v3.

## Commands

- `npm run dev` — dev server (turbopack is default in Next 16)
- `npm run build` — production build (turbopack; does NOT run lint in Next 16)
- `npm run lint` — ESLint flat config (`eslint .`); `next lint` was removed in Next 16. ESLint held at 9.x (10.x blocked by a typescript-eslint scope-manager incompat; revisit when parser ships a compatible build).
- `npx tsc --noEmit` — typecheck (no dedicated script)
- No test framework is set up.

## Structure

- App routes live in `src/app/` (`/`, `/resume`, `/work`, `/contact`), each page is wrapped in `PageTransition` (motion/react) by the root layout.
- Components: `src/components/ui/` is shadcn/ui (install via `npx shadcn@latest add <name>`, alias `@/components/ui`); `src/components/app/` is site-specific.
- Import path alias: `@/*` → `./src/*`.

## Conventions

- Tailwind v3 (not v4) with config in `tailwind.config.ts`. Custom colors `primary` (#1C1C22), `accent` (blue), `background` shades are defined there — extend the config, don't hardcode hex.
- Font is JetBrains Mono loaded via `next/font` as `--font-jetbrainsMono`; primary font-family is `var(--font-jetbrainsMono)`.
- ESLint disables quote rules and `react/no-unescaped-entities`; don't add quote-style rules.
- React components and server actions use the current Next 16/React 19 conventions; code is otherwise vanilla (no heavy state libs besides motion, swiper, react-countup).
- Always use Context7 when the user needs library/API documentation, code generation, setup, or configuration steps without them explicitly asking.

## Environment

- Contact form sends email through Resend via server action `src/actions/sendEmail.ts`, using `RESEND_API_KEY` from `.env.local` (gitignored; committed secrets will be blocked).
- Note: `.gitignore` ignores `cspell.json`, so it won't be tracked even though it exists.

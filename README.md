# Proofline

Proofline is the forecast layer for the internet: it turns future-facing claims into contextual,
human-approved Forecast Cards backed by Panta prediction-market infrastructure on Solana.

This repository is intentionally at **Phase 0**. It contains the verified application foundation
and the documentation needed to confirm Panta's external contracts. It does not yet implement a
Panta client, wallet flow, database schema, market UI, or any later product phase.

## Stack

- Next.js App Router and React for one TypeScript web application and its server endpoints.
- PostgreSQL with Drizzle ORM beginning in Phase 1; one database supports the modular-monolith and
  outbox design without introducing services prematurely.
- Zod at environment, request, and future provider boundaries.
- Pino for server-side structured JSON logs with credential redaction.
- Tailwind CSS plus repository-owned design tokens for the future accessible UI system.
- Vitest for module tests and Playwright for browser-level tests.
- ESLint, Prettier, strict TypeScript, and GitHub Actions as required quality gates.

External systems will be accessed only through server-side adapters. Panta and Solana remain the
authority for financial state; browser code will never receive provider credentials.

## Setup

Requirements: Node.js 22–24 and npm.

```bash
npm ci
cp .env.example .env.local
npm run env:check
npm run dev
```

On PowerShell, use `Copy-Item .env.example .env.local`. Open <http://localhost:3000>; the health
endpoint is <http://localhost:3000/api/health>.

Panta variables are optional during foundation development. When integration work is authorized,
set both values from approved Panta documentation and secret storage. Never prefix secrets with
`NEXT_PUBLIC_` and never commit `.env.local`.

## Quality gates

```bash
npm run check
npm run test:e2e
```

`npm run check` validates the environment, formatting, linting, types, unit tests, and production
build. Playwright uses an installed Chrome locally; CI installs its own Chromium.

The product and engineering source of truth is [DESIGN.md](./DESIGN.md). Phase 0 integration status
and unanswered Panta questions live in [docs/phase-0.md](./docs/phase-0.md).

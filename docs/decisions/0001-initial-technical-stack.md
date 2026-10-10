# ADR-0001: Initial technical stack

- Status: accepted
- Date: 2026-10-10

## Decision

Use a single strict-TypeScript Next.js App Router application with React. Add a separately launched
worker from the same repository when asynchronous work begins. Use PostgreSQL and Drizzle ORM from
Phase 1, Zod for runtime boundary validation, Pino for structured server logs, Tailwind CSS with
owned design tokens, Vitest for module tests, Playwright for end-to-end tests, npm for reproducible
installs, and GitHub Actions for CI.

## Why

Next.js supports public pages, embeds, authenticated studio routes, and narrow server endpoints in
one deployable application. PostgreSQL gives transactional consistency for domain state, idempotency,
reconciliation, and the outbox. Drizzle keeps the schema explicit and TypeScript-native while leaving
SQL visible. Zod prevents untrusted environment and future provider payloads from leaking inward.
The test split matches the design: fast module tests at deep interfaces and browser tests for user
flows. This is the smallest stack that preserves the documented modular-monolith boundaries.

## Consequences

- Do not introduce a second web backend, ORM, queue database, or service without a new ADR.
- Browser code cannot call authenticated Panta endpoints.
- Database and worker dependencies wait for Phase 1; Phase 0 contains only their documented seams.
- Exact Panta and Solana packages wait until their current transaction contract is verified.

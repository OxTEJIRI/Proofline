# Phase 0 — external-contract verification

Phase 0 is deliberately incomplete until an authorized developer can run Panta's official playground
with staging credentials. No real credential belongs in this repository or its test fixtures.

## Foundation completed

- TypeScript application scaffold, health endpoint, structured redacted logging, and environment
  validation.
- Formatting, linting, type checking, unit tests, browser tests, production build, and CI.
- Initial stack decision and durable implementation rules.
- Empty sanitized-fixture location at `tests/fixtures/panta/`.

## Verification procedure

Using current official Panta documentation and dedicated test wallets outside this repository:

1. Confirm the staging base URL, supported Solana network, currency, authentication, and terms.
2. Run the official playground end to end: identify or create a test market, buy, read the position,
   and inspect the winning-claim and creator-fee paths where staging supports them.
3. Confirm which party broadcasts, quote expiry, registration/reporting, attribution, reconciliation,
   resolution/dispute/void behavior, rate limits, cache rules, and required Panta branding.
4. Redact tokens, wallet signatures, personal data, and transaction material from representative
   request/response payloads; save only approved examples under `tests/fixtures/panta/`.
5. Record confirmed contracts in a dated ADR and mark each open question below resolved with its
   official source and verification date.

## Open Panta questions

- Which network and stablecoin are used in staging and production?
- What are the exact create quote/build/register request and response schemas?
- What are the exact buy quote/build/submit/verify request and response schemas?
- Which party broadcasts each transaction, and what are quote-expiration rules?
- How are application and trade attribution reported and verified?
- Which metadata identifiers are permitted?
- How are markets resolved, disputed, cancelled, and voided?
- May a Resolution Contract URL or hash be stored with a market?
- Which categories, jurisdictions, and eligibility rules apply?
- What rate limits, caching rules, and webhooks apply?
- How are creator fees calculated and claimed?
- May Proofline display historical probability data directly?
- What exact “Powered by Panta” treatment is required?
- Can an existing Panta market be reused with Proofline attribution?
- Which wallet flows work inside cross-origin embeds?

## Exit gate

Do not begin Phase 1 until a developer can create or identify a staging market, perform a test buy,
read the resulting position, understand the claim path, and the confirmed contracts are captured in
sanitized fixtures and an ADR.

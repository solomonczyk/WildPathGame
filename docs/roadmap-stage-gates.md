# Product Roadmap and Stage Gates

Current date baseline: 2026-06-16.
Maximum roadmap horizon to first paying users: 90 days.

## Stages

1. S0 Documentation Lock: 2026-06-16 to 2026-06-17.
2. S1 Prototype Repair: 2026-06-18 to 2026-06-30.
3. S2 Free Demo Validation: 2026-07-01 to 2026-07-14.
4. S3 MVP Course Build: 2026-07-15 to 2026-08-11.
5. S4 Closed Beta: 2026-08-12 to 2026-08-25.
6. S5 Paid Pilot: 2026-08-26 to 2026-09-14.

Full machine-readable contracts are in [Stage Contracts](data/stage-contracts.json).

## Dependencies

- S1 depends on documentation lock and real image scene implementation.
- S2 depends on first episode usability and analytics.
- S3 depends on evidence that users understand the first episode.
- S4 depends on six playable episodes.
- S5 depends on beta learning and payment readiness.

## Deliverables

S0: documentation package, proof JSON, artifact index.
S1: polished apartment demo, multi-zone apartment design, item explanations, result debrief.
S2: landing page, analytics, interview script, usability report.
S3: six-episode MVP, reviewed content, localization pass.
S4: beta cohort, issue triage, learning evidence.
S5: paid offer, checkout or invoice flow, pilot report.

## Owners

Product owner: Taras.
Implementation owner: Codex-assisted engineering.
Content review owner: project owner plus survival-domain reviewer before paid pilot.
Commercial owner: Taras.

## Entry and Exit Logic

No stage may start until the previous stage exit criteria are met. A stage can be skipped only by ADR. Production remains unaccepted until paid pilot and production acceptance gates pass.

## Acceptance Criteria

- S1: five users can understand what to do in first episode.
- S2: landing and demo produce measurable intent.
- S3: six episodes meet Product Definition of Done.
- S4: closed beta proves completion and learning.
- S5: real payment occurs.

## Stop Criteria

Stop or pivot if:

- no users understand the core promise after message tests;
- first episode completion remains below 25% after two UX revisions;
- no paid intent after 300 qualified landing visits and 50 demo completions;
- domain reviewer flags unsafe claims that cannot be corrected within scope.

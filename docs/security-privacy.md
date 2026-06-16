# Security and Privacy

## Threat Model

Assets:

- user progress;
- payment intent;
- emails if collected;
- learning content integrity;
- safety-sensitive advice;
- future account data.

Actors:

- normal learner;
- curious user tampering with client state;
- malicious user submitting unsafe feedback or content;
- compromised third-party script;
- accidental operator error.

## Prompt Injection and Indirect Injection

No runtime AI is approved in MVP. If AI is added later, all webpage, user, and document content must be treated as untrusted. AI output cannot directly modify paid content, rewards, or safety guidance without domain acceptance.

## IDOR and Cross-User Isolation

No multi-user backend in MVP. If accounts are added, every progress, purchase, and support object must be scoped by authenticated user id and tested for IDOR.

## Replay and Duplicate Transactions

Payment pilot must prevent duplicate fulfillment by using provider transaction ids or manual invoice records.

## Client Tampering

Local progress can be edited by users and must not unlock paid benefits without server-side or manual confirmation. Local save is acceptable for free demo learning progress only.

## Secrets

Secrets must remain in environment variables or payment provider dashboards. No API key, token, or app secret may be committed.

## Audit

Audit records before paid pilot:

- release version;
- payment list;
- support issues;
- content review signoff;
- incident log.

## Abuse

Potential abuse:

- false claims that the game certifies survival competence;
- scraping paid content;
- spam signups;
- unsafe user-submitted suggestions.

Mitigations:

- disclaimers;
- no certificate claims;
- manual moderation;
- rate limiting when backend exists.

## Rate Limiting

Not needed for static MVP. Required if forms, accounts, or AI are added.

## Retention

Before accounts, no server retention. If emails are collected, retain until unsubscribe or pilot completion plus 12 months unless user requests deletion.

## Consent

Analytics and email capture require clear notice. No sensitive personal data should be requested for the free demo.

## Legal Review Boundaries

Legal or qualified review is required before:

- paid public launch;
- medical content claims;
- instructor licensing claims;
- collecting personal data beyond email;
- adding certificates.

## Incident Response

Severity levels:

- SEV1: payment, privacy, or unsafe content causing immediate harm risk.
- SEV2: broken paid access or major learning misinformation.
- SEV3: usability or content typo.

Response:

- SEV1: stop affected flow, notify owner, record incident, prepare correction.
- SEV2: patch before next marketing push.
- SEV3: batch into normal release.

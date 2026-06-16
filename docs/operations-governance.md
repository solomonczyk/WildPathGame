# Operations and Governance

## Support Model

Before paid pilot: direct owner support through email or messenger.
During paid pilot: support response target within 48 hours.
After paid pilot: support channel must be published on landing and payment receipt.

## Content Operations

Content lifecycle:

1. Draft.
2. Product review.
3. Domain review if safety-sensitive.
4. Localization review.
5. Accepted.
6. Released.

No safety-sensitive content may skip domain review before paid pilot.

## Monitoring and Alerting

MVP monitoring:

- build validation;
- browser console checks;
- payment issue reports;
- user feedback.

Automated alerting is not required until backend or payments are integrated.

## Incidents

Incident record must include date, severity, user impact, root cause, fix, owner, and prevention.

## Backups and Recovery

Repository is the source backup. Paid pilot data such as purchase records must be exported from payment provider weekly during pilot.

## User Complaints

Complaints are categorized:

- misunderstanding of promise;
- usability blocker;
- unsafe or disputed advice;
- payment/access issue;
- translation issue.

Unsafe advice complaints trigger HOLD for affected content until reviewed.

## AI Feedback Disputes

If AI-generated draft content is disputed, human-reviewed domain source wins. Runtime AI advice is not approved in MVP.

## Payment Issues

Payment issues are handled manually during pilot. Duplicate charge or failed access is SEV1 for paid user experience.

## Release Process

1. Implement change.
2. Run build.
3. Run documentation validation if docs changed.
4. Perform visual review for UI changes.
5. Record decision if stage gate changes.
6. Release preview.
7. Owner approves pilot production when gates pass.

## Maintenance Responsibilities

Product owner maintains canon, roadmap, and commercial decisions.
Engineering maintains build, code, validation scripts, and deployments.
Content owner maintains episode text and review status.

## Governance Registers

- Risk register: [risk-register.json](data/risk-register.json)
- Assumptions register: [assumptions-register.json](data/assumptions-register.json)
- Dependency and stage contracts: [stage-contracts.json](data/stage-contracts.json)
- Decision log: [decision-log.json](data/decision-log.json)
- Traceability: [master-traceability.json](data/master-traceability.json)

## Change Request Process

Use a change request when modifying scope, budget, deadline, target segment, MVP cut line, safety rules, commercial model, or production acceptance.

Required fields:

- request id;
- date;
- proposer;
- affected canon files;
- reason;
- evidence;
- impact on scope, budget, deadline, risk;
- decision: approve, reject, hold;
- owner.

Change requests are recorded by adding an entry to [Decision Log](data/decision-log.json) with type `change_request`.

## ADR Policy

Use an ADR when making architectural, data, integration, security, or irreversible product structure decisions. ADRs are recorded in [Decision Log](data/decision-log.json) with type `ADR`.

## Scope Freeze

MVP scope is frozen by [Product Canon](product-canon.md#hard-mvp-cut-line). New core features before paid pilot require change request approval.

## Owner Matrix

| Area | Owner | Backup |
|---|---|---|
| Product canon | Taras | Engineering collaborator |
| Technical implementation | Engineering collaborator | Taras |
| Learning safety | Taras plus reviewer | External reviewer |
| Commercial model | Taras | Product advisor |
| Release approval | Taras | none |

## Master Traceability

Requirements, tests, risks, and stage gates are mapped in [Master Traceability Matrix](data/master-traceability.json).

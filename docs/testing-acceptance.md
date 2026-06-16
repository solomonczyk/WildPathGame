# Testing and Acceptance

## Test Matrix

| Test | Scope | Tool | Owner | Pass Criteria | Blocking | Artifact | Evidence |
|---|---|---|---|---|---|---|---|
| Unit | gameEngine utilities | Vitest or current JS test runner when added | Engineering | stat, XP, save helpers pass | Yes before scale | test report | CI log |
| Schema | docs/data JSON | PowerShell validation script | Engineering | JSON parses and required fields exist | Yes | proof.json | validation output |
| Contract | stage contracts | validation script | Product owner | every stage has GO/HOLD/PIVOT/STOP | Yes | stage-contracts.json | proof.json |
| Integration | game start to episode complete | browser manual or Playwright | Engineering | user can complete episode | Yes | test notes | screenshot/video |
| Database | future backend | migration test | Engineering | migrations reversible | Yes when backend exists | migration log | CI |
| Migration | save schema | manual save fixture | Engineering | old saves load or reset safely | Yes after beta | fixture | test report |
| State machine | episode flow | automated component test | Engineering | no invalid transitions | Yes | test report | CI |
| Security | local no Base44 null requests | browser console check | Engineering | no `/api/apps/null` new errors | Yes | console log | screenshot/log |
| E2E | free demo journey | Playwright or Browser | Engineering | start, pack, evaluate, debrief | Yes | E2E report | video/log |
| Accessibility | keyboard and contrast | manual plus axe when added | Design owner | controls reachable, readable | Yes | a11y report | screenshots |
| Visual | desktop/mobile layouts | Browser screenshots | Design owner | no overlap, scene visible | Yes | screenshots | review note |
| Device | matrix devices | Browser viewport and real devices | QA owner | acceptance matrix passes | Yes before paid | device sheet | screenshots |
| Load | first scene loading | browser timing | Engineering | interactive under 3 seconds | No for prototype, yes for paid | timing log | report |
| Recovery | missing/overweight outcomes | manual test | Product owner | clear recovery guidance | Yes | test notes | screenshots |
| Prompt Evaluation | AI-generated content drafts | human review | Content owner | no unsafe accepted AI output | Yes if AI used | review record | signoff |
| Audit Completeness | docs package | validation script | Product owner | proof status complete | Yes | proof.json | artifact index |

## Acceptance Layers

Technical acceptance:

- build passes;
- no blocking runtime errors;
- stage data validates.

Pedagogical acceptance:

- learning outcome stated;
- consequence explains why;
- user can explain principle.

Visual acceptance:

- image visible;
- hotspots align;
- mobile layout readable.

Business acceptance:

- conversion or payment evidence meets stage threshold.

Production acceptance:

- all above plus support, privacy, payment, and owner approval.

## Required Evidence

Every stage must collect:

- build or validation output;
- screenshots for UI stages;
- interview or analytics evidence for validation stages;
- decision log entry for GO/HOLD/PIVOT/STOP.

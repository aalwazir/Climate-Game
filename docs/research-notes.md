# Research Notes

Collect facts here before turning them into scenarios. For each one, record the claim, the source id from `src/data/sources.js`, and the scenario it supports.

Scene IDs refer to the scenes in `docs/decision-tree.md`.

## Facts behind scenarios

| Claim | Source id | Used in scenario |
| ----- | --------- | ---------------- |
| Construction workers are about 6% of the U.S. workforce but account for more than one-third of reported heat-related occupational deaths. | `epaHeatWorkers` | `C2` (Working Through Extreme Heat), `C2a`, `C2b` (Serious Health Scare) |
| Outdoor workers, especially those doing strenuous work, face disproportionately high heat-related health threats. | `epaHeatWorkers` | `C2`, `C2b` |
| Extreme heat affects health, infrastructure, and worker productivity, and can strain health care systems. | `crsHeat2026` | `T1` (A Dangerous Heatwave), `C2` |
| Distributive justice concerns who bears the costs and benefits of climate action; procedural justice concerns who gets a say in decisions. | `toursClimateJustice` | `T1a` (Cooling Center Funding Crisis), `C1a` (The Emergency Shelter). Also the basis for the Social Equity stat. |
| Flood, drought, and hurricane mortality from 2010 to 2020 was 15 times higher in highly vulnerable regions than in less vulnerable ones (UNDP 2023, as cited by the Tours page). | `toursClimateJustice` | `C1` (Your Coworker Loses Their Home), `C1a` |
| Racialized communities are often more exposed to flooding, heatwaves, and poor air quality. | `oxfam2024` | `T1`, `T2` (The Flooded Bike Route), `C1a` |

## Facts behind game design

These support how the game is built (stats, endings, feedback), not a particular scene.

| Claim | Source id | Used in |
| ----- | --------- | ------- |
| In ClimarisQ, players balance economic viability, social acceptance, and environmental outcomes, which makes trade-offs and time delays concrete. | `faranda2026` | Four-stat design: every choice moves at least one stat in a bad direction |
| ClimarisQ players reported reflecting on complexity, trade-offs, and uncertainty rather than acquiring factual knowledge. | `faranda2026` | Plain-language consequences on endings E1-E16 |
| A systematic review of serious games for climate decision-making stresses debriefing and evaluation practices. | `flood2018` | Ending descriptions and any end-of-game summary screen |
| Hope in the face of climate change is associated with environmental engagement (from the paper's title; verify against the full text before relying on it). | `ojala2015` | Tone of endings: harder outcomes still show what the player could try next |

## To do

- Find the original sources behind two figures we only have secondhand: the UNDP mortality statistic (via `toursClimateJustice`) and the Union of Concerned Scientists outdoor-worker heat projection (not yet in `sources.js`).
- Stat effects in `decision-tree.md` are illustrative game-balance numbers, so these sources back the scenarios and themes, not the exact numbers.

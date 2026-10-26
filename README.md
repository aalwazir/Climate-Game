# Climate Trail: The Fate of Civilization

A 20–30 minute browser game about how individual, community, and government choices shape the future of the climate, and who bears the consequences. Players can reach several endings, from environmental collapse to a sustainable future.

## Running locally

There is no build step. The game is plain HTML, CSS, and JavaScript (ES modules). Browsers block modules opened from `file://`, so serve the folder:

```sh
npm start          # runs python3 -m http.server 8000
# then open http://localhost:8000
```

Run the tests (Node 18+, no dependencies):

```sh
npm test
```

## Project structure

```
index.html            Page shell; loads src/main.js
css/main.css          All styles
src/
  main.js             Entry point: holds state, routes clicks, renders screens
  engine/state.js     Pure game logic (metrics, choices, endings). No DOM.
  ui/screens.js       Functions that return HTML for each screen
  data/               Game content, editable without touching logic
    scenarios.js      Decision points, choices, and their effects
    metrics.js        World-state values (emissions, equity, …)
    endings.js        Ending conditions, checked in order
    sources.js        Citations shown on the Sources screen
assets/               Images, audio, fonts
tests/                node:test unit tests for the engine and data
docs/                 Research notes and playtesting log
```

## Adding content

- **New scenario:** add an object to `src/data/scenarios.js`. Every `effects` key must be a metric in `metrics.js`, and every `sources` id must exist in `sources.js`. `npm test` checks both.
- **New metric:** add it to `src/data/metrics.js`. The stats bar picks it up automatically.
- **New ending:** add it to `src/data/endings.js`. Order matters, because the first match wins.

## Deployment

The repo deploys to GitHub Pages as is: **Settings → Pages → Deploy from branch → `main` / root**.

## Why no React (yet)?

The game is a sequence of screens driven by data, and vanilla JS handles that easily while staying lightweight. If the UI grows complex enough to need components, the `engine/` and `data/` folders are framework-agnostic and can be reused unchanged.

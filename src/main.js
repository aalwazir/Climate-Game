// Entry point: owns the current state and screen, and routes button clicks.
import { SCENARIOS } from './data/scenarios.js';
import { createInitialState, choose, isFinished, getEnding } from './engine/state.js';
import * as screens from './ui/screens.js';

const app = document.getElementById('app');

let state = createInitialState();
let lastChoice = null;
let screen = 'title';

function render() {
  if (screen === 'title') app.innerHTML = screens.titleScreen();
  else if (screen === 'sources') app.innerHTML = screens.sourcesScreen();
  else if (screen === 'scenario') app.innerHTML = screens.scenarioScreen(SCENARIOS[state.scenarioIndex], state.metrics);
  else if (screen === 'outcome') app.innerHTML = screens.outcomeScreen(lastChoice, state.metrics);
  else if (screen === 'ending') app.innerHTML = screens.endingScreen(getEnding(state.metrics), state.metrics);
  app.querySelector('button')?.focus();
}

app.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;

  switch (btn.dataset.action) {
    case 'start':
    case 'restart':
      state = createInitialState();
      screen = 'scenario';
      break;
    case 'choose': {
      const scenario = SCENARIOS[state.scenarioIndex];
      lastChoice = scenario.choices[Number(btn.dataset.index)];
      state = choose(state, scenario, Number(btn.dataset.index));
      screen = 'outcome';
      break;
    }
    case 'continue':
      screen = isFinished(state, SCENARIOS) ? 'ending' : 'scenario';
      break;
    case 'sources':
      screen = 'sources';
      break;
    case 'title':
      screen = 'title';
      break;
  }
  render();
});

render();

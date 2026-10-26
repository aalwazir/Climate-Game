// Pure game logic: no DOM access, so all of it can be unit-tested in Node.
import { METRICS } from '../data/metrics.js';
import { ENDINGS } from '../data/endings.js';

const clamp = (n) => Math.max(0, Math.min(100, n));

export function createInitialState() {
  const metrics = {};
  for (const [key, def] of Object.entries(METRICS)) metrics[key] = def.start;
  return { scenarioIndex: 0, metrics, history: [] };
}

export function applyEffects(metrics, effects = {}) {
  const next = { ...metrics };
  for (const [key, delta] of Object.entries(effects)) {
    if (!(key in next)) throw new Error(`Unknown metric "${key}"`);
    next[key] = clamp(next[key] + delta);
  }
  return next;
}

export function choose(state, scenario, choiceIndex) {
  const choice = scenario.choices[choiceIndex];
  return {
    scenarioIndex: state.scenarioIndex + 1,
    metrics: applyEffects(state.metrics, choice.effects),
    history: [...state.history, { scenarioId: scenario.id, choiceIndex }],
  };
}

export function isFinished(state, scenarios) {
  return state.scenarioIndex >= scenarios.length;
}

export function getEnding(metrics, endings = ENDINGS) {
  return endings.find((e) => e.when(metrics));
}

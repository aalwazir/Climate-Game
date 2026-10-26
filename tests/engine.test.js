import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, applyEffects, choose, isFinished, getEnding } from '../src/engine/state.js';
import { SCENARIOS } from '../src/data/scenarios.js';
import { METRICS } from '../src/data/metrics.js';
import { SOURCES } from '../src/data/sources.js';

test('applyEffects clamps metrics to 0–100', () => {
  assert.deepEqual(applyEffects({ emissions: 98 }, { emissions: +10 }), { emissions: 100 });
  assert.deepEqual(applyEffects({ emissions: 2 }, { emissions: -10 }), { emissions: 0 });
});

test('applyEffects rejects unknown metrics', () => {
  assert.throws(() => applyEffects({ emissions: 50 }, { typo: 1 }));
});

test('playing every scenario reaches an ending', () => {
  let state = createInitialState();
  while (!isFinished(state, SCENARIOS)) state = choose(state, SCENARIOS[state.scenarioIndex], 0);
  assert.ok(getEnding(state.metrics));
});

test('scenario data is valid', () => {
  const sourceIds = new Set(SOURCES.map((s) => s.id));
  for (const s of SCENARIOS) {
    assert.ok(s.choices.length >= 2, `${s.id} needs at least 2 choices`);
    for (const id of s.sources) assert.ok(sourceIds.has(id), `${s.id} cites unknown source ${id}`);
    for (const c of s.choices) {
      for (const key of Object.keys(c.effects)) assert.ok(key in METRICS, `${s.id} uses unknown metric ${key}`);
    }
  }
});

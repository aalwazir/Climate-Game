// Each screen returns an HTML string. Event wiring lives in main.js.
import { METRICS } from '../data/metrics.js';
import { SOURCES } from '../data/sources.js';

const escape = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function titleScreen() {
  return `
    <section class="panel">
      <h1>Climate Trail: The Fate of Civilization</h1>
      <p>Your choices as a person, a community, and a government shape the future. The ending is not decided yet.</p>
      <div class="choices">
        <button class="primary" data-action="start">Begin the trail</button>
        <button data-action="sources">Sources</button>
      </div>
    </section>`;
}

export function statsPanel(metrics) {
  const rows = Object.entries(METRICS)
    .map(
      ([key, def]) => `
      <div class="stat">
        ${escape(def.label)}: ${metrics[key]}
        <div class="stat-bar"><span style="width:${metrics[key]}%"></span></div>
      </div>`,
    )
    .join('');
  return `<section class="panel stats" aria-label="World status">${rows}</section>`;
}

export function scenarioScreen(scenario, metrics) {
  const choices = scenario.choices
    .map((c, i) => `<button data-action="choose" data-index="${i}">${escape(c.text)}</button>`)
    .join('');
  return `
    ${statsPanel(metrics)}
    <section class="panel">
      <p class="meta">${scenario.year} · ${escape(scenario.level)}</p>
      <h2>${escape(scenario.title)}</h2>
      <p>${escape(scenario.text)}</p>
      <div class="choices">${choices}</div>
    </section>`;
}

export function outcomeScreen(choice, metrics) {
  return `
    ${statsPanel(metrics)}
    <section class="panel">
      <p>${escape(choice.outcome)}</p>
      <div class="choices"><button class="primary" data-action="continue">Continue</button></div>
    </section>`;
}

export function endingScreen(ending, metrics) {
  return `
    ${statsPanel(metrics)}
    <section class="panel">
      <h2>${escape(ending.title)}</h2>
      <p>${escape(ending.text)}</p>
      <div class="choices">
        <button class="primary" data-action="restart">Play again</button>
        <button data-action="sources">Sources</button>
      </div>
    </section>`;
}

export function sourcesScreen() {
  const items = SOURCES.map(
    (s) => `<li>${escape(s.citation)} <a href="${escape(s.url)}" target="_blank" rel="noopener">${escape(s.url)}</a></li>`,
  ).join('');
  return `
    <section class="panel">
      <h2>Sources</h2>
      <ol class="sources">${items}</ol>
      <button data-action="title">Back</button>
    </section>`;
}

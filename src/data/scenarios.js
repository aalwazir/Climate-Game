// Each scenario is one decision point on the trail.
//   level:   'individual' | 'community' | 'government'
//   effects: metric deltas applied when a choice is picked (see metrics.js)
//   sources: ids from sources.js backing the scenario's facts
// These two are placeholders. Replace them with research-backed content.
export const SCENARIOS = [
  {
    id: 'commute',
    year: 2025,
    level: 'individual',
    title: 'The Daily Commute',
    text: 'Your city just opened a new bus line. Driving is faster, but the bus is cheaper and cleaner.',
    sources: ['ipcc2023'],
    choices: [
      {
        text: 'Take the bus and convince a friend to join you.',
        effects: { emissions: -3, publicSupport: +2 },
        outcome: 'Ridership grows, and the city adds more routes.',
      },
      {
        text: 'Keep driving. It saves time.',
        effects: { emissions: +2, resources: +1 },
        outcome: 'Traffic gets worse, and the new line struggles to justify itself.',
      },
    ],
  },
  {
    id: 'heat-wave',
    year: 2030,
    level: 'community',
    title: 'Heat Wave',
    text: 'A record heat wave hits. Wealthier neighborhoods have AC and shade trees. Lower-income neighborhoods have neither.',
    sources: ['ipcc2023'],
    choices: [
      {
        text: 'Fund cooling centers and tree planting in the hardest-hit neighborhoods first.',
        effects: { equity: +6, resources: -5, publicSupport: +2 },
        outcome: 'Heat-related hospital visits drop sharply where help arrived.',
      },
      {
        text: 'Spread the budget evenly across the whole city.',
        effects: { equity: -2, resources: -5 },
        outcome: 'Everyone gets a little help. The neighborhoods hit hardest still suffer the most.',
      },
    ],
  },
];

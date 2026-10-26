// Checked in order. The first ending whose `when(metrics)` returns true wins,
// so the last entry should always match as a fallback.
export const ENDINGS = [
  {
    id: 'utopia',
    title: 'A Sustainable Future',
    text: 'Emissions fell, and the people hit hardest were protected first. Collective action changed the trajectory.',
    when: (m) => m.emissions <= 30 && m.equity >= 60,
  },
  {
    id: 'unequal-recovery',
    title: 'An Unequal Recovery',
    text: 'The climate stabilized, but not everyone shared in the recovery.',
    when: (m) => m.emissions <= 45,
  },
  {
    id: 'collapse',
    title: 'Collapse',
    text: 'Emissions kept climbing. Even so, every choice along the way could have bent the curve. Try again.',
    when: (m) => m.emissions >= 85,
  },
  {
    id: 'crossroads',
    title: 'At the Crossroads',
    text: 'The future is still unwritten. Some progress was made, but there is far more to do.',
    when: () => true,
  },
];

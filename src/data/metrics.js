// The world-state values the player's choices push around.
// Every metric runs 0–100. `goodWhenHigh` says which direction is better,
// so endings and the UI can read them without special cases.
export const METRICS = {
  emissions: { label: 'Emissions', start: 70, goodWhenHigh: false },
  equity: { label: 'Climate Justice', start: 40, goodWhenHigh: true },
  publicSupport: { label: 'Public Support', start: 50, goodWhenHigh: true },
  resources: { label: 'Resources', start: 60, goodWhenHigh: true },
};

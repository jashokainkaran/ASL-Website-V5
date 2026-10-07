/** Home story shares the opening's canonical .00–.52 score. Holds leave time to read. */
export const homeStory = [
  { text: ['Everything begins without form.'], name: 'Emergence', enter: 0, hold: .014, exit: .067, end: .09 },
  { text: ['Direction turns possibility into intention.'], name: 'Direction', enter: .093, hold: .115, exit: .175, end: .197 },
  { text: ['Structure gives an idea something to hold onto.'], name: 'Structure', enter: .204, hold: .223, exit: .272, end: .292 },
  { text: ['Design gives it shape.', 'Engineering gives it substance.'], name: 'System', enter: .307, hold: .343, exit: .403, end: .424 },
];
export const homeIdentity = { readable: .494, header: .507, hero: .499, settled: .52 } as const;
export function storyBeat(progress: number) {
  return homeStory.find(beat => progress >= beat.enter && progress < beat.end)?.name ?? (progress >= .424 ? 'Identity / hero' : 'Material transition');
}

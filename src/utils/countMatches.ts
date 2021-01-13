export const countMatches = (verifiable: string, reference: string): number => {
  let count: number = 0;

  for (let i: number = 0; i < reference.length; i++) {
    reference[i] === verifiable[i] && count++;
  }

  return count;
};
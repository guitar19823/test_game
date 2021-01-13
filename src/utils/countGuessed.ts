export const countGuessed = (verifiable: string, reference: string): number => {
  let count: number = 0;
  const uniqueVerifiable = new Set(verifiable);
  const uniqueReference = new Set(reference);

  uniqueReference.forEach((i: string): void => uniqueVerifiable.forEach((j: string): void => {
    j === i && count++;
  }));

  return count;
};
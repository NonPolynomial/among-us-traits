import { Trait } from './types';

export const getWeightedPartialSums = (traits: Trait<'weighted'>[]): number[] =>
traits
.map(({ weight }) => weight)
    .reduce(
      (acc, weight, idx) =>
        idx === 0
          ? [weight]
          : [...acc, weight + acc[acc.length - 1]],
      [],
    );

export const getWeightedRandomPick = (traits: Trait<'weighted'>[]): Trait<'weighted'> => {
  const sums = getWeightedPartialSums(traits);
  const max = Math.max(...sums);
  const random = Math.random() * max;

  return traits[sums.findIndex((v, i, o) => random >= (i === 0 ? 0 : o[i - 1]) && random < v)];
};

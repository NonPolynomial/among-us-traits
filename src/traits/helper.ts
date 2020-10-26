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

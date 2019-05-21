import * as R from "ramda";
import { CardType } from "../CardType";
import { ILetterType } from "./ILetterType";

export function shuffle<T>(arr: T[]): T[] {
  return R.sort<T>(() => 0.5 - Math.random(), arr);
}

export const take20rand = R.compose<number[], number[], number[]>(
  R.take(20),
  shuffle
);

export const mapToLetter = R.curry(
  (type: CardType, x: string): ILetterType => ({
    letter: x,
    type
  })
);

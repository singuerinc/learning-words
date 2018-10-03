import * as R from "ramda";
import { CardType } from "../CardType";

interface ILetterType {
  letter: string;
  type: CardType;
}

export const shuffle = R.sort(() => 0.5 - Math.random());

export const take20rand = R.compose(
  R.take(20),
  shuffle
);

export const mapToLetter = R.curry(
  (type: CardType, x: string): ILetterType => ({
    letter: x,
    type
  })
);

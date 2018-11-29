import * as R from "ramda";
import { CardType } from "../CardType";
import { mapToLetter, shuffle } from "./utils";

const numbers: number[] = R.range(1, 100);

const randInt = () => Math.floor(1 + Math.random() * 9);
const randIntBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);
const randIntMax = (max: number) => {
  let a;
  do {
    a = randInt();
  } while (a > max);
  return a;
};

export const additions = () =>
  R.map(
    mapToLetter(CardType.ADDITION),
    R.map(() => `${randInt()}+${randInt()}`, R.range(0, 19))
  );

export const additionsLevel2 = () => {
  const num1 = randIntBetween(0, 100);
  const num2 = randIntBetween(0, num1);
  return R.map(
    mapToLetter(CardType.ADDITION),
    R.map(() => `${num1} + ${num2}`, R.range(0, 19))
  );
};

export const substractions = () =>
  R.map(
    mapToLetter(CardType.SUBSTRACTION),
    R.map(() => {
      const op1 = randInt();
      const op2 = randIntMax(op1);
      return `${op1}-${op2}`;
    }, R.range(0, 19))
  );

export const nums = () =>
  R.map(mapToLetter(CardType.NUMBER), R.take<string[]>(20, shuffle(numbers)));

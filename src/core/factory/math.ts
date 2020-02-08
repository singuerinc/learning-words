import map from "ramda/es/map";
import range from "ramda/es/range";
import take from "ramda/es/take";
import { Topic } from "../../topic";
import { mapToLetter, shuffle } from "./utils";

const numbers100: number[] = range(1, 100);
const romanNumbers10: string[] = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X"
];

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
  map(
    mapToLetter(Topic.ADDITION),
    map(() => `${randInt()}+${randInt()}`, range(0, 19))
  );

export const additionsLevel2 = () => {
  const num1 = () => randIntBetween(0, 100);
  const num2 = (max: number) => randIntBetween(0, max);
  return map(
    mapToLetter(Topic.ADDITION),
    map(() => {
      const n1 = num1();
      const n2 = num2(100 - n1);
      return `${n1}<br/>+<br/>${n2}`;
    }, range(0, 19))
  );
};

export const subtractions = () =>
  map(
    mapToLetter(Topic.SUBTRACTION),
    map(() => {
      const op1 = randInt();
      const op2 = randIntMax(op1);
      return `${op1}-${op2}`;
    }, range(0, 19))
  );

export const subtractionsLevel2 = () => {
  const num1 = () => randIntBetween(0, 100);
  const num2 = (max: number) => randIntBetween(0, max);
  return map(
    mapToLetter(Topic.SUBTRACTION),
    map(() => {
      const n1 = num1();
      const n2 = num2(n1);
      return `${n1}<br/>-<br/>${n2}`;
    }, range(0, 19))
  );
};

export const numbers = () =>
  map(mapToLetter(Topic.NUMBERS), take(20, shuffle(numbers100)));

export const romanNumbers = () =>
  map(mapToLetter(Topic.ROMAN_NUMBERS), take(20, shuffle(romanNumbers10)));

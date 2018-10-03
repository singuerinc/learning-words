import * as R from "ramda";
import { CardType } from "../CardType";
import { mapToLetter, take20rand } from "./utils";

export const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export const ltrsLowercase = R.compose(
  R.map(mapToLetter(CardType.LOWERCASE)),
  R.map(R.toLower),
  take20rand
);

export const ltrsUppercase = R.compose(
  R.map(mapToLetter(CardType.UPPERCASE)),
  R.map(R.toUpper),
  take20rand
);

import * as R from "ramda";
import * as React from "react";
import { Clock } from "../../components/clock/Clock";
import { Figure } from "../../components/figure/Figure";
import { Letter } from "../../components/letter/Letter";
import { CardType } from "../CardType";

const factoryFigure = (item) => React.createElement(Figure, { card: item });
const factoryClock = (item) => React.createElement(Clock, { card: item });
const factoryLetter = (item) => React.createElement(Letter, ...item);

export const factory = (item) =>
  R.cond([
    [R.equals(CardType.FIGURE), R.always(factoryFigure(item))],
    [R.equals(CardType.CLOCK), R.always(factoryClock(item))],
    [R.T, R.always(factoryLetter(item))]
    // [equals(CardType.UPPERCASE), always(factoryLetter(item))],
    // [equals(CardType.NUMBER), always(factoryLetter(item))],
    // [equals(CardType.SUBSTRACTION), always(factoryLetter(item))],
    // [equals(CardType.ADDITION), always(factoryLetter(item))],
    // [equals(CardType.SUBSTRACTION), always(factoryLetter(item))]
  ])(item.type);

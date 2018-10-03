import * as R from "ramda";
import * as React from "react";
import { Clock } from "../../components/clock/Clock";
import { Figure } from "../../components/figure/Figure";
import { Letter } from "../../components/letter/Letter";
import { DayOfTheWeek } from "../../components/time/DayOfTheWeek";
import { CardType } from "../CardType";

const factoryFigure = (item) => React.createElement(Figure, { card: item });
const factoryClock = (item) => React.createElement(Clock, { card: item });
const factoryLetter = (item) => React.createElement(Letter, ...item);
const factoryDayOfTheWeek = (item) =>
  React.createElement(DayOfTheWeek, ...item);

export const factory = (item) =>
  R.cond([
    [R.equals(CardType.FIGURE), R.always(factoryFigure(item))],
    [R.equals(CardType.CLOCK), R.always(factoryClock(item))],
    [R.equals(CardType.DAY_OF_THE_WEEK), R.always(factoryDayOfTheWeek(item))],
    [R.T, R.always(factoryLetter(item))]
    // [equals(CardType.UPPERCASE), always(factoryLetter(item))],
    // [equals(CardType.NUMBER), always(factoryLetter(item))],
    // [equals(CardType.SUBSTRACTION), always(factoryLetter(item))],
    // [equals(CardType.ADDITION), always(factoryLetter(item))],
    // [equals(CardType.SUBSTRACTION), always(factoryLetter(item))]
  ])(item.type);

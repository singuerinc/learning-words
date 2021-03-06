import * as R from "ramda";
import * as React from "react";
import { Clock } from "../../components/clock/Clock";
import { Figure } from "../../components/figure/Figure";
import { FrequentWord } from "../../components/letter/FrequentWord";
import { Letter } from "../../components/letter/Letter";
import { RomanNum } from "../../components/letter/RomanNum";
import { DayOfTheWeek } from "../../components/time/DayOfTheWeek";
import { CardType } from "../CardType";

const factoryFigure = (item) => React.createElement(Figure, { card: item });
const factoryClock = (item) => React.createElement(Clock, { card: item });
const factoryLetter = (item) => React.createElement(Letter, ...item);
const factoryRomanNum = (item) => React.createElement(RomanNum, ...item);
const factoryFrequentWord = (item) =>
  React.createElement(FrequentWord, ...item);
const factoryDayOfTheWeek = (item) =>
  React.createElement(DayOfTheWeek, ...item);

export const factory = (item) =>
  R.cond([
    [R.equals(CardType.FIGURE), R.always(factoryFigure(item))],
    [R.equals(CardType.CLOCK), R.always(factoryClock(item))],
    [R.equals(CardType.DAY_OF_THE_WEEK), R.always(factoryDayOfTheWeek(item))],
    [R.equals(CardType.ROMAN_NUMBER), R.always(factoryRomanNum(item))],
    [R.equals(CardType.FREQUENT_WORD), R.always(factoryFrequentWord(item))],
    [R.T, R.always(factoryLetter(item))]
    // [equals(CardType.UPPERCASE), always(factoryLetter(item))],
    // [equals(CardType.NUMBER), always(factoryLetter(item))],
    // [equals(CardType.SUBSTRACTION), always(factoryLetter(item))],
    // [equals(CardType.ADDITION), always(factoryLetter(item))],
    // [equals(CardType.SUBSTRACTION), always(factoryLetter(item))]
  ])(item.type);

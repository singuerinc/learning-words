import addIndex from "ramda/es/addIndex";
import always from "ramda/es/always";
import compose from "ramda/es/compose";
import cond from "ramda/es/cond";
import curry from "ramda/es/curry";
import equals from "ramda/es/equals";
import map from "ramda/es/map";
import prop from "ramda/es/prop";
import range from "ramda/es/range";
import sort from "ramda/es/sort";
import T from "ramda/es/T";
import take from "ramda/es/take";
import toLower from "ramda/es/toLower";
import toUpper from "ramda/es/toUpper";
import * as React from "react";
import { Clock } from "../../components/clock/Clock";
import { Figure } from "../../components/figure/Figure";
import { Letter } from "../../components/letter/Letter";
import { CardType } from "../CardType";

const factoryFigure = (item) => React.createElement(Figure, { card: item });
const factoryClock = (item) => React.createElement(Clock, { card: item });
const factoryLetter = (item) => React.createElement(Letter, ...item);

export const factory = (item) =>
  cond([
    [equals(CardType.FIGURE), always(factoryFigure(item))],
    [equals(CardType.CLOCK), always(factoryClock(item))],
    [T, always(factoryLetter(item))]
    // [equals(CardType.UPPERCASE), always(factoryLetter(item))],
    // [equals(CardType.NUMBER), always(factoryLetter(item))],
    // [equals(CardType.SUBSTRACTION), always(factoryLetter(item))],
    // [equals(CardType.ADDITION), always(factoryLetter(item))],
    // [equals(CardType.SUBSTRACTION), always(factoryLetter(item))]
  ])(item.type);

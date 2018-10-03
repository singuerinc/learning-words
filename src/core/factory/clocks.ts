import * as R from "ramda";
import { CardType } from "../CardType";

const DAYS: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const createClock = () => ({
  time: new Date(new Date().getTime() * Math.random()),
  type: CardType.CLOCK
});

const createDayOfTheWeek = R.curry((days: string[], idx: number) => ({
  day: days[idx],
  type: CardType.DAY_OF_THE_WEEK
}));

export const clocks = () => R.map(createClock, R.range(0, 19));
export const dayOfTheWeek = () =>
  R.map(createDayOfTheWeek(DAYS), R.range(0, 7));

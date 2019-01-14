import * as R from "ramda";
import { CardType } from "../CardType";
import { shuffle } from "./utils";

const DAYS: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const createClockLevel1 = () => {
  const time = new Date(new Date().getTime() * Math.random());
  const one = shuffle([0, 15, 30, 45])[0];
  time.setMinutes(one);
  return {
    time,
    type: CardType.CLOCK
  };
};

const createClockLevel2 = () => ({
  time: new Date(new Date().getTime() * Math.random()),
  type: CardType.CLOCK
});

const createDayOfTheWeek = R.curry((days: string[], idx: number) => ({
  day: days[idx],
  type: CardType.DAY_OF_THE_WEEK
}));

export const clocksLevel2 = () => R.map(createClockLevel2, R.range(0, 19));
export const clocksLevel1 = () => R.map(createClockLevel1, R.range(0, 19));
export const dayOfTheWeek = () =>
  R.map(createDayOfTheWeek(DAYS), R.range(0, 7));

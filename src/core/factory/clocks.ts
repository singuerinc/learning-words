import curry from "ramda/es/curry";
import map from "ramda/es/map";
import range from "ramda/es/range";
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
  const one = shuffle([0, 15, 30, 45])[0];
  const time = new Date(new Date().getTime() * Math.random());
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

const createDayOfTheWeek = curry((days: string[], idx: number) => ({
  day: days[idx],
  type: CardType.DAY_OF_THE_WEEK
}));

export const clocksLevel2 = () => map(createClockLevel2, range(0, 19));
export const clocksLevel1 = () => map(createClockLevel1, range(0, 19));
export const dayOfTheWeek = () => map(createDayOfTheWeek(DAYS), range(0, 7));

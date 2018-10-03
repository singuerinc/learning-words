import * as R from "ramda";
import { CardType } from "../CardType";

const createClock = () => ({
  time: new Date(new Date().getTime() * Math.random()),
  type: CardType.CLOCK
});

export const clocks = () => R.map(createClock, R.range(0, 19));

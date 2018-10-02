import { CardType } from "./CardType";

interface ICard {
  type: CardType;
  letter: string;
  figure: SVGElement;
}

interface IClockCard {
  type: CardType;
  time: Date;
  figure: SVGElement;
}

export { ICard, IClockCard };

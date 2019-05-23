import { CardType } from "./CardType";

interface ICard {
  type: CardType;
  letter: string;
  figure: string;
}

interface IClockCard {
  type: CardType;
  time: Date;
  figure: SVGElement;
}

interface IPlanetCard {
  type: CardType;
  name: string;
  planet: string;
}

export { ICard, IClockCard, IPlanetCard };

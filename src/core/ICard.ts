import { CardType } from "./CardType";

interface ICard {
  type: CardType;
  letter: string;
  figure: SVGElement;
}

export { ICard };

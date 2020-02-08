import { Topic } from "../topic";

interface ICard {
  type: Topic;
  letter: string;
  figure: string;
}

interface IClockCard {
  type: Topic;
  time: Date;
  figure: SVGElement;
}

interface IPlanetCard {
  type: Topic;
  name: string;
  planet: string;
}

export { ICard, IClockCard, IPlanetCard };

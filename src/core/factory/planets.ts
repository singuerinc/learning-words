import mars from "../../components/planets/i/002-mars.svg";
import earth from "../../components/planets/i/003-planet-earth.svg";
import saturn from "../../components/planets/i/004-saturn.svg";
import venus from "../../components/planets/i/005-venus.svg";
import uranus from "../../components/planets/i/006-planet.svg";
import mercury from "../../components/planets/i/007-mercury.svg";
import neptune from "../../components/planets/i/008-neptune.svg";
import jupiter from "../../components/planets/i/jupiter.svg";
import { CardType } from "../CardType";
import { IPlanetCard } from "../ICard";

const planets: IPlanetCard[] = [
  { type: CardType.PLANET, name: "Mercury", planet: mercury },
  { type: CardType.PLANET, name: "Venus", planet: venus },
  { type: CardType.PLANET, name: "Earth", planet: earth },
  { type: CardType.PLANET, name: "Mars", planet: mars },
  { type: CardType.PLANET, name: "Jupiter", planet: jupiter },
  { type: CardType.PLANET, name: "Saturn", planet: saturn },
  { type: CardType.PLANET, name: "Uranus", planet: uranus },
  { type: CardType.PLANET, name: "Neptune", planet: neptune }
];

export const planetsLevel1 = () => planets;

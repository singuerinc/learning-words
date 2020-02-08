import mars from "../../components/planets/i/002-mars.svg";
import earth from "../../components/planets/i/003-planet-earth.svg";
import saturn from "../../components/planets/i/004-saturn.svg";
import venus from "../../components/planets/i/005-venus.svg";
import uranus from "../../components/planets/i/006-planet.svg";
import mercury from "../../components/planets/i/007-mercury.svg";
import neptune from "../../components/planets/i/008-neptune.svg";
import jupiter from "../../components/planets/i/jupiter.svg";
import { Topic } from "../../topic";
import { IPlanetCard } from "../ICard";

const planets: IPlanetCard[] = [
  { type: Topic.PLANETS, name: "Mercury", planet: mercury },
  { type: Topic.PLANETS, name: "Venus", planet: venus },
  { type: Topic.PLANETS, name: "Earth", planet: earth },
  { type: Topic.PLANETS, name: "Mars", planet: mars },
  { type: Topic.PLANETS, name: "Jupiter", planet: jupiter },
  { type: Topic.PLANETS, name: "Saturn", planet: saturn },
  { type: Topic.PLANETS, name: "Uranus", planet: uranus },
  { type: Topic.PLANETS, name: "Neptune", planet: neptune }
];

export const planetsLevel1 = () => planets;

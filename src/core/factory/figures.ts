import apple from "../../components/figure/i/apple.svg";
import bell from "../../components/figure/i/bell.svg";
import cake from "../../components/figure/i/cake.svg";
import dog from "../../components/figure/i/dog.svg";
import elephant from "../../components/figure/i/elephant.svg";
import fish from "../../components/figure/i/fish.svg";
import ghost from "../../components/figure/i/ghost.svg";
import hand from "../../components/figure/i/hand.svg";
import igloo from "../../components/figure/i/igloo.svg";
import jellyfish from "../../components/figure/i/jellyfish.svg";
import key from "../../components/figure/i/key.svg";
import light from "../../components/figure/i/light.svg";
import mitten from "../../components/figure/i/mitten.svg";
import net from "../../components/figure/i/net.svg";
import octopus from "../../components/figure/i/octopus.svg";
import pizza from "../../components/figure/i/pizza.svg";
import queen from "../../components/figure/i/queen.svg";
import robot from "../../components/figure/i/robot.svg";
import sun from "../../components/figure/i/sun.svg";
import tooth from "../../components/figure/i/tooth.svg";
import umbrella from "../../components/figure/i/umbrella.svg";
import volcano from "../../components/figure/i/volcano.svg";
import window from "../../components/figure/i/window.svg";
import xray from "../../components/figure/i/xray.svg";
import yolk from "../../components/figure/i/yolk.svg";
import zebra from "../../components/figure/i/zebra.svg";
import { Topic } from "../../topic";
import { ICard } from "../ICard";
import { shuffle } from "./utils";

const figures: ICard[] = [
  { type: Topic.FIGURES, figure: apple, letter: "A" },
  { type: Topic.FIGURES, figure: bell, letter: "B" },
  { type: Topic.FIGURES, figure: cake, letter: "C" },
  { type: Topic.FIGURES, figure: dog, letter: "D" },
  { type: Topic.FIGURES, figure: elephant, letter: "E" },
  { type: Topic.FIGURES, figure: fish, letter: "F" },
  { type: Topic.FIGURES, figure: ghost, letter: "G" },
  { type: Topic.FIGURES, figure: hand, letter: "H" },
  { type: Topic.FIGURES, figure: igloo, letter: "I" },
  { type: Topic.FIGURES, figure: jellyfish, letter: "J" },
  { type: Topic.FIGURES, figure: key, letter: "K" },
  { type: Topic.FIGURES, figure: light, letter: "L" },
  { type: Topic.FIGURES, figure: mitten, letter: "M" },
  { type: Topic.FIGURES, figure: net, letter: "N" },
  { type: Topic.FIGURES, figure: octopus, letter: "O" },
  { type: Topic.FIGURES, figure: pizza, letter: "P" },
  { type: Topic.FIGURES, figure: queen, letter: "Q" },
  { type: Topic.FIGURES, figure: robot, letter: "R" },
  { type: Topic.FIGURES, figure: sun, letter: "S" },
  { type: Topic.FIGURES, figure: tooth, letter: "T" },
  { type: Topic.FIGURES, figure: umbrella, letter: "U" },
  { type: Topic.FIGURES, figure: volcano, letter: "V" },
  { type: Topic.FIGURES, figure: window, letter: "W" },
  { type: Topic.FIGURES, figure: xray, letter: "X" },
  { type: Topic.FIGURES, figure: yolk, letter: "Y" },
  { type: Topic.FIGURES, figure: zebra, letter: "Z" }
];

export const imgAndLetter = () => shuffle(figures);

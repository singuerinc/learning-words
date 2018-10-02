import apple from "./components/figure/i/apple.svg";
import bell from "./components/figure/i/bell.svg";
import cake from "./components/figure/i/cake.svg";
import dog from "./components/figure/i/dog.svg";
import elephant from "./components/figure/i/elephant.svg";
import fish from "./components/figure/i/fish.svg";
import ghost from "./components/figure/i/ghost.svg";
import hand from "./components/figure/i/hand.svg";
import igloo from "./components/figure/i/igloo.svg";
import jellyfish from "./components/figure/i/jellyfish.svg";
import key from "./components/figure/i/key.svg";
import light from "./components/figure/i/light.svg";
import mitten from "./components/figure/i/mitten.svg";
import net from "./components/figure/i/net.svg";
import octopus from "./components/figure/i/octopus.svg";
import pizza from "./components/figure/i/pizza.svg";
import queen from "./components/figure/i/queen.svg";
import robot from "./components/figure/i/robot.svg";
import sun from "./components/figure/i/sun.svg";
import tooth from "./components/figure/i/tooth.svg";
import umbrella from "./components/figure/i/umbrella.svg";
import volcano from "./components/figure/i/volcano.svg";
import window from "./components/figure/i/window.svg";
import xray from "./components/figure/i/xray.svg";
import yolk from "./components/figure/i/yolk.svg";
import zebra from "./components/figure/i/zebra.svg";
import { CardType } from "./core/CardType";
import { ICard } from "./core/ICard";

const figures: ICard[] = [
  { type: CardType.FIGURE, figure: apple, letter: "A" },
  { type: CardType.FIGURE, figure: bell, letter: "B" },
  { type: CardType.FIGURE, figure: cake, letter: "C" },
  { type: CardType.FIGURE, figure: dog, letter: "D" },
  { type: CardType.FIGURE, figure: elephant, letter: "E" },
  { type: CardType.FIGURE, figure: fish, letter: "F" },
  { type: CardType.FIGURE, figure: ghost, letter: "G" },
  { type: CardType.FIGURE, figure: hand, letter: "H" },
  { type: CardType.FIGURE, figure: igloo, letter: "I" },
  { type: CardType.FIGURE, figure: jellyfish, letter: "J" },
  { type: CardType.FIGURE, figure: key, letter: "K" },
  { type: CardType.FIGURE, figure: light, letter: "L" },
  { type: CardType.FIGURE, figure: mitten, letter: "M" },
  { type: CardType.FIGURE, figure: net, letter: "N" },
  { type: CardType.FIGURE, figure: octopus, letter: "O" },
  { type: CardType.FIGURE, figure: pizza, letter: "P" },
  { type: CardType.FIGURE, figure: queen, letter: "Q" },
  { type: CardType.FIGURE, figure: robot, letter: "R" },
  { type: CardType.FIGURE, figure: sun, letter: "S" },
  { type: CardType.FIGURE, figure: tooth, letter: "T" },
  { type: CardType.FIGURE, figure: umbrella, letter: "U" },
  { type: CardType.FIGURE, figure: volcano, letter: "V" },
  { type: CardType.FIGURE, figure: window, letter: "W" },
  { type: CardType.FIGURE, figure: xray, letter: "X" },
  { type: CardType.FIGURE, figure: yolk, letter: "Y" },
  { type: CardType.FIGURE, figure: zebra, letter: "Z" }
];

export { figures };

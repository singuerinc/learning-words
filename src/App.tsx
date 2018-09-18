import Color from "color";
import * as OpenColor from "open-color";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";
import { Card } from "./components/Card";
import { ICard } from "./core/ICard";

import Apple from "./components/figure/i/apple.svg";
import Bell from "./components/figure/i/bell.svg";
import Cake from "./components/figure/i/cake.svg";
import Fish from "./components/figure/i/fish.svg";
import Hand from "./components/figure/i/hand.svg";
import Key from "./components/figure/i/key.svg";
import Light from "./components/figure/i/light.svg";
import Queen from "./components/figure/i/queen.svg";
import Robot from "./components/figure/i/robot.svg";
import Sun from "./components/figure/i/sun.svg";
import Tooth from "./components/figure/i/tooth.svg";
import Umbrella from "./components/figure/i/umbrella.svg";
import Window from "./components/figure/i/window.svg";
import Xray from "./components/figure/i/xray.svg";

const figures: ICard[] = [
  { figure: Apple, letter: "A" },
  { figure: Bell, letter: "B" },
  { figure: Cake, letter: "C" },
  { figure: Fish, letter: "F" },
  { figure: Hand, letter: "H" },
  { figure: Key, letter: "K" },
  { figure: Light, letter: "L" },
  { figure: Queen, letter: "Q" },
  { figure: Robot, letter: "R" },
  { figure: Sun, letter: "S" },
  { figure: Tooth, letter: "T" },
  { figure: Umbrella, letter: "U" },
  { figure: Window, letter: "W" },
  { figure: Xray, letter: "X" }
];

const colors = [
  OpenColor.red[9],
  OpenColor.pink[9],
  OpenColor.grape[9],
  OpenColor.violet[9],
  OpenColor.indigo[9],
  OpenColor.blue[9],
  OpenColor.cyan[9],
  OpenColor.teal[9],
  OpenColor.green[9],
  OpenColor.lime[9],
  OpenColor.yellow[9],
  OpenColor.orange[9]
];

interface IState {
  color: string;
  index: number;
}

const randomColor = () => ({
  color: colors[Math.floor(Math.random() * colors.length)]
});

const setIndex = (index: number) => ({
  index
});

class App extends React.PureComponent<{}, IState> {
  public state = {
    index: 0,
    ...randomColor()
  };

  public render() {
    const { color, index } = this.state;

    return (
      <Wrapper color={color}>
        <SwipeableViews
          enableMouseEvents={true}
          onChangeIndex={this.onIndexChange}
        >
          {figures.map((figure, idx) => (
            <Card key={idx} show={idx === index} color={color} card={figure} />
          ))}
        </SwipeableViews>
      </Wrapper>
    );
  }

  private onIndexChange = (index: number, indexLatest, meta) => {
    this.setState(randomColor);
    this.setState(setIndex(index));
  };
}

const Wrapper = styled<{ color: string }, "div">("div")`
  background-color: ${props =>
    Color(props.color)
      .darken(0.4)
      .string()};
  transition-property: background-color;
  transition-duration: 500ms;
  display: flex;
  > div {
    flex: 1 1 auto;
    max-width: 32rem;
    margin: 0 auto;
  }
`;

export { App };

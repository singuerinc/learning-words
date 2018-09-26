import Color = require("color");
import OpenColor from "open-color";
import addIndex from "ramda/es/addIndex";
import curry from "ramda/es/curry";
import map from "ramda/es/map";
import range from "ramda/es/range";
import sort from "ramda/es/sort";
import take from "ramda/es/take";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";
import { Card } from "./components/Card";
import { Figure } from "./components/figure/Figure";
import { Letter } from "./components/letter/Letter";
import { Home } from "./components/views/Home";
import { figures } from "./figures";

const mapIdx = addIndex(map);
const numbers: number[] = range(1, 100);
const shuffle = sort(() => 0.5 - Math.random());
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
  ""
);
const ltrs = take(20, shuffle(letters));
const nums = take(20, shuffle(numbers));
// const mix = shuffle([...figures, ...nums, ...ltrs]);

const colors = [
  OpenColor.lime[9],
  OpenColor.yellow[9],
  OpenColor.orange[9],
  OpenColor.red[9],
  OpenColor.pink[9],
  OpenColor.grape[9],
  OpenColor.violet[9],
  OpenColor.indigo[9],
  OpenColor.blue[9],
  OpenColor.cyan[9],
  OpenColor.teal[9],
  OpenColor.green[9]
];

const randomColor = (index: number, mod: number) => ({
  color: colors[index % mod]
});

const onIndexChange = (index: number) => {
  const color = randomColor(index, colors.length);
  const c6 = Color(color.color)
    .darken(0.6)
    .string();

  const c4 = Color(color.color)
    .darken(0.4)
    .string();

  const l4 = Color(color.color)
    .lighten(0.4)
    .string();

  const l6 = Color(color.color)
    .lighten(0.6)
    .string();

  const l8 = Color(color.color)
    .lighten(0.8)
    .string();

  (document.querySelector(".bg") as HTMLDivElement).style.backgroundColor = c6;

  document.querySelectorAll<HTMLDivElement>(".card").forEach((x, idx) => {
    if (idx === index) {
      x.style.backgroundColor = c4;
      x.style.borderLeftColor = l6;
      x.style.borderTopColor = l6;
      x.style.borderRightColor = l4;
      x.style.borderBottomColor = l4;
      const path = x.querySelector<SVGPathElement>(
        ".figure svg > path"
      ) as SVGPathElement;
      if (path) {
        path.style.fill = l8;
      }
    }
  });

  (document.querySelector<HTMLDivElement>(
    "[aria-hidden=false] .card"
  ) as HTMLDivElement).classList.add("show");
  document
    .querySelectorAll("[aria-hidden=true] .card")
    .forEach((x) => x.classList.remove("show"));
};

const updateMode = (arr: any[]) => ({
  elements: arr
});

interface IState {
  elements: any[];
}

class App extends React.PureComponent<{}, IState> {
  public state = {
    elements: []
  };

  public componentDidMount() {
    onIndexChange(0);
  }

  public render() {
    const isHome = this.state.elements.length === 0;
    const CardItem = (item) =>
      item.figure ? (
        <Figure card={item} />
      ) : (
        <Letter letter={item.toString()} />
      );
    return (
      <Wrapper className="bg">
        {isHome && (
          <div aria-hidden="false">
            <Card>
              <Home
                onClickOnFigures={this.mode(figures)}
                onClickOnNumbers={this.mode(nums)}
                onClickOnLetters={this.mode(ltrs)}
              />
            </Card>
          </div>
        )}
        {!isHome && (
          <SwipeableViews
            enableMouseEvents={true}
            onChangeIndex={onIndexChange}
          >
            {mapIdx(
              (item: any, idx: number) => (
                <Card key={idx}>{CardItem(item)}</Card>
              ),
              this.state.elements
            )}
          </SwipeableViews>
        )}
      </Wrapper>
    );
  }

  private mode = (arr: []) => () => {
    this.setState(updateMode(arr), () => onIndexChange(0));
  };
}

const Wrapper = styled.div`
  transition-property: background-color;
  transition-duration: 500ms;
  height: 100%;
  width: 100%;
  display: flex;
  > div {
    flex: 1 1 auto;
    max-width: 32rem;
    margin: 0 auto;
    height: 100%;
    align-self: center;
  }
  > div > div {
    height: 100%;
  }
`;

export { App };

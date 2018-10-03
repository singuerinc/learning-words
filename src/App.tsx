import addIndex from "ramda/es/addIndex";
import map from "ramda/es/map";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";
import { Card } from "./components/Card";
import { Home } from "./components/views/Home";
import { byIndex as colorByIndex, darken, lighten } from "./core/colors";
import { clocks } from "./core/factory/clocks";
import { factory } from "./core/factory/Factory";
import { imgAndLetter } from "./core/factory/figures";
import { alphabet, ltrsLowercase, ltrsUppercase } from "./core/factory/letters";
import { additions, nums, substractions } from "./core/factory/math";

const mapIdx = addIndex(map);
const q = (selector: string) => document.querySelector(selector);
const qAll = (selector: string) => document.querySelectorAll(selector);

const onIndexChange = (index: number) => {
  const color = colorByIndex(index);
  const c6 = darken(color, 0.6);
  const c4 = darken(color, 0.4);
  const l4 = lighten(color, 0.4);
  const l6 = lighten(color, 0.6);
  const l8 = lighten(color, 0.8);

  const bg = q(".bg") as HTMLDivElement; // FIXME: use ref
  bg.style.backgroundColor = c6;

  qAll(".card").forEach((x: HTMLElement, idx) => {
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

    return (
      <Wrapper className="bg">
        {isHome && (
          <div aria-hidden="false">
            <Card>
              <Home
                onClickOnClocks={this.mode(clocks())}
                onClickOnFigures={this.mode(imgAndLetter())}
                onClickOnNumbers={this.mode(nums())}
                onClickOnLowercase={this.mode(ltrsLowercase(alphabet))}
                onClickOnUppercase={this.mode(ltrsUppercase(alphabet))}
                onClickOnAddition={this.mode(additions())}
                onClickOnSubstractions={this.mode(substractions())}
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
                <Card key={idx}>{factory(item)}</Card>
              ),
              this.state.elements
            )}
          </SwipeableViews>
        )}
      </Wrapper>
    );
  }

  private mode = (arr: any[]) => (e: MouseEvent) => {
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

import Color from "color";
import * as OpenColor from "open-color";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";
import { Card } from "./components/Card";
import { figures } from "./figures";

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

  document.querySelectorAll<HTMLDivElement>(".card").forEach(x => {
    x.style.backgroundColor = c4;
    x.style.borderLeftColor = l6;
    x.style.borderTopColor = l6;
    x.style.borderRightColor = l4;
    x.style.borderBottomColor = l4;
    (x.querySelector<SVGPathElement>(
      "svg > path"
    ) as SVGPathElement).style.fill = l8;
  });

  (document.querySelector<HTMLDivElement>(
    "[aria-hidden=false] .card"
  ) as HTMLDivElement).classList.add("show");
  document
    .querySelectorAll("[aria-hidden=true] .card")
    .forEach(x => x.classList.remove("show"));
};

class App extends React.PureComponent {
  public componentDidMount() {
    onIndexChange(0);
  }

  public render() {
    return (
      <Wrapper className="bg">
        <SwipeableViews enableMouseEvents={true} onChangeIndex={onIndexChange}>
          {figures.map((figure, idx) => (
            <Card key={idx} card={figure} />
          ))}
        </SwipeableViews>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
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

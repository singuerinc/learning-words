import * as R from "ramda";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";
import { Card } from "./components/Card";
import { Home } from "./components/views/Home";
import { useMachine } from "@xstate/react";
import { byIndex as colorByIndex, darken, lighten } from "./core/colors";
import {
  clocksLevel1,
  clocksLevel2,
  dayOfTheWeek
} from "./core/factory/clocks";
import { factory } from "./core/factory/Factory";
import { imgAndLetter } from "./core/factory/figures";
import {
  alphabet,
  ltrsLowercase,
  ltrsUppercase,
  wordsLevel2
} from "./core/factory/letters";
import {
  additions,
  additionsLevel2,
  nums,
  romanNums,
  substractions,
  substractionsLevel2
} from "./core/factory/math";
import { planetsLevel1 } from "./core/factory/planets";
import { mapIdx, q, qAll } from "./core/utils";
import { machine } from "./machine";
import { Welcome } from "./components/welcome/welcome";
import { Planet } from "./components/planets/Planet";
import { useEffect, useLayoutEffect, useRef } from "react";

const onIndexChange = (index: number) => {
  const color = colorByIndex(index);
  const c6 = darken(color, 0.6);
  const c4 = darken(color, 0.4);
  const l4 = lighten(color, 0.4);
  const l6 = lighten(color, 0.6);
  const l8 = lighten(color, 0.8);

  const bg = q(".bg") as HTMLDivElement; // FIXME: use ref
  bg.style.backgroundColor = c6;

  qAll(".card").forEach((x: Element, idx) => {
    if (idx === index) {
      const el = x as HTMLDivElement;
      el.style.backgroundColor = c4;
      el.style.borderLeftColor = l6;
      el.style.borderTopColor = l6;
      el.style.borderRightColor = l4;
      el.style.borderBottomColor = l4;
      const path = el.querySelector<SVGPathElement>(
        ".figure svg > path"
      ) as SVGPathElement;
      if (path) {
        path.style.fill = l8;
      }
    }
  });

  const current = q("[aria-hidden=false] .card") as HTMLDivElement;
  const others = qAll("[aria-hidden=true] .card");

  current.classList.add("show");
  others.forEach(x => x.classList.remove("show"));
};

const updateMode = (arr: any[]) => ({
  elements: arr
});

interface IState {
  elements: any[];
}

export function View({ className }) {
  const ref = useRef(null);
  const [current, send] = useMachine(machine);
  const onClickOnSomething = () => send("GO_TO_PLANETS");

  let view;

  if (current.matches("welcome")) {
    view = <Welcome />;
  }

  if (current.matches("home")) {
    view = (
      <Card>
        <Home
          onClickOnClocksLevel1={onClickOnSomething}
          onClickOnClocksLevel2={onClickOnSomething}
          onClickOnFigures={onClickOnSomething}
          onClickOnNumbers={onClickOnSomething}
          onClickOnRomanNumbers={onClickOnSomething}
          onClickOnLowercase={onClickOnSomething}
          onClickOnUppercase={onClickOnSomething}
          onClickOnAddition={onClickOnSomething}
          onClickOnAdditionLevel2={onClickOnSomething}
          onClickOnSubstractions={onClickOnSomething}
          onClickOnSubstractionsLevel2={onClickOnSomething}
          onClickOnDaysOfTheWeek={onClickOnSomething}
          onClickOnWordsLevel2={onClickOnSomething}
          onClickOnPlanetsLevel1={onClickOnSomething}
        />
      </Card>
    );
  }

  if (current.matches("planets")) {
    const elements = planetsLevel1();
    view = (
      <SwipeableViews enableMouseEvents={true} onChangeIndex={onIndexChange}>
        {elements.map((item: any, idx: number) => (
          <Card
            key={idx}
            current={idx}
            total={elements.length}
            className="has-back-btn"
            back={() => send("GO_TO_HOME")}
          >
            <Planet card={item} />
          </Card>
        ))}
      </SwipeableViews>
    );
  }

  useEffect(() => {
    if (current.matches("home") || current.matches("planets")) {
      onIndexChange(0);
    }
  }, [ref.current]);

  return (
    <div ref={ref} className={`bg ${className}`}>
      <div aria-hidden="false">{view}</div>
    </div>
  );
}

// class App extends React.PureComponent<{}, IState> {
//   public state = {
//     elements: []
//   };

//   public componentDidMount() {
//     onIndexChange(0);
//   }

//   public render() {
//     const { elements } = this.state;
//     const isHome = R.equals(R.prop("length", elements), 0);

//     return (
//       <Wrapper className="bg">
//         {isHome && (
//           <div aria-hidden="false">
//             <Card>
//               <Home
//                 onClickOnClocksLevel1={this.mode(clocksLevel1())}
//                 onClickOnClocksLevel2={this.mode(clocksLevel2())}
//                 onClickOnFigures={this.mode(imgAndLetter())}
//                 onClickOnNumbers={this.mode(nums())}
//                 onClickOnRomanNumbers={this.mode(romanNums())}
//                 onClickOnLowercase={this.mode(ltrsLowercase(alphabet))}
//                 onClickOnUppercase={this.mode(ltrsUppercase(alphabet))}
//                 onClickOnAddition={this.mode(additions())}
//                 onClickOnAdditionLevel2={this.mode(additionsLevel2())}
//                 onClickOnSubstractions={this.mode(substractions())}
//                 onClickOnSubstractionsLevel2={this.mode(substractionsLevel2())}
//                 onClickOnDaysOfTheWeek={this.mode(dayOfTheWeek())}
//                 onClickOnWordsLevel2={this.mode(wordsLevel2())}
//                 onClickOnPlanetsLevel1={this.mode(planetsLevel1())}
//               />
//             </Card>
//           </div>
//         )}
//         {!isHome && (
// <SwipeableViews
//   enableMouseEvents={true}
//   onChangeIndex={onIndexChange}
// >
//   {mapIdx(
//     (item: any, idx: number) => (
//       <Card
//         key={idx}
//         current={idx}
//         total={elements.length}
//         className="has-back-btn"
//         back={() => this.mode([])()}
//       >
//         {factory(item)}
//       </Card>
//     ),
//     elements
//   )}
// </SwipeableViews>
//         )}
//       </Wrapper>
//     );
//   }

//   private mode = (arr: any[]) => (e?: MouseEvent) => {
//     this.setState(updateMode(arr), () => onIndexChange(0));
//   };
// }

export const App = styled(View)`
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

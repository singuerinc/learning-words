import { useMachine } from "@xstate/react";
import * as React from "react";
import { useEffect, useRef } from "react";
import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";
import { Card } from "./components/Card";
import { Clock } from "./components/clock/Clock";
import { Figure } from "./components/figure/Figure";
import { Letter } from "./components/letter/Letter";
import { Planet } from "./components/planets/Planet";
import { DayOfTheWeek } from "./components/time/DayOfTheWeek";
import { Home } from "./components/views/Home";
import { Welcome } from "./components/welcome/welcome";
import { byIndex as colorByIndex, darken, lighten } from "./core/colors";
import { q, qAll } from "./core/utils";
import { machine } from "./machine";
import { Topic } from "./topic";
import { topics } from "./topics";
import { RomanNum } from "./components/letter/RomanNum";
import { FrequentWord } from "./components/letter/FrequentWord";

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

export function View({ className }: { className: string }) {
  const ref = useRef(null);
  const [current, send] = useMachine(machine);
  const onClickOnTopic = (topic: Topic, level: number) =>
    send({ type: "TOPIC", topic, level });

  useEffect(() => {
    if (current.matches("home") || current.matches("topic")) {
      onIndexChange(0);
    }
  }, [ref.current, current.value, current.context.topic]);

  let view;

  if (current.matches("welcome")) {
    view = <Welcome />;
  }

  if (current.matches("home")) {
    view = (
      <div aria-hidden="false">
        <Card>
          <Home onClickOnTopic={onClickOnTopic} />
        </Card>
      </div>
    );
  }

  if (current.matches("topic")) {
    const { topic, level } = current.context;
    const elements = topics(level || 1, topic || Topic.PLANETS) || [];
    console.log({ topic, level, elements });

    view = (
      <SwipeableViews enableMouseEvents={true} onChangeIndex={onIndexChange}>
        {elements.map((item: any, idx: number) => (
          <Card
            key={idx}
            current={idx}
            total={elements.length}
            className="has-back-btn"
            back={() => send("GO_HOME")}
          >
            {topic === Topic.ADDITION && <Letter letter={item.letter} />}
            {topic === Topic.CALENDAR && <DayOfTheWeek day={item.day} />}
            {topic === Topic.CLOCK && <Clock card={item} />}
            {topic === Topic.FIGURES && <Figure card={item} />}
            {topic === Topic.LOWERCASE && <Letter letter={item.letter} />}
            {topic === Topic.PLANETS && <Planet card={item} />}
            {topic === Topic.ROMAN_NUMBERS && <RomanNum letter={item.letter} />}
            {topic === Topic.SUBTRACTION && <Letter letter={item.letter} />}
            {topic === Topic.UPPERCASE && <Letter letter={item.letter} />}
            {topic === Topic.WORDS && <FrequentWord letter={item.letter} />}
          </Card>
        ))}
      </SwipeableViews>
    );
  }

  return (
    <div ref={ref} className={`bg ${className}`}>
      {view}
    </div>
  );
}

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

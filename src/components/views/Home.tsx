import OpenColor from "open-color";
import * as React from "react";
import styled from "styled-components";
import { Topic } from "../../topic";
import {
  AUpper,
  Calendar,
  ClockLevel1,
  ClockLevel2,
  ELower,
  FiftyFive,
  FiftyMinusFifty,
  FiftyPlusFifty,
  OneMinusOne,
  PlanetsLevel1,
  Robot,
  RomanNums,
  TwoPlusTwo,
  Words
} from "./home/icons/HomeIcons";

const Title = styled.h1`
  font-size: 4em;
  font-family: "Varela Round", sans-serif;
  font-weight: bold;
  padding: 0;
  margin: 0.6em 0 0;
`;

interface IProps {
  className?: string;
  onClickOnTopic: (topic: Topic, level: number) => void;
}

const Wrapper = ({ className, onClickOnTopic }: IProps) => {
  const onClick = (topic: Topic, level: number) => () =>
    onClickOnTopic(topic, level);
  return (
    <div className={className}>
      <Title>Words!</Title>
      <h2>Letters - Level 1</h2>
      <ul>
        <li>
          <AUpper onClick={onClick(Topic.UPPERCASE, 1)} />
        </li>
        <li>
          <ELower onClick={onClick(Topic.LOWERCASE, 1)} />
        </li>
        <li>
          <Robot onClick={onClick(Topic.FIGURES, 1)} />
        </li>
      </ul>
      <h2>Words - Level 1</h2>
      <ul>
        <li>
          <Words onClick={onClick(Topic.WORDS, 1)} />
        </li>
      </ul>
      <h2>Maths - Level 1</h2>
      <ul>
        <li>
          <FiftyFive onClick={onClick(Topic.NUMBERS, 1)} />
        </li>
        <li>
          <TwoPlusTwo onClick={onClick(Topic.NUMBERS, 1)} />
        </li>
        <li>
          <OneMinusOne onClick={onClick(Topic.NUMBERS, 1)} />
        </li>
      </ul>
      <h2>Maths - Level 2</h2>
      <ul>
        <li>
          <FiftyPlusFifty onClick={onClick(Topic.NUMBERS, 2)} />
        </li>
        <li>
          <FiftyMinusFifty onClick={onClick(Topic.NUMBERS, 2)} />
        </li>
        <li>
          <RomanNums onClick={onClick(Topic.ROMAN_NUMBERS, 1)} />
        </li>
      </ul>
      <h2>Time</h2>
      <ul>
        <li>
          <ClockLevel1 onClick={onClick(Topic.CLOCK, 1)} />
        </li>
        <li>
          <ClockLevel2 onClick={onClick(Topic.CLOCK, 2)} />
        </li>
        <li>
          <Calendar onClick={onClick(Topic.CALENDAR, 1)} />
        </li>
      </ul>
      <h2>Planets</h2>
      <ul>
        <li>
          <PlanetsLevel1 onClick={onClick(Topic.PLANETS, 1)} />
        </li>
      </ul>
    </div>
  );
};

export const Home = styled(Wrapper)`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  border-radius: 1.5rem;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 1rem solid transparent;
  }

  ul li {
    flex: 1 1 50%;
    border: 0.5rem solid transparent;
  }

  h1 {
    color: ${OpenColor.lime[6]};
    text-align: center;
  }

  ${Title} {
    color: ${OpenColor.yellow[3]};
  }

  h2 {
    color: ${OpenColor.white};
    text-align: center;
    margin: 0 2rem;
    padding: 1rem 0;
    border-bottom: 2px dotted ${OpenColor.lime[6]};
  }
`;

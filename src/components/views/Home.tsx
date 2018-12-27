import OpenColor from "open-color";
import * as React from "react";
import styled from "styled-components";
import {
  AUpper,
  Calendar,
  Clock,
  ELower,
  FiftyFive,
  FiftyMinusFifty,
  FiftyPlusFifty,
  OneMinusOne,
  Robot,
  RomanNums,
  TwoPlusTwo
} from "./home/icons/HomeIcons";

interface IProps {
  className?: string;
  onClickOnClocks: (e: MouseEvent) => void;
  onClickOnFigures: (e: MouseEvent) => void;
  onClickOnNumbers: (e: MouseEvent) => void;
  onClickOnRomanNumbers: (e: MouseEvent) => void;
  onClickOnLowercase: (e: MouseEvent) => void;
  onClickOnUppercase: (e: MouseEvent) => void;
  onClickOnAddition: (e: MouseEvent) => void;
  onClickOnAdditionLevel2: (e: MouseEvent) => void;
  onClickOnSubstractions: (e: MouseEvent) => void;
  onClickOnSubstractionsLevel2: (e: MouseEvent) => void;
  onClickOnDaysOfTheWeek: (e: MouseEvent) => void;
  onClickOnWordsLevel2: (e: MouseEvent) => void;
}

const delay = (time: number, callback: (e: MouseEvent) => void) => () =>
  setTimeout(callback, time);

const Wrapper = ({
  className,
  onClickOnClocks,
  onClickOnFigures,
  onClickOnNumbers,
  onClickOnRomanNumbers,
  onClickOnLowercase,
  onClickOnUppercase,
  onClickOnAddition,
  onClickOnAdditionLevel2,
  onClickOnSubstractions,
  onClickOnSubstractionsLevel2,
  onClickOnDaysOfTheWeek,
  onClickOnWordsLevel2
}: IProps) => (
  <div className={className}>
    <h1>Learning time!</h1>
    <h2>Letters - Level 1</h2>
    <ul>
      <li>
        <AUpper onClick={delay(200, onClickOnUppercase)} />
      </li>
      <li>
        <ELower onClick={delay(200, onClickOnLowercase)} />
      </li>
      <li>
        <Robot onClick={delay(200, onClickOnFigures)} />
      </li>
    </ul>
    <h2>Letters - Level 2</h2>
    <ul>
      <li>
        <ELower onClick={delay(200, onClickOnWordsLevel2)} />
      </li>
    </ul>
    <h2>Maths - Level 1</h2>
    <ul>
      <li>
        <FiftyFive onClick={delay(200, onClickOnNumbers)} />
      </li>
      <li>
        <TwoPlusTwo onClick={delay(200, onClickOnAddition)} />
      </li>
      <li>
        <OneMinusOne onClick={delay(200, onClickOnSubstractions)} />
      </li>
    </ul>
    <h2>Maths - Level 2</h2>
    <ul>
      <li>
        <FiftyPlusFifty onClick={delay(200, onClickOnAdditionLevel2)} />
      </li>
      <li>
        <FiftyMinusFifty onClick={delay(200, onClickOnSubstractionsLevel2)} />
      </li>
      <li>
        <RomanNums onClick={delay(200, onClickOnRomanNumbers)} />
      </li>
    </ul>
    <h2>Time</h2>
    <ul>
      <li>
        <Clock onClick={delay(200, onClickOnClocks)} />
      </li>
      <li>
        <Calendar onClick={delay(200, onClickOnDaysOfTheWeek)} />
      </li>
    </ul>
  </div>
);
const Home = styled(Wrapper)`
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

  h2 {
    color: ${OpenColor.white};
    text-align: center;
    margin: 0 2rem;
    padding: 1rem 0;
    border-bottom: 2px dotted ${OpenColor.lime[6]};
  }
`;

export { Home };

import OpenColor from "open-color";
import * as React from "react";
import styled from "styled-components";
import {
  AUpper,
  Clock,
  ELower,
  FiftyFive,
  OneMinusOne,
  Robot,
  TwoPlusTwo
} from "./home/icons/HomeIcons";

interface IProps {
  className?: string;
  onClickOnClocks: () => void;
  onClickOnFigures: () => void;
  onClickOnNumbers: () => void;
  onClickOnLowercase: () => void;
  onClickOnUppercase: () => void;
  onClickOnAddition: () => void;
  onClickOnSubstractions: () => void;
}

const delay = (time, callback) => () => setTimeout(() => callback(), time);

const Wrapper = ({
  className,
  onClickOnClocks,
  onClickOnFigures,
  onClickOnNumbers,
  onClickOnLowercase,
  onClickOnUppercase,
  onClickOnAddition,
  onClickOnSubstractions
}: IProps) => (
  <div className={className}>
    <h1>Learning time!</h1>
    <h2>Letters</h2>
    <ul>
      <li>
        <Robot onClick={delay(200, onClickOnFigures)} />
      </li>
      <li>
        <AUpper onClick={delay(200, onClickOnUppercase)} />
      </li>
      <li>
        <ELower onClick={delay(200, onClickOnLowercase)} />
      </li>
    </ul>
    <h2>Maths</h2>
    <ul>
      <li>
        <FiftyFive onClick={delay(200, onClickOnNumbers)} />
      </li>
      <li>
        <OneMinusOne onClick={delay(200, onClickOnSubstractions)} />
      </li>
      <li>
        <TwoPlusTwo onClick={delay(200, onClickOnAddition)} />
      </li>
    </ul>
    <h2>Time</h2>
    <ul>
      <li>
        <Clock onClick={delay(200, onClickOnClocks)} />
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

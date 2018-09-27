import OpenColor from "open-color";
import * as React from "react";
import styled from "styled-components";
import {
  AUpper,
  ELower,
  FiftyFive,
  OneMinusOne,
  Robot,
  TwoPlusTwo
} from "./home/icons/HomeIcons";

interface IProps {
  className?: string;
  onClickOnFigures: () => void;
  onClickOnNumbers: () => void;
  onClickOnLowercase: () => void;
  onClickOnUppercase: () => void;
  onClickOnSums: () => void;
  onClickOnSubstractions: () => void;
}

const Wrapper = ({
  className,
  onClickOnFigures,
  onClickOnNumbers,
  onClickOnLowercase,
  onClickOnUppercase,
  onClickOnSums,
  onClickOnSubstractions
}: IProps) => (
  <div className={className}>
    <h1>Words</h1>
    <ul>
      <li>
        <Robot onClick={onClickOnFigures} />
      </li>
      <li>
        <FiftyFive onClick={onClickOnNumbers} />
      </li>
      <li>
        <OneMinusOne onClick={onClickOnSubstractions} />
      </li>
      <li>
        <TwoPlusTwo onClick={onClickOnSums} />
      </li>
      <li>
        <AUpper onClick={onClickOnUppercase} />
      </li>
      <li>
        <ELower onClick={onClickOnLowercase} />
      </li>
    </ul>
  </div>
);
const Home = styled(Wrapper)`
  margin: 0;
  padding: 0;
  width: 100%;
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
    border: 1.5rem solid transparent;
  }

  h1 {
    color: ${OpenColor.lime[6]};
    text-align: center;
  }
`;

export { Home };

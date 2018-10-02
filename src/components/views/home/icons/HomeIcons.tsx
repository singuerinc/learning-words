import OpenColor from "open-color";
import * as React from "react";
import styled from "styled-components";
import OneMinusOneIcon from "./1_minus_1.svg";
import TwoPlusTwoIcon from "./2_plus_2.svg";
import FiftyFiveIcon from "./55.svg";
import AUpperIcon from "./A_upper.svg";
import ClockIcon from "./clock.svg";
import ELowerIcon from "./e_lower.svg";
import RobotIcon from "./robot.svg";

const Icon = styled.div`
  span {
    border-radius: 50%;
    border: 8px solid white;
    background-color: ${(prop) => prop.color};
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto;
    box-shadow: 0 0 20px rgba(255, 255, 0, 0.4);
  }

  h3 {
    color: ${OpenColor.yellow[4]};
    margin: 0.6rem 0;
    padding: 0;
    font-size: 1rem;
    text-align: center;
  }

  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &:hover,
  &:active {
    transform: scale(1.4, 1.4);
  }
`;

const OneMinusOne = (props) => (
  <Icon {...props} color={OpenColor.red[4]}>
    <span dangerouslySetInnerHTML={{ __html: OneMinusOneIcon }} />
    <h3>Substraction</h3>
  </Icon>
);

const TwoPlusTwo = (props) => (
  <Icon {...props} color={OpenColor.orange[4]}>
    <span dangerouslySetInnerHTML={{ __html: TwoPlusTwoIcon }} />
    <h3>Addition</h3>
  </Icon>
);

const FiftyFive = (props) => (
  <Icon {...props} color={OpenColor.green[4]}>
    <span dangerouslySetInnerHTML={{ __html: FiftyFiveIcon }} />
    <h3>Numbers</h3>
  </Icon>
);

const AUpper = (props) => (
  <Icon {...props} color={OpenColor.cyan[4]}>
    <span dangerouslySetInnerHTML={{ __html: AUpperIcon }} />
    <h3>Uppercase</h3>
  </Icon>
);

const ELower = (props) => (
  <Icon {...props} color={OpenColor.lime[4]}>
    <span dangerouslySetInnerHTML={{ __html: ELowerIcon }} />
    <h3>Lowercase</h3>
  </Icon>
);

const Robot = (props) => (
  <Icon {...props} color={OpenColor.orange[4]}>
    <span dangerouslySetInnerHTML={{ __html: RobotIcon }} />
    <h3>Figures</h3>
  </Icon>
);

const Clock = (props) => (
  <Icon {...props} color={OpenColor.violet[4]}>
    <span dangerouslySetInnerHTML={{ __html: ClockIcon }} />
    <h3>Clocks</h3>
  </Icon>
);

export { OneMinusOne, TwoPlusTwo, FiftyFive, AUpper, ELower, Robot, Clock };

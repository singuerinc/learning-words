import OpenColor from "open-color";
import * as React from "react";
import styled from "styled-components";
import OneMinusOneIcon from "./1_minus_1.svg";
import TwoPlusTwoIcon from "./2_plus_2.svg";
import FiftyFiveIcon from "./55.svg";
import AUpperIcon from "./A_upper.svg";
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
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  }
  h2 {
    color: white;
    margin: 0.3rem 0;
    padding: 0;
    font-size: 1rem;
    text-align: center;
  }
`;

const OneMinusOne = (props) => (
  <Icon {...props} color={OpenColor.red[4]}>
    <span dangerouslySetInnerHTML={{ __html: OneMinusOneIcon }} />
    <h2>Substraction</h2>
  </Icon>
);

const TwoPlusTwo = (props) => (
  <Icon {...props} color={OpenColor.orange[4]}>
    <span dangerouslySetInnerHTML={{ __html: TwoPlusTwoIcon }} />
    <h2>Addition</h2>
  </Icon>
);

const FiftyFive = (props) => (
  <Icon {...props} color={OpenColor.green[4]}>
    <span dangerouslySetInnerHTML={{ __html: FiftyFiveIcon }} />
    <h2>Numbers</h2>
  </Icon>
);

const AUpper = (props) => (
  <Icon {...props} color={OpenColor.cyan[4]}>
    <span dangerouslySetInnerHTML={{ __html: AUpperIcon }} />
    <h2>Uppercase</h2>
  </Icon>
);

const ELower = (props) => (
  <Icon {...props} color={OpenColor.lime[4]}>
    <span dangerouslySetInnerHTML={{ __html: ELowerIcon }} />
    <h2>Lowercase</h2>
  </Icon>
);

const Robot = (props) => (
  <Icon {...props} color={OpenColor.orange[4]}>
    <span dangerouslySetInnerHTML={{ __html: RobotIcon }} />
    <h2>Figures</h2>
  </Icon>
);

export { OneMinusOne, TwoPlusTwo, FiftyFive, AUpper, ELower, Robot };

import OpenColor from "open-color";
import * as React from "react";
import styled from "styled-components";
import OneMinusOneIcon from "./1_minus_1.svg";
import TwoPlusTwoIcon from "./2_plus_2.svg";
import FiftyMinusFiftyIcon from "./50_minus_50.svg";
import FiftyPlusFiftyIcon from "./50_plus_50.svg";
import FiftyFiveIcon from "./55.svg";
import AUpperIcon from "./A_upper.svg";
import CalendarIcon from "./calendar.svg";
import ClockIcon from "./clock.svg";
import ELowerIcon from "./e_lower.svg";
import RobotIcon from "./robot.svg";
import RomanNum4 from "./roman_4.svg";

interface IIcon {
  children?: Element[];
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

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

const OneMinusOne = (props: IIcon) => (
  <Icon {...props} color={OpenColor.red[4]}>
    <span dangerouslySetInnerHTML={{ __html: OneMinusOneIcon }} />
    <h3>Substraction</h3>
  </Icon>
);

const TwoPlusTwo = (props: IIcon) => (
  <Icon {...props} color={OpenColor.orange[4]}>
    <span dangerouslySetInnerHTML={{ __html: TwoPlusTwoIcon }} />
    <h3>Addition</h3>
  </Icon>
);

const FiftyPlusFifty = (props: IIcon) => (
  <Icon {...props} color={OpenColor.red[8]}>
    <span dangerouslySetInnerHTML={{ __html: FiftyPlusFiftyIcon }} />
    <h3>Addition</h3>
  </Icon>
);

const FiftyMinusFifty = (props: IIcon) => (
  <Icon {...props} color={OpenColor.green[8]}>
    <span dangerouslySetInnerHTML={{ __html: FiftyMinusFiftyIcon }} />
    <h3>Substraction</h3>
  </Icon>
);

const RomanNums = (props: IIcon) => (
  <Icon {...props} color={OpenColor.orange[8]}>
    <span dangerouslySetInnerHTML={{ __html: RomanNum4 }} />
    <h3>Romans</h3>
  </Icon>
);

const FiftyFive = (props: IIcon) => (
  <Icon {...props} color={OpenColor.green[4]}>
    <span dangerouslySetInnerHTML={{ __html: FiftyFiveIcon }} />
    <h3>Numbers</h3>
  </Icon>
);

const AUpper = (props: IIcon) => (
  <Icon {...props} color={OpenColor.cyan[4]}>
    <span dangerouslySetInnerHTML={{ __html: AUpperIcon }} />
    <h3>Uppercase</h3>
  </Icon>
);

const ELower = (props: IIcon) => (
  <Icon {...props} color={OpenColor.lime[4]}>
    <span dangerouslySetInnerHTML={{ __html: ELowerIcon }} />
    <h3>Lowercase</h3>
  </Icon>
);

const Words = (props: IIcon) => (
  <Icon {...props} color={OpenColor.blue[4]}>
    <span dangerouslySetInnerHTML={{ __html: ELowerIcon }} />
    <h3>Words</h3>
  </Icon>
);

const Robot = (props: IIcon) => (
  <Icon {...props} color={OpenColor.orange[4]}>
    <span dangerouslySetInnerHTML={{ __html: RobotIcon }} />
    <h3>Figures</h3>
  </Icon>
);

const ClockLevel1 = (props: IIcon) => (
  <Icon {...props} color={OpenColor.violet[4]}>
    <span dangerouslySetInnerHTML={{ __html: ClockIcon }} />
    <h3>Clocks Level 1</h3>
  </Icon>
);

const ClockLevel2 = (props: IIcon) => (
  <Icon {...props} color={OpenColor.green[4]}>
    <span dangerouslySetInnerHTML={{ __html: ClockIcon }} />
    <h3>Clocks Level 2</h3>
  </Icon>
);

const Calendar = (props: IIcon) => (
  <Icon {...props} color={OpenColor.red[4]}>
    <span dangerouslySetInnerHTML={{ __html: CalendarIcon }} />
    <h3>Days</h3>
  </Icon>
);

export {
  OneMinusOne,
  TwoPlusTwo,
  FiftyPlusFifty,
  FiftyMinusFifty,
  FiftyFive,
  AUpper,
  ELower,
  Robot,
  ClockLevel1,
  ClockLevel2,
  Calendar,
  RomanNums,
  Words
};

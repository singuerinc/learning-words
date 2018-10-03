import * as React from "react";
import styled from "styled-components";
import { ICard, IClockCard } from "../../core/ICard";
import { Image } from "../figure/Image";
import clock from "../views/clocks/clock.svg";

interface IProps {
  card: IClockCard;
}

const timeToDeg = (time: Date) => [
  Math.floor((time.getHours() * 360) / 24),
  Math.floor((time.getMinutes() * 360) / 60)
];

const Clock = ({ card }: IProps) => (
  <Wrapper className="figure" time={timeToDeg(card.time)}>
    <ClockCenter />
    <Image figure={clock} />
  </Wrapper>
);

const ClockCenter = styled.span`
  display: block;
  background-color: white;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  > div {
    position: relative;
  }

  > div::before {
    content: "";
    display: block;
    background-color: white;
    width: 8px;
    height: 40px;
    position: absolute;
    top: calc(50% - 40px);
    left: calc(50% - 4px);
    transform: rotate(${({ time }: { time: number[] }) => time[0]}deg);
    transform-origin: bottom center;
    border-radius: 4px;
  }

  > div::after {
    content: "";
    display: block;
    background-color: white;
    width: 8px;
    height: 80px;
    position: absolute;
    top: calc(50% - 80px);
    left: calc(50% - 4px);
    transform: rotate(${({ time }: { time: number[] }) => time[1]}deg);
    transform-origin: bottom center;
    border-radius: 4px;
  }
`;

const LettersContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export { Clock };

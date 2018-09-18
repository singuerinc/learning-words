import Color from "color";
import * as React from "react";
import styled from "styled-components";
import { ICard } from "../core/ICard";
import { Figure } from "./figure/Figure";

interface IProps {
  card: ICard;
  color: string;
  show: boolean;
}

const Card = ({ card, color, show }: IProps) => (
  <Wrapper>
    <StyledCard className={show ? "show" : ""} color={color}>
      <Figure card={card} />
    </StyledCard>
  </Wrapper>
);

const StyledCard = styled<{ color: string }, "div">("div")`
  border: 4px dashed
    ${props =>
      Color(props.color)
        .lighten(0.4)
        .string()};
  background-color: ${props => props.color};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  margin: 1rem;
  flex: 1;
  transform: scale3d(0.7, 0.7, 1) translate(0, 0);
  transition-property: background-color, transform;
  transition-duration: 1s;

  &.show {
    transform: scale3d(1, 1, 1) translate(0, 0);
  }

  svg path {
    transition-duration: 1s;
    transition-property: fill;
    fill: ${props =>
      Color(props.color)
        .lighten(0.7)
        .string()};
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

export { Card };

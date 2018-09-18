import Color from "color";
import * as React from "react";
import styled from "styled-components";
import { ICard } from "../core/ICard";
import { Figure } from "./figure/Figure";

interface IProps {
  card: ICard;
}

const Card = ({ card }: IProps) => (
  <Wrapper>
    <StyledCard className="card">
      <Figure card={card} />
    </StyledCard>
  </Wrapper>
);

const StyledCard = styled.div`
  border: 4px solid;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
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
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

export { Card };

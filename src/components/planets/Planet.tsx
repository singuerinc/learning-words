import * as React from "react";
import styled from "styled-components";
import { IPlanetCard } from "../../core/ICard";
import { FigureWrapper, Image } from "../figure/Image";

interface IProps {
  card: IPlanetCard;
}

export const Planet = ({ card }: IProps) => (
  <Wrapper>
    <Image figure={card.planet} />
    <h1>{card.name}</h1>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  h1 {
    color: white;
  }

  ${FigureWrapper} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    svg {
      width: 75%;
      path {
        fill: auto;
      }
    }
  }
`;

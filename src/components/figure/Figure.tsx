import * as React from "react";
import styled from "styled-components";
import { ICard } from "../../core/ICard";
import { Image } from "./Image";
import { Lower } from "./Lower";
import { Upper } from "./Upper";

interface IProps {
  card: ICard;
}

const Figure = ({ card }: IProps) => (
  <Wrapper className="figure">
    <Image figure={card.figure} />
    <LettersContainer>
      <Upper letter={card.letter} />
      <Lower letter={card.letter} />
    </LettersContainer>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const LettersContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export { Figure };

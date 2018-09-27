import * as React from "react";
import styled from "styled-components";

interface IProps {
  letter: string;
}

const Letter = ({ letter }: IProps) => <StyledLetter>{letter}</StyledLetter>;

const StyledLetter = styled.h1`
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  font-size: 12rem;
  font-weight: bold;
  color: white;
`;

export { Letter };

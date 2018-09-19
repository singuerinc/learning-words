import * as React from "react";
import styled from "styled-components";

interface IProps {
  letter: string;
}

const Lower = ({ letter }: IProps) => <StyledLower>{letter}</StyledLower>;

const StyledLower = styled.h1`
  margin: 0.5rem;
  padding: 0;
  font-size: 5rem;
  font-weight: bold;
  color: white;
  text-transform: lowercase;
`;

export { Lower };

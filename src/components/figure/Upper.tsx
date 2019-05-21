import * as React from "react";
import styled from "styled-components";

interface IProps {
  letter: string;
}

export const Upper = ({ letter }: IProps) => (
  <StyledUpper>{letter}</StyledUpper>
);

const StyledUpper = styled.h1`
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  font-size: 6rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
`;

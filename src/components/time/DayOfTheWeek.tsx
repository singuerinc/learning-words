import * as React from "react";
import styled from "styled-components";

interface IProps {
  day: string;
}

const DayOfTheWeek = ({ day }: IProps) => <StyledLetter>{day}</StyledLetter>;

const StyledLetter = styled.h1`
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  font-size: 3rem;
  font-weight: bold;
  color: white;
`;

export { DayOfTheWeek };

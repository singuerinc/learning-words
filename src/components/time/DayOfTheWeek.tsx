import * as React from "react";
import styled from "styled-components";

interface IProps {
  day: string;
}

export const DayOfTheWeek = ({ day }: IProps) => {
  const View = styled.h1`
    margin: 0.5rem 0;
    padding: 0.5rem 0;
    font-size: 3rem;
    font-weight: bold;
    color: white;
  `;
  return <View>{day}</View>;
};

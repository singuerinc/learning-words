import * as React from "react";
import styled from "styled-components";

interface IProps {
  letter: string;
}

export const Lower = ({ letter }: IProps) => {
  const View = styled.h1`
    margin: 0.5rem;
    padding: 0;
    font-size: 5rem;
    font-weight: bold;
    color: white;
    text-transform: lowercase;
  `;
  return <View>{letter}</View>;
};

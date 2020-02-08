import * as React from "react";
import styled from "styled-components";

interface IProps {
  letter: string;
}

export const RomanNum = ({ letter }: IProps) => {
  const View = styled.h1`
    margin: 0.5rem 0;
    padding: 0.5rem 0;
    font-size: 9rem;
    font-weight: normal;
    color: white;
    word-break: break-word;
    text-align: center;
    line-height: 0.7em;
    font-family: serif;
  `;
  return <View dangerouslySetInnerHTML={{ __html: letter }} />;
};

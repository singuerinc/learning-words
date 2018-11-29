import * as React from "react";
import styled from "styled-components";

interface IProps {
  letter: string;
}

const Letter = ({ letter }: IProps) => (
  <StyledLetter dangerouslySetInnerHTML={{ __html: letter }} />
);

const StyledLetter = styled.h1`
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  font-size: 11rem;
  font-weight: bold;
  color: white;
  word-break: break-word;
  text-align: center;
  line-height: 0.7em;
`;

export { Letter };

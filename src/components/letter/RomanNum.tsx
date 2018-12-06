import * as React from "react";
import styled from "styled-components";

interface IProps {
  letter: string;
}

const RomanNum = ({ letter }: IProps) => (
  <StyledLetter dangerouslySetInnerHTML={{ __html: letter }} />
);

const StyledLetter = styled.h1`
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  font-size: 14rem;
  font-weight: normal;
  color: white;
  word-break: break-word;
  text-align: center;
  line-height: 0.7em;
  font-family: serif;
`;

export { RomanNum };

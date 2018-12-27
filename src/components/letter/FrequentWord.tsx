import * as React from "react";
import styled from "styled-components";

interface IProps {
  letter: string;
}

const FrequentWord = ({ letter }: IProps) => (
  <StyledLetter
    numChars={letter.length}
    dangerouslySetInnerHTML={{ __html: letter }}
  />
);

const StyledLetter = styled<{ numChars: number }, "h1">("h1")`
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.numChars > 4 ? 5 : 6)}rem;
  font-weight: normal;
  color: white;
  word-break: break-word;
  text-align: center;
  line-height: 0.7em;
`;

export { FrequentWord };

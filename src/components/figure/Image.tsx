import * as React from "react";
import styled from "styled-components";

export const Image = ({ figure }: { figure: any }) => (
  <FigureWrapper dangerouslySetInnerHTML={{ __html: figure }} />
);

const FigureWrapper = styled.div`
  width: 70%;
  svg path {
    fill: white;
  }
`;

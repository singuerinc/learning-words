import * as React from "react";
import styled from "styled-components";

export const Image = ({ figure }: { figure: any }) => (
  <FigureWrapper dangerouslySetInnerHTML={{ __html: figure }} />
);

export const FigureWrapper = styled.div`
  width: 70%;
`;

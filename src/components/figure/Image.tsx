import * as React from "react";
import styled from "styled-components";

export const FigureWrapper = styled.div`
  width: 70%;
`;

export const Image = ({ figure }: { figure: any }) => {
  return <FigureWrapper dangerouslySetInnerHTML={{ __html: figure }} />;
};

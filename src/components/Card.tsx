import * as React from "react";
import styled from "styled-components";

interface IProps {
  children: JSX.Element;
  className?: string;
}

const Card = ({ children, className = "" }: IProps) => (
  <Wrapper>
    <StyledCard className={`${"card "}`.concat(className)}>
      {children}
    </StyledCard>
  </Wrapper>
);

const StyledCard = styled.div`
  border: 4px solid;
  box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.6);
  border-radius: 1.5rem;
  margin: 1rem;
  flex: 1;
  transform: scale3d(0.7, 0.7, 1) translate(0, 0);
  transition-property: background-color, transform;
  transition-duration: 1s;
  display: flex;
  justify-content: center;
  align-items: center;

  &.show {
    transform: scale3d(1, 1, 1) translate(0, 0);
  }

  svg path {
    transition-duration: 1s;
    transition-property: fill;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

export { Card };

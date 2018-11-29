import * as React from "react";
import styled from "styled-components";

interface IProps {
  children: JSX.Element;
  className?: string;
  back?: () => void;
}

const Card = ({ children, back = () => {}, className = "" }: IProps) => (
  <Wrapper>
    <BackButton onClick={back}>←</BackButton>
    <StyledCard className={`${"card "}`.concat(className)}>
      {children}
    </StyledCard>
  </Wrapper>
);

const BackButton = styled.div`
  display: flex;
  position: absolute;
  top: 2rem;
  left: 2rem;
  background-color: rgba(255, 255, 255, 0.03);
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 2.3rem;
  border-radius: 5rem;
  padding: 0.6rem 0.5rem 0.4rem;
  line-height: 2rem;
  width: 2.75rem;
  height: 2.75rem;
  cursor: pointer;
`;

const StyledCard = styled.div`
  position: relative;
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
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAANklEQVQoU2NkIAIwEqFGipAiKQYGhmeEFIEtwqUIbALMKdgUoSjAZxKKf5BNwjAB3TqcCkAKAW9cBSRvYfskAAAAAElFTkSuQmCC");

  &.show {
    transform: scale3d(1, 1, 1) translate(0, 0);
  }

  svg path {
    transition-duration: 1s;
    transition-property: fill;
  }

  ${BackButton} {
    display: none;
  }

  &.has-back-btn ${BackButton} {
    display: flex;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

export { Card };

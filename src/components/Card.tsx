import * as React from "react";
import styled from "styled-components";

interface IProps {
  current?: number;
  total?: number;
  children: JSX.Element;
  className?: string;
  back?: () => void;
}

export const Card = ({
  current,
  total,
  children,
  back = () => {},
  className = ""
}: IProps) => (
  <Wrapper>
    <StyledCard className={`${"card "}`.concat(className)}>
      <BackButton onClick={back}>x</BackButton>
      {typeof current !== "undefined" && (
        <Progress>{`${current + 1}/${total}`}</Progress>
      )}
      {children}
    </StyledCard>
  </Wrapper>
);

const BackButton = styled.div`
  font-family: "Varela Round", sans-serif;
  font-weight: 400;
  display: flex;
  position: absolute;
  z-index: 1;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 2.3rem;
  border-radius: 5rem;
  padding: 0.3rem 0.5rem 0.4rem;
  line-height: 2rem;
  width: 2.75rem;
  height: 2.75rem;
  cursor: pointer;
`;

const Progress = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  border-radius: 5rem;
  padding: 0.6rem 0.5rem 0.4rem;
  cursor: pointer;
  color: white;
  opacity: 0.5;
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

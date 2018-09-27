import OpenColor from "open-color";
import * as React from "react";
import styled from "styled-components";
import Letters from "../icons/books.svg";
import FiguresIcon from "../icons/figures.svg";
import NumbersIcon from "../icons/numbers.svg";
import Sum from "../icons/sum.svg";

interface IProps {
  className?: string;
  onClickOnFigures: () => void;
  onClickOnNumbers: () => void;
  onClickOnLowercase: () => void;
  onClickOnUppercase: () => void;
  onClickOnSums: () => void;
  onClickOnSubstractions: () => void;
}

const Wrapper = ({
  className,
  onClickOnFigures,
  onClickOnNumbers,
  onClickOnLowercase,
  onClickOnUppercase,
  onClickOnSums,
  onClickOnSubstractions
}: IProps) => (
  <div className={className}>
    <h1>Words</h1>
    <ul>
      <li
        dangerouslySetInnerHTML={{ __html: FiguresIcon }}
        onClick={onClickOnFigures}
      />
      <li
        dangerouslySetInnerHTML={{ __html: NumbersIcon }}
        onClick={onClickOnNumbers}
      />
      <li
        dangerouslySetInnerHTML={{ __html: Letters }}
        onClick={onClickOnLowercase}
      />
      <li
        dangerouslySetInnerHTML={{ __html: Letters }}
        onClick={onClickOnUppercase}
      />
      <li dangerouslySetInnerHTML={{ __html: Sum }} onClick={onClickOnSums} />
      <li
        dangerouslySetInnerHTML={{ __html: Sum }}
        onClick={onClickOnSubstractions}
      />
      <li />
    </ul>
  </div>
);
const Home = styled(Wrapper)`
  margin: 0;
  padding: 0;
  width: 100%;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 1rem solid transparent;
  }

  ul li {
    flex: 1 1 50%;
    border: 1.5rem solid transparent;
  }

  h1 {
    color: ${OpenColor.lime[6]};
    text-align: center;
  }

  svg path:nth-child(2) {
    fill: ${OpenColor.lime[6]};
  }
`;

export { Home };

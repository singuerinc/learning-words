import { shallow } from "enzyme";
import * as React from "react";
import { Cloudy } from "../../../icons/Cloudy";
import { Night } from "../../../icons/Night";
import { Sunny } from "../../../icons/Sunny";
import { ThemeButton } from "../ThemeButton";

describe("<ThemeButton />", () => {
  describe("children", () => {
    it("should contain a <Night /> component when theme is 0", () => {
      const props = {
        onClick: () => {
          //
        },
        theme: 0
      };

      const wrapper = shallow(<ThemeButton {...props} />);
      expect(wrapper.find(Night)).toHaveLength(1);
    });

    it("should contain a <Cloudy /> component when theme is 1", () => {
      const props = {
        onClick: () => {
          //
        },
        theme: 1
      };

      const wrapper = shallow(<ThemeButton {...props} />);
      expect(wrapper.find(Cloudy)).toHaveLength(1);
    });

    it("should contain a <Sunny /> component when theme is 2", () => {
      const props = {
        onClick: () => {
          //
        },
        theme: 2
      };

      const wrapper = shallow(<ThemeButton {...props} />);
      expect(wrapper.find(Sunny)).toHaveLength(1);
    });
  });

  describe("click", () => {
    it("should call onClick when is clicked", () => {
      const props = {
        onClick: jest.fn(),
        theme: 0
      };

      const wrapper = shallow(<ThemeButton {...props} />);
      wrapper.simulate("click");

      expect(props.onClick).toBeCalledTimes(1);
    });
  });
});

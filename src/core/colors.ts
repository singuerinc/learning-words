import Color = require("color");
import OpenColor from "open-color";
import * as R from "ramda";

export const byIndex = (index: number): string => {
  const colors = [
    OpenColor.lime[9],
    OpenColor.yellow[9],
    OpenColor.orange[9],
    OpenColor.red[9],
    OpenColor.pink[9],
    OpenColor.grape[9],
    OpenColor.violet[9],
    OpenColor.indigo[9],
    OpenColor.blue[9],
    OpenColor.cyan[9],
    OpenColor.teal[9],
    OpenColor.green[9]
  ];

  return colors[index % colors.length];
};

export const darken = R.curry((color: string, amount: number) =>
  Color(color)
    .darken(amount)
    .string()
);

export const lighten = R.curry((color: string, amount: number) =>
  Color(color)
    .lighten(amount)
    .string()
);

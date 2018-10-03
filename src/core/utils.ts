import * as R from "ramda";
export const mapIdx = R.addIndex(R.map);

export const q = <T>(selector: string): T | null =>
  document.querySelector(selector) as T | null;

export const qAll = (selector: string): NodeListOf<Element> =>
  document.querySelectorAll(selector);

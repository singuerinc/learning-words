import * as R from "ramda";
export const mapIdx = R.addIndex(R.map);
export const q = (selector: string) => document.querySelector(selector);
export const qAll = (selector: string) => document.querySelectorAll(selector);

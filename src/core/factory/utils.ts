import { sort, take } from "ramda";
import pipe from "ramda/es/pipe";
import { Topic } from "../../topic";
import { ILetterType } from "./ILetterType";

export const shuffle = (arr: any[]) => sort(() => 0.5 - Math.random(), arr);

export const take20rand = pipe(shuffle, take(20));

export const mapToLetter = (type: Topic) => (x: string): ILetterType => ({
  letter: x,
  type
});

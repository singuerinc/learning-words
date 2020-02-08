import {
  clocksLevel1,
  clocksLevel2,
  dayOfTheWeek
} from "./core/factory/clocks";
import { imgAndLetter } from "./core/factory/figures";
import {
  lettersLowercase,
  lettersUppercase,
  wordsLevel2
} from "./core/factory/letters";
import {
  additions,
  additionsLevel2,
  subtractions,
  subtractionsLevel2,
  numbers,
  romanNumbers
} from "./core/factory/math";
import { planetsLevel1 } from "./core/factory/planets";
import { Topic } from "./topic";

export const topics = (level: number, topic: Topic) => {
  switch (topic) {
    case Topic.ADDITION:
      switch (level) {
        case 2:
          return additionsLevel2();
        default:
          return additions();
      }
    case Topic.SUBTRACTION:
      switch (level) {
        case 2:
          return subtractionsLevel2();
        default:
          return subtractions();
      }
    case Topic.CALENDAR:
      return dayOfTheWeek();
    case Topic.CLOCK:
      switch (level) {
        case 2:
          return clocksLevel2();
        default:
          return clocksLevel1();
      }
    case Topic.FIGURES:
      return imgAndLetter();
    case Topic.LOWERCASE:
      return lettersLowercase;
    case Topic.NUMBERS:
      return numbers();
    case Topic.PLANETS:
      return planetsLevel1();
    case Topic.UPPERCASE:
      return lettersUppercase;
    case Topic.ROMAN_NUMBERS:
      return romanNumbers();
    case Topic.WORDS:
      return wordsLevel2();
  }
};

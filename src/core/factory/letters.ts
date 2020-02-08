import compose from "ramda/es/compose";
import map from "ramda/es/map";
import toLower from "ramda/es/toLower";
import toUpper from "ramda/es/toUpper";
import { Topic } from "../../topic";
import { mapToLetter, shuffle, take20rand } from "./utils";
import pipe from "ramda/es/pipe";
import take from "ramda/es/take";

export const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export const lettersLowercase = pipe(
  take(20),
  map<number, string>(x => toLower(x.toString())),
  map(mapToLetter(Topic.LOWERCASE))
)(alphabet);

export const lettersUppercase = pipe(
  take(20),
  map<number, string>(x => toUpper(x.toString())),
  map(mapToLetter(Topic.UPPERCASE))
)(alphabet);

export const wordsLevel2 = () =>
  shuffle(
    [
      "the",
      "of",
      "and",
      "a",
      "to",
      "in",
      "is",
      "you",
      "that",
      "it",
      "he",
      "was",
      "for",
      "on",
      "are",
      "as",
      "with",
      "his",
      "they",
      "I",
      "at",
      "be",
      "this",
      "have",
      "from",
      "or",
      "one",
      "had",
      "by",
      "words",
      "but",
      "not",
      "what",
      "all",
      "were",
      "we",
      "when",
      "your",
      "can",
      "said",
      "there",
      "use",
      "an",
      "each",
      "which",
      "she",
      "do",
      "how",
      "their",
      "if",
      "will",
      "up",
      "other",
      "about",
      "out",
      "many",
      "then",
      "them",
      "these",
      "so",
      "some",
      "her",
      "would",
      "make",
      "like",
      "him",
      "into",
      "time",
      "has",
      "look",
      "two",
      "more",
      "write",
      "go",
      "see",
      "number",
      "no",
      "way",
      "could",
      "people",
      "my",
      "than",
      "first",
      "water",
      "been",
      "called",
      "who",
      "oil",
      "sit",
      "now",
      "find",
      "long",
      "down",
      "day",
      "did",
      "get",
      "come",
      "made",
      "may",
      "part"
    ].map(mapToLetter(Topic.WORDS))
  );

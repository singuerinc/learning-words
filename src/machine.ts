import { Machine } from "xstate";

export interface IMachineContext {}

export interface IMachineStateSchema {
  states: {
    welcome: {};
    home: {};
    planets: {};
  };
}

export type IMachineEvent = { type: "GO_TO_PLANETS" } | { type: "GO_TO_HOME" };

export const context = {};

export const machine = Machine<
  IMachineContext,
  IMachineStateSchema,
  IMachineEvent
>({
  id: "machine",
  context,
  initial: "welcome",
  states: {
    welcome: {
      after: {
        2000: "home"
      }
    },
    home: {
      on: {
        GO_TO_PLANETS: "planets"
      }
    },
    planets: {
      on: {
        GO_TO_HOME: "home"
      }
    }
  }
});

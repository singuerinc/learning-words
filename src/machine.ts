import { assign, createMachine } from "xstate";
import { Topic } from "./topic";

export interface IMachineContext {
  topic?: Topic;
  level?: number;
}

export type IMachineStateSchema =
  | {
      value: "welcome";
      context: IMachineContext & { topic: undefined; level: undefined };
    }
  | {
      value: "home";
      context: IMachineContext & { topic: undefined; level: undefined };
    }
  | { value: "topic"; context: IMachineContext };

export type IMachineEvent =
  | { type: "TOPIC"; topic: Topic; level: number }
  | { type: "GO_HOME" };

export const context = {};

export const machine = createMachine<
  IMachineContext,
  IMachineEvent,
  IMachineStateSchema
>({
  id: "machine",
  context,
  initial: "welcome",
  states: {
    welcome: {
      after: {
        200: "home"
      }
    },
    home: {
      on: {
        TOPIC: {
          target: "topic",
          actions: [
            assign({ topic: (_, event) => event.topic }),
            assign({ level: (_, event) => event.level })
          ]
        }
      }
    },
    topic: {
      on: {
        GO_HOME: "home"
      }
    }
  }
});

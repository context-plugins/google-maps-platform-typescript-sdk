import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TrafficModel1 = {
  BestGuess: "best_guess",
  Pessimistic: "pessimistic",
  Optimistic: "optimistic",
} as const;
export type TrafficModel1 = (typeof TrafficModel1)[keyof typeof TrafficModel1] | (string & {});

export const trafficModel1Schema: EnumSchema<TrafficModel1> = s.enumOf<TrafficModel1>(TrafficModel1);

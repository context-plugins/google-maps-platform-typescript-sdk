import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TrafficModel = {
  BestGuess: "best_guess",
  Pessimistic: "pessimistic",
  Optimistic: "optimistic",
} as const;
export type TrafficModel = (typeof TrafficModel)[keyof typeof TrafficModel] | (string & {});

export const trafficModelSchema: EnumSchema<TrafficModel> = s.enumOf<TrafficModel>(TrafficModel);

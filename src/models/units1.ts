import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Units1 = {
  Imperial: "imperial",
  Metric: "metric",
} as const;
export type Units1 = (typeof Units1)[keyof typeof Units1] | (string & {});

export const units1Schema: EnumSchema<Units1> = s.enumOf<Units1>(Units1);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Rankby = {
  Prominence: "prominence",
  Distance: "distance",
} as const;
export type Rankby = (typeof Rankby)[keyof typeof Rankby] | (string & {});

export const rankbySchema: EnumSchema<Rankby> = s.enumOf<Rankby>(Rankby);

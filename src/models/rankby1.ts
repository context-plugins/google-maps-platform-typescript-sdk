import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Rankby1 = {
  Prominence: "prominence",
  Distance: "distance",
} as const;
export type Rankby1 = (typeof Rankby1)[keyof typeof Rankby1] | (string & {});

export const rankby1Schema: EnumSchema<Rankby1> = s.enumOf<Rankby1>(Rankby1);

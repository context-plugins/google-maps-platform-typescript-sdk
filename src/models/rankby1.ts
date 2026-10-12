import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the order in which results are listed. Possible values are:
 * - `prominence` (default). This option sorts results based on their importance. Ranking will favor
 *   prominent places within the set radius over nearby places that match but that are less
 *   prominent. Prominence can be affected by a place's ranking in Google's index, global
 *   popularity, and other factors. When prominence is specified, the `radius` parameter is
 *   required.
 * - `distance`. This option biases search results in ascending order by their distance from the
 *   specified location. When `distance` is specified, one or more of `keyword`, `name`, or `type`
 *   is required and `radius` is disallowed.
 */
export const Rankby1 = {
  Prominence: "prominence",
  Distance: "distance",
} as const;
export type Rankby1 = (typeof Rankby1)[keyof typeof Rankby1] | (string & {});

export const rankby1Schema: EnumSchema<Rankby1> = s.enumOf<Rankby1>(Rankby1);

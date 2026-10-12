import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the unit system to use when displaying results.
 *
 * <div class="note">Note: this unit system setting only affects the text displayed within distance
 * fields. The distance fields also contain values which are always expressed in meters.</div>
 */
export const Units2 = {
  Imperial: "imperial",
  Metric: "metric",
} as const;
export type Units2 = (typeof Units2)[keyof typeof Units2] | (string & {});

export const units2Schema: EnumSchema<Units2> = s.enumOf<Units2>(Units2);

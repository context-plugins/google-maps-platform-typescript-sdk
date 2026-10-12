import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DurationInTraffic = {
  /** String value. */
  text: string;
  /** Numeric value. */
  value: number;
};

export const durationInTrafficSchema: Schema<DurationInTraffic> = s.object<DurationInTraffic>({
  text: s.string(),
  value: s.float64(),
});

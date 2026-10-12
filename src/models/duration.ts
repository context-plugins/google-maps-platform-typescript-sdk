import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Duration = {
  /** String value. */
  text: string;
  /** Numeric value. */
  value: number;
};

export const durationSchema: Schema<Duration> = s.object<Duration>({
  text: s.string(),
  value: s.float64(),
});

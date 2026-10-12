import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Distance = {
  /** String value. */
  text: string;
  /** Numeric value. */
  value: number;
};

export const distanceSchema: Schema<Distance> = s.object<Distance>({
  text: s.string(),
  value: s.float64(),
});

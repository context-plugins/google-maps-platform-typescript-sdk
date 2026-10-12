import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object containing a numeric value and its formatted text representation. */
export type TextValueObject = {
  /** String value. */
  text: string;
  /** Numeric value. */
  value: number;
};

export const textValueObjectSchema: Schema<TextValueObject> = s.object<TextValueObject>({
  text: s.string(),
  value: s.float64(),
});

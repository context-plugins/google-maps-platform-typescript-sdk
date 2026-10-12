import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FieldViolation = {
  /** The name of the invalid field. */
  field: string;
  /** A short description of the error. */
  description: string;
};

export const fieldViolationSchema: Schema<FieldViolation> = s.object<FieldViolation>({
  field: s.string(),
  description: s.string(),
});

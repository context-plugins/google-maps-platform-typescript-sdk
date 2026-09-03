import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FieldViolation = {
  field: string;
  description: string;
};

export const fieldViolationSchema: Schema<FieldViolation> = s.object<FieldViolation>({
  field: s.string(),
  description: s.string(),
});

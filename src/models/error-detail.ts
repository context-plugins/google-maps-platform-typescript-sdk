import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fieldViolationSchema, type FieldViolation } from "./field-violation.js";

export type ErrorDetail = {
  type?: string;
  message?: string;
  reason?: string;
  domain?: string;
  metadata?: Record<string, unknown>;
  fieldViolations?: FieldViolation[];
};

export const errorDetailSchema: Schema<ErrorDetail> = s.object<ErrorDetail>({
  type: s.optional(s.string()),
  message: s.optional(s.string()),
  reason: s.optional(s.string()),
  domain: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  fieldViolations: s.optional(s.array(s.lazy(() => fieldViolationSchema))),
  _keysMap: {
    type: "@type",
  },
});

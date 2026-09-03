import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";

export type ErrorObject = {
  code: number;
  message: string;
  errors: ErrorDetail[];
  status?: string;
  details?: ErrorDetail[];
};

export const errorObjectSchema: Schema<ErrorObject> = s.object<ErrorObject>({
  code: s.number(),
  message: s.string(),
  errors: s.array(s.lazy(() => errorDetailSchema)),
  status: s.optional(s.string()),
  details: s.optional(s.array(s.lazy(() => errorDetailSchema))),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";

export type ErrorObject = {
  /** This is the same as the HTTP status of the response. */
  code: number;
  /** A short description of the error. */
  message: string;
  /**
   * A list of errors which occurred. Each error contains an identifier for the type of error and a
   * short description.
   */
  errors: ErrorDetail[];
  /** A status code that indicates the error type. */
  status?: string;
  /** Additional details about the error. */
  details?: ErrorDetail[];
};

export const errorObjectSchema: Schema<ErrorObject> = s.object<ErrorObject>({
  code: s.float64(),
  message: s.string(),
  errors: s.array(s.lazy(() => errorDetailSchema)),
  status: s.optional(s.string()),
  details: s.optional(s.array(s.lazy(() => errorDetailSchema))),
});

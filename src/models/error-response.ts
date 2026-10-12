import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";

/**
 * In the case of an error, a standard format error response body will be returned and the HTTP
 * status code will be set to an error status. The response contains an object with a single error
 * object.
 */
export type ErrorResponse = {
  error: ErrorObject;
};

export const errorResponseSchema: Schema<ErrorResponse> = s.object<ErrorResponse>({
  error: errorObjectSchema,
});

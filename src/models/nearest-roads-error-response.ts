import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nearestRoadsErrorSchema, type NearestRoadsError } from "./nearest-roads-error.js";

export type NearestRoadsErrorResponse = {
  error?: NearestRoadsError;
};

export const nearestRoadsErrorResponseSchema: Schema<NearestRoadsErrorResponse> =
  s.object<NearestRoadsErrorResponse>({
    error: s.optional(s.lazy(() => nearestRoadsErrorSchema)),
  });

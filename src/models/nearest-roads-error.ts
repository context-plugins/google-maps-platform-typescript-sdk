import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NearestRoadsError = {
  /** This is the same as the HTTP status of the response. */
  code: number;
  /** A short description of the error. */
  message: string;
  /** An error such as `INVALID_ARGUMENT`. */
  status: string;
};

export const nearestRoadsErrorSchema: Schema<NearestRoadsError> = s.object<NearestRoadsError>({
  code: s.float64(),
  message: s.string(),
  status: s.string(),
});

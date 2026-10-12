import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { snappedPointSchema, type SnappedPoint } from "./snapped-point.js";

export type SnapToRoadsResponse = {
  /** An array of snapped points. */
  snappedPoints?: SnappedPoint[];
  /** A string containing a user-visible warning. */
  warningMessage?: string;
};

export const snapToRoadsResponseSchema: Schema<SnapToRoadsResponse> = s.object<SnapToRoadsResponse>({
  snappedPoints: s.optional(s.array(s.lazy(() => snappedPointSchema))),
  warningMessage: s.optional(s.string()),
});

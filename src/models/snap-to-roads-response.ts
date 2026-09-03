import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { snappedPointSchema, type SnappedPoint } from "./snapped-point.js";

export type SnapToRoadsResponse = {
  snappedPoints?: SnappedPoint[];
  warningMessage?: string;
};

export const snapToRoadsResponseSchema: Schema<SnapToRoadsResponse> = s.object<SnapToRoadsResponse>({
  snappedPoints: s.optional(s.array(s.lazy(() => snappedPointSchema))),
  warningMessage: s.optional(s.string()),
});

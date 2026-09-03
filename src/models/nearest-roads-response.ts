import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { snappedPointSchema, type SnappedPoint } from "./snapped-point.js";

export type NearestRoadsResponse = {
  snappedPoints?: SnappedPoint[];
};

export const nearestRoadsResponseSchema: Schema<NearestRoadsResponse> = s.object<NearestRoadsResponse>({
  snappedPoints: s.optional(s.array(s.lazy(() => snappedPointSchema))),
});

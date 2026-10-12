import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { location6Schema, type Location6 } from "./location6.js";

export type SnappedPoint = {
  location: Location6;
  /**
   * An integer that indicates the corresponding value in the original request. Each value in the
   * request should map to a snapped value in the response. However, if you've set interpolate=true
   * or if you're using nearest roads, then it's possible that the response will contain more
   * coordinates than the request. Interpolated values will not have an `originalIndex`. These
   * values are indexed from `0`, so a point with an originalIndex of `4` will be the snapped value
   * of the 5th latitude/longitude passed to the path parameter. Nearest Roads points may contain
   * several points for single coordinates with differing location or placeId.
   */
  originalIndex?: number;
  /**
   * A unique identifier for a place. All place IDs returned by the Roads API correspond to road
   * segments.
   */
  placeId: string;
};

export const snappedPointSchema: Schema<SnappedPoint> = s.object<SnappedPoint>({
  location: location6Schema,
  originalIndex: s.optional(s.float64()),
  placeId: s.string(),
});

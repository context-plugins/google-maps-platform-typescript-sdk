import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { location6Schema, type Location6 } from "./location6.js";

export type SnappedPoint = {
  location: Location6;
  originalIndex?: number;
  placeId: string;
};

export const snappedPointSchema: Schema<SnappedPoint> = s.object<SnappedPoint>({
  location: location6Schema,
  originalIndex: s.optional(s.number()),
  placeId: s.string(),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Polyline = {
  /** A single string representation of the polyline. */
  points: string;
};

export const polylineSchema: Schema<Polyline> = s.object<Polyline>({
  points: s.string(),
});

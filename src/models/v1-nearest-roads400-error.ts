import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nearestRoadsErrorSchema, type NearestRoadsError } from "./nearest-roads-error.js";

export type V1NearestRoads400Error = {
  error?: NearestRoadsError;
};

export const v1NearestRoads400ErrorSchema: Schema<V1NearestRoads400Error> = s.object<V1NearestRoads400Error>({
  error: s.optional(s.lazy(() => nearestRoadsErrorSchema)),
});

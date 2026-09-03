import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NearestRoadsError = {
  code: number;
  message: string;
  status: string;
};

export const nearestRoadsErrorSchema: Schema<NearestRoadsError> = s.object<NearestRoadsError>({
  code: s.number(),
  message: s.string(),
  status: s.string(),
});

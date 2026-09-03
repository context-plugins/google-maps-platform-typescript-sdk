import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { elevationStatusSchema, type ElevationStatus } from "./elevation-status.js";
import { resultSchema, type Result } from "./result.js";

export type MapsApiElevationJsonResponse = {
  errorMessage?: string;
  status: ElevationStatus;
  results: Result[];
};

export const mapsApiElevationJsonResponseSchema: Schema<MapsApiElevationJsonResponse> =
  s.object<MapsApiElevationJsonResponse>({
    errorMessage: s.optional(s.string()),
    status: elevationStatusSchema,
    results: s.array(s.lazy(() => resultSchema)),
    _keysMap: {
      errorMessage: "error_message",
    },
  });

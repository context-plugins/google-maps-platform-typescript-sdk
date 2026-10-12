import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { elevationStatusSchema, type ElevationStatus } from "./elevation-status.js";
import { resultSchema, type Result } from "./result.js";

export type MapsApiElevationJsonResponse = {
  /**
   * When the service returns a status code other than `OK<`, there may be an additional
   * `error_message` field within the response object. This field contains more detailed information
   * about thereasons behind the given status code. This field is not always returned, and its
   * content is subject to change.
   */
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

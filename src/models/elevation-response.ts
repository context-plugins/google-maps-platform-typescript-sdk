import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { elevationResultSchema, type ElevationResult } from "./elevation-result.js";
import { elevationStatusSchema, type ElevationStatus } from "./elevation-status.js";

export type ElevationResponse = {
  errorMessage?: string;
  status: ElevationStatus;
  results: ElevationResult[];
};

export const elevationResponseSchema: Schema<ElevationResponse> = s.object<ElevationResponse>({
  errorMessage: s.optional(s.string()),
  status: elevationStatusSchema,
  results: s.array(s.lazy(() => elevationResultSchema)),
  _keysMap: {
    errorMessage: "error_message",
  },
});

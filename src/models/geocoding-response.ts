import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { geocodingResultSchema, type GeocodingResult } from "./geocoding-result.js";
import { geocodingStatusSchema, type GeocodingStatus } from "./geocoding-status.js";
import { plusCode1Schema, type PlusCode1 } from "./plus-code1.js";

export type GeocodingResponse = {
  plusCode?: PlusCode1;
  results: GeocodingResult[];
  status: GeocodingStatus;
  errorMessage?: string;
};

export const geocodingResponseSchema: Schema<GeocodingResponse> = s.object<GeocodingResponse>({
  plusCode: s.optional(s.lazy(() => plusCode1Schema)),
  results: s.array(s.lazy(() => geocodingResultSchema)),
  status: geocodingStatusSchema,
  errorMessage: s.optional(s.string()),
  _keysMap: {
    plusCode: "plus_code",
    errorMessage: "error_message",
  },
});

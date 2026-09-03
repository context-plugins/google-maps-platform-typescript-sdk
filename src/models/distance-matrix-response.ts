import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { distanceMatrixRowSchema, type DistanceMatrixRow } from "./distance-matrix-row.js";
import { distanceMatrixStatusSchema, type DistanceMatrixStatus } from "./distance-matrix-status.js";

export type DistanceMatrixResponse = {
  originAddresses: string[];
  destinationAddresses: string[];
  rows: DistanceMatrixRow[];
  status: DistanceMatrixStatus;
  errorMessage?: string;
};

export const distanceMatrixResponseSchema: Schema<DistanceMatrixResponse> = s.object<DistanceMatrixResponse>({
  originAddresses: s.array(s.string()),
  destinationAddresses: s.array(s.string()),
  rows: s.array(s.lazy(() => distanceMatrixRowSchema)),
  status: distanceMatrixStatusSchema,
  errorMessage: s.optional(s.string()),
  _keysMap: {
    originAddresses: "origin_addresses",
    destinationAddresses: "destination_addresses",
    errorMessage: "error_message",
  },
});

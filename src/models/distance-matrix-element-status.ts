import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DistanceMatrixElementStatus = {
  Ok: "OK",
  NotFound: "NOT_FOUND",
  ZeroResults: "ZERO_RESULTS",
  MaxRouteLengthExceeded: "MAX_ROUTE_LENGTH_EXCEEDED",
} as const;
export type DistanceMatrixElementStatus =
  | (typeof DistanceMatrixElementStatus)[keyof typeof DistanceMatrixElementStatus]
  | (string & {});

export const distanceMatrixElementStatusSchema: EnumSchema<DistanceMatrixElementStatus> =
  s.enumOf<DistanceMatrixElementStatus>(DistanceMatrixElementStatus);

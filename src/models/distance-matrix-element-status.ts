import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * - `OK` indicates the response contains a valid result.
 * - `NOT_FOUND` indicates that the origin and/or destination of this pairing could not be geocoded.
 * - `ZERO_RESULTS` indicates no route could be found between the origin and destination.
 * - `MAX_ROUTE_LENGTH_EXCEEDED` indicates the requested route is too long and cannot be processed.
 */
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

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  distanceMatrixElementStatusSchema,
  type DistanceMatrixElementStatus,
} from "./distance-matrix-element-status.js";
import { distanceSchema, type Distance } from "./distance.js";
import { durationInTrafficSchema, type DurationInTraffic } from "./duration-in-traffic.js";
import { durationSchema, type Duration } from "./duration.js";
import { fare1Schema, type Fare1 } from "./fare1.js";

export type DistanceMatrixElement = {
  fare?: Fare1;
  distance?: Distance;
  durationInTraffic?: DurationInTraffic;
  duration?: Duration;
  status: DistanceMatrixElementStatus;
};

export const distanceMatrixElementSchema: Schema<DistanceMatrixElement> = s.object<DistanceMatrixElement>({
  fare: s.optional(s.lazy(() => fare1Schema)),
  distance: s.optional(s.lazy(() => distanceSchema)),
  durationInTraffic: s.optional(s.lazy(() => durationInTrafficSchema)),
  duration: s.optional(s.lazy(() => durationSchema)),
  status: distanceMatrixElementStatusSchema,
  _keysMap: {
    durationInTraffic: "duration_in_traffic",
  },
});

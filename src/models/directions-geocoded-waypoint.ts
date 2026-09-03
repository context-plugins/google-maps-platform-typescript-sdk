import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { areaTypeSchema, type AreaType } from "./area-type.js";
import { geocoderStatusSchema, type GeocoderStatus } from "./geocoder-status.js";

export type DirectionsGeocodedWaypoint = {
  geocoderStatus?: GeocoderStatus;
  partialMatch?: Record<string, unknown>;
  placeId?: string;
  areaType?: AreaType[];
};

export const directionsGeocodedWaypointSchema: Schema<DirectionsGeocodedWaypoint> =
  s.object<DirectionsGeocodedWaypoint>({
    geocoderStatus: s.optional(s.lazy(() => geocoderStatusSchema)),
    partialMatch: s.optional(s.record(s.string(), s.unknown())),
    placeId: s.optional(s.string()),
    areaType: s.optional(s.array(s.lazy(() => areaTypeSchema))),
    _keysMap: {
      geocoderStatus: "geocoder_status",
      partialMatch: "partial_match",
      placeId: "place_id",
      areaType: "area_type",
    },
  });

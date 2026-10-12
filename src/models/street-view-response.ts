import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";
import { streetViewStatusSchema, type StreetViewStatus } from "./street-view-status.js";

export type StreetViewResponse = {
  /** Contains the copyright notices associated with this panorama. */
  copyright?: string;
  /** A string indicating year and month that the panorama was captured. */
  date?: string;
  location?: Location;
  /**
   * A specific panorama ID. These are generally stable, though panoramas may change ID over time as
   * imagery is refreshed.
   */
  panoId?: string;
  status: StreetViewStatus;
};

export const streetViewResponseSchema: Schema<StreetViewResponse> = s.object<StreetViewResponse>({
  copyright: s.optional(s.string()),
  date: s.optional(s.string()),
  location: s.optional(s.lazy(() => locationSchema)),
  panoId: s.optional(s.string()),
  status: streetViewStatusSchema,
  _keysMap: {
    panoId: "pano_id",
  },
});

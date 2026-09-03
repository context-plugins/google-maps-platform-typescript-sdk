import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";
import { streetViewStatusSchema, type StreetViewStatus } from "./street-view-status.js";

export type StreetViewResponse = {
  copyright?: string;
  date?: string;
  location?: Location;
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

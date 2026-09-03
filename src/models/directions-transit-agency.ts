import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DirectionsTransitAgency = {
  name?: string;
  phone?: string;
  url?: string;
};

export const directionsTransitAgencySchema: Schema<DirectionsTransitAgency> =
  s.object<DirectionsTransitAgency>({
    name: s.optional(s.string()),
    phone: s.optional(s.string()),
    url: s.optional(s.string()),
  });

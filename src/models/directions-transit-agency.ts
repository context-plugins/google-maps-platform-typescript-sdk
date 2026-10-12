import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DirectionsTransitAgency = {
  /** The name of this transit agency. */
  name?: string;
  /** The transit agency's phone number. */
  phone?: string;
  /** The transit agency's URL. */
  url?: string;
};

export const directionsTransitAgencySchema: Schema<DirectionsTransitAgency> =
  s.object<DirectionsTransitAgency>({
    name: s.optional(s.string()),
    phone: s.optional(s.string()),
    url: s.optional(s.string()),
  });

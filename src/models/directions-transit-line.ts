import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { directionsTransitAgencySchema, type DirectionsTransitAgency } from "./directions-transit-agency.js";
import {
  directionsTransitVehicleSchema,
  type DirectionsTransitVehicle,
} from "./directions-transit-vehicle.js";

export type DirectionsTransitLine = {
  /** The transit agency (or agencies) that operates this transit line. */
  agencies: DirectionsTransitAgency[];
  /** The color commonly used in signage for this line. */
  color?: string;
  /** The full name of this transit line, e.g. "8 Avenue Local". */
  name: string;
  /**
   * The short name of this transit line. This will normally be a line number, such as "M7" or
   * "355".
   */
  shortName?: string;
  /** The color commonly used in signage for this line. */
  textColor?: string;
  /** Contains the URL for this transit line as provided by the transit agency. */
  url?: string;
  /** Contains the URL for the icon associated with this line. */
  icon?: string;
  vehicle?: DirectionsTransitVehicle;
};

export const directionsTransitLineSchema: Schema<DirectionsTransitLine> = s.object<DirectionsTransitLine>({
  agencies: s.array(s.lazy(() => directionsTransitAgencySchema)),
  color: s.optional(s.string()),
  name: s.string(),
  shortName: s.optional(s.string()),
  textColor: s.optional(s.string()),
  url: s.optional(s.string()),
  icon: s.optional(s.string()),
  vehicle: s.optional(s.lazy(() => directionsTransitVehicleSchema)),
  _keysMap: {
    shortName: "short_name",
    textColor: "text_color",
  },
});

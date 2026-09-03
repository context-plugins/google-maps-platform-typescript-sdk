import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { directionsTransitAgencySchema, type DirectionsTransitAgency } from "./directions-transit-agency.js";
import {
  directionsTransitVehicleSchema,
  type DirectionsTransitVehicle,
} from "./directions-transit-vehicle.js";

export type DirectionsTransitLine = {
  agencies: DirectionsTransitAgency[];
  color?: string;
  name: string;
  shortName?: string;
  textColor?: string;
  url?: string;
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

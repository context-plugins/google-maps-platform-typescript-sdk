import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vehicleTypeSchema, type VehicleType } from "./vehicle-type.js";

export type DirectionsTransitVehicle = {
  /** Contains the URL for an icon associated with this vehicle type. */
  icon?: string;
  /**
   * Contains the URL for the icon associated with this vehicle type, based on the local transport
   * signage.
   */
  localIcon?: string;
  /** The name of this vehicle, capitalized. */
  name: string;
  vehicleType?: VehicleType;
};

export const directionsTransitVehicleSchema: Schema<DirectionsTransitVehicle> =
  s.object<DirectionsTransitVehicle>({
    icon: s.optional(s.string()),
    localIcon: s.optional(s.string()),
    name: s.string(),
    vehicleType: s.optional(s.lazy(() => vehicleTypeSchema)),
    _keysMap: {
      localIcon: "local_icon",
      vehicleType: "vehicle_type",
    },
  });

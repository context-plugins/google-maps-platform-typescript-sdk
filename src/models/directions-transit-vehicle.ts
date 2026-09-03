import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vehicleTypeSchema, type VehicleType } from "./vehicle-type.js";

export type DirectionsTransitVehicle = {
  icon?: string;
  localIcon?: string;
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

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cellTowerSchema, type CellTower } from "./cell-tower.js";
import { wiFiAccessPointSchema, type WiFiAccessPoint } from "./wi-fi-access-point.js";

export type GeolocationRequest = {
  homeMobileCountryCode?: number;
  homeMobileNetworkCode?: number;
  radioType?: string;
  carrier?: string;
  considerIp?: string;
  cellTowers?: CellTower[];
  wifiAccessPoints?: WiFiAccessPoint[];
};

export const geolocationRequestSchema: Schema<GeolocationRequest> = s.object<GeolocationRequest>({
  homeMobileCountryCode: s.optional(s.number()),
  homeMobileNetworkCode: s.optional(s.number()),
  radioType: s.optional(s.string()),
  carrier: s.optional(s.string()),
  considerIp: s.optional(s.string()),
  cellTowers: s.optional(s.array(s.lazy(() => cellTowerSchema))),
  wifiAccessPoints: s.optional(s.array(s.lazy(() => wiFiAccessPointSchema))),
});

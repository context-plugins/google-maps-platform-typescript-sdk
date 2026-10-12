import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cellTowerSchema, type CellTower } from "./cell-tower.js";
import { wiFiAccessPointSchema, type WiFiAccessPoint } from "./wi-fi-access-point.js";

/**
 * The request body must be formatted as JSON. The following fields are supported, and all fields
 * are optional.
 */
export type GeolocationRequest = {
  /** The cell tower's Mobile Country Code (MCC). */
  homeMobileCountryCode?: number;
  /**
   * The cell tower's Mobile Network Code. This is the MNC for GSM and WCDMA; CDMA uses the System
   * ID (SID).
   */
  homeMobileNetworkCode?: number;
  /**
   * The mobile radio type. Supported values are lte, gsm, cdma, and wcdma. While this field is
   * optional, it should be included if a value is available, for more accurate results.
   */
  radioType?: string;
  /** The carrier name. */
  carrier?: string;
  /**
   * Specifies whether to fall back to IP geolocation if wifi and cell tower signals are not
   * available. Defaults to true. Set considerIp to false to disable fall back.
   */
  considerIp?: string;
  /** The request body's cellTowers array contains zero or more cell tower objects. */
  cellTowers?: CellTower[];
  /** An array of two or more WiFi access point objects. */
  wifiAccessPoints?: WiFiAccessPoint[];
};

export const geolocationRequestSchema: Schema<GeolocationRequest> = s.object<GeolocationRequest>({
  homeMobileCountryCode: s.optional(s.int()),
  homeMobileNetworkCode: s.optional(s.int()),
  radioType: s.optional(s.string()),
  carrier: s.optional(s.string()),
  considerIp: s.optional(s.string()),
  cellTowers: s.optional(s.array(s.lazy(() => cellTowerSchema))),
  wifiAccessPoints: s.optional(s.array(s.lazy(() => wiFiAccessPointSchema))),
});

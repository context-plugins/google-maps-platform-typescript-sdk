import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Attributes used to describe a WiFi access point. */
export type WiFiAccessPoint = {
  /**
   * The MAC address of the WiFi node. It's typically called a BSS, BSSID or MAC address. Separators
   * must be `:` (colon).
   */
  macAddress: string;
  /** The current signal strength measured in dBm. */
  signalStrength?: number;
  /** The current signal to noise ratio measured in dB. */
  signalToNoiseRatio?: number;
  /** The number of milliseconds since this access point was detected. */
  age?: number;
  /** The channel over which the client is communication with the access point. */
  channel?: number;
};

export const wiFiAccessPointSchema: Schema<WiFiAccessPoint> = s.object<WiFiAccessPoint>({
  macAddress: s.string(),
  signalStrength: s.optional(s.int()),
  signalToNoiseRatio: s.optional(s.int()),
  age: s.optional(s.int()),
  channel: s.optional(s.int()),
});

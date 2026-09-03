import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WiFiAccessPoint = {
  macAddress: string;
  signalStrength?: number;
  signalToNoiseRatio?: number;
  age?: number;
  channel?: number;
};

export const wiFiAccessPointSchema: Schema<WiFiAccessPoint> = s.object<WiFiAccessPoint>({
  macAddress: s.string(),
  signalStrength: s.optional(s.number()),
  signalToNoiseRatio: s.optional(s.number()),
  age: s.optional(s.number()),
  channel: s.optional(s.number()),
});

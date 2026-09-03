import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CellTower = {
  cellId: number;
  locationAreaCode: number;
  mobileCountryCode: number;
  mobileNetworkCode: number;
  age?: number;
  signalStrength?: number;
  timingAdvance?: number;
};

export const cellTowerSchema: Schema<CellTower> = s.object<CellTower>({
  cellId: s.number(),
  locationAreaCode: s.number(),
  mobileCountryCode: s.number(),
  mobileNetworkCode: s.number(),
  age: s.optional(s.number()),
  signalStrength: s.optional(s.number()),
  timingAdvance: s.optional(s.number()),
});

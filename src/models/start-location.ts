import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StartLocation = {
  lat: number;
  lng: number;
};

export const startLocationSchema: Schema<StartLocation> = s.object<StartLocation>({
  lat: s.number(),
  lng: s.number(),
});

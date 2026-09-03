import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Location = {
  lat: number;
  lng: number;
};

export const locationSchema: Schema<Location> = s.object<Location>({
  lat: s.number(),
  lng: s.number(),
});

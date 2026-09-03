import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Northeast = {
  lat: number;
  lng: number;
};

export const northeastSchema: Schema<Northeast> = s.object<Northeast>({
  lat: s.number(),
  lng: s.number(),
});

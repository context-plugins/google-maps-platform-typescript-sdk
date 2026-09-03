import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LatLngLiteral = {
  lat: number;
  lng: number;
};

export const latLngLiteralSchema: Schema<LatLngLiteral> = s.object<LatLngLiteral>({
  lat: s.number(),
  lng: s.number(),
});

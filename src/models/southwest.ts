import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Southwest = {
  lat: number;
  lng: number;
};

export const southwestSchema: Schema<Southwest> = s.object<Southwest>({
  lat: s.number(),
  lng: s.number(),
});

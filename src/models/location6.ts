import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Location6 = {
  latitude: number;
  longitude: number;
};

export const location6Schema: Schema<Location6> = s.object<Location6>({
  latitude: s.number(),
  longitude: s.number(),
});

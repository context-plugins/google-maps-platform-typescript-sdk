import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EndLocation = {
  lat: number;
  lng: number;
};

export const endLocationSchema: Schema<EndLocation> = s.object<EndLocation>({
  lat: s.number(),
  lng: s.number(),
});

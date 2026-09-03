import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LatitudeLongitudeLiteral = {
  latitude: number;
  longitude: number;
};

export const latitudeLongitudeLiteralSchema: Schema<LatitudeLongitudeLiteral> =
  s.object<LatitudeLongitudeLiteral>({
    latitude: s.number(),
    longitude: s.number(),
  });

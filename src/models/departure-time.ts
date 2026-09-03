import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DepartureTime = {
  text: string;
  value: number;
  timeZone: string;
};

export const departureTimeSchema: Schema<DepartureTime> = s.object<DepartureTime>({
  text: s.string(),
  value: s.number(),
  timeZone: s.string(),
  _keysMap: {
    timeZone: "time_zone",
  },
});

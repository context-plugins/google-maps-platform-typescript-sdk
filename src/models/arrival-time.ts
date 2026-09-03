import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ArrivalTime = {
  text: string;
  value: number;
  timeZone: string;
};

export const arrivalTimeSchema: Schema<ArrivalTime> = s.object<ArrivalTime>({
  text: s.string(),
  value: s.number(),
  timeZone: s.string(),
  _keysMap: {
    timeZone: "time_zone",
  },
});

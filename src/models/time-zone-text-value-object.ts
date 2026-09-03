import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TimeZoneTextValueObject = {
  text: string;
  value: number;
  timeZone: string;
};

export const timeZoneTextValueObjectSchema: Schema<TimeZoneTextValueObject> =
  s.object<TimeZoneTextValueObject>({
    text: s.string(),
    value: s.number(),
    timeZone: s.string(),
    _keysMap: {
      timeZone: "time_zone",
    },
  });

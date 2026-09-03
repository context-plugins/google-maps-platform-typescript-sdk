import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlaceSpecialDay = {
  date?: string;
  exceptionalHours?: boolean;
};

export const placeSpecialDaySchema: Schema<PlaceSpecialDay> = s.object<PlaceSpecialDay>({
  date: s.optional(s.string()),
  exceptionalHours: s.optional(s.boolean()),
  _keysMap: {
    exceptionalHours: "exceptional_hours",
  },
});

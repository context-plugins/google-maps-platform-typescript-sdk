import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlaceSpecialDay = {
  /**
   * A date expressed in RFC3339 format in the local timezone for the place, for example 2010-12-31.
   */
  date?: string;
  /**
   * True if there are exceptional hours for this day. If `true`, this means that there is at least
   * one exception for this day. Exceptions cause different values to occur in the subfields of
   * `current_opening_hours` and `secondary_opening_hours` such as `periods`, `weekday_text`,
   * `open_now`. The exceptions apply to the hours, and the hours are used to generate the other
   * fields.
   */
  exceptionalHours?: boolean;
};

export const placeSpecialDaySchema: Schema<PlaceSpecialDay> = s.object<PlaceSpecialDay>({
  date: s.optional(s.string()),
  exceptionalHours: s.optional(s.boolean()),
  _keysMap: {
    exceptionalHours: "exceptional_hours",
  },
});

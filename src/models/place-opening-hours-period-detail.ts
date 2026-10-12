import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlaceOpeningHoursPeriodDetail = {
  /**
   * A date expressed in RFC3339 format in the local timezone for the place, for example 2010-12-31.
   */
  date?: string;
  /**
   * A number from 0–6, corresponding to the days of the week, starting on Sunday. For example, 2
   * means Tuesday.
   */
  day: number;
  /**
   * May contain a time of day in 24-hour hhmm format. Values are in the range 0000–2359. The time
   * will be reported in the place’s time zone.
   */
  time: string;
  /**
   * True if a given period was truncated due to a seven-day cutoff, where the period starts before
   * midnight on the date of the request and/or ends at or after midnight on the last day. This
   * property indicates that the period for open or close can extend past this seven-day cutoff.
   */
  truncated?: boolean;
};

export const placeOpeningHoursPeriodDetailSchema: Schema<PlaceOpeningHoursPeriodDetail> =
  s.object<PlaceOpeningHoursPeriodDetail>({
    date: s.optional(s.string()),
    day: s.float64(),
    time: s.string(),
    truncated: s.optional(s.boolean()),
  });

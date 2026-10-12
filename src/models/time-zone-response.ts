import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timeZoneStatusSchema, type TimeZoneStatus } from "./time-zone-status.js";

export type TimeZoneResponse = {
  /**
   * The offset for daylight-savings time in seconds. This will be zero if the time zone is not in
   * Daylight Savings Time during the specified `timestamp`.
   */
  dstOffset?: number;
  /**
   * The offset from UTC (in seconds) for the given location. This does not take into effect
   * daylight savings.
   */
  rawOffset?: number;
  /**
   * a string containing the ID of the time zone, such as "America/Los_Angeles" or
   * "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)
   * project](http://cldr.unicode.org/), and currently available in file timezone.xml. When a
   * timezone has several IDs, the canonical one is returned. In xml responses, this is the first
   * alias of each timezone. For example, "Asia/Calcutta" is returned, not "Asia/Kolkata".
   */
  timeZoneId?: string;
  /**
   * The long form name of the time zone. This field will be localized if the language parameter is
   * set. eg. `Pacific Daylight Time` or `Australian Eastern Daylight Time`.
   */
  timeZoneName?: string;
  status: TimeZoneStatus;
  /**
   * Detailed information about the reasons behind the given status code. Included if status other
   * than `Ok`.
   */
  errorMessage?: string;
};

export const timeZoneResponseSchema: Schema<TimeZoneResponse> = s.object<TimeZoneResponse>({
  dstOffset: s.optional(s.float64()),
  rawOffset: s.optional(s.float64()),
  timeZoneId: s.optional(s.string()),
  timeZoneName: s.optional(s.string()),
  status: timeZoneStatusSchema,
  errorMessage: s.optional(s.string()),
});

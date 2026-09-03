import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timeZoneStatusSchema, type TimeZoneStatus } from "./time-zone-status.js";

export type TimeZoneResponse = {
  dstOffset?: number;
  rawOffset?: number;
  timeZoneId?: string;
  timeZoneName?: string;
  status: TimeZoneStatus;
  errorMessage?: string;
};

export const timeZoneResponseSchema: Schema<TimeZoneResponse> = s.object<TimeZoneResponse>({
  dstOffset: s.optional(s.number()),
  rawOffset: s.optional(s.number()),
  timeZoneId: s.optional(s.string()),
  timeZoneName: s.optional(s.string()),
  status: timeZoneStatusSchema,
  errorMessage: s.optional(s.string()),
});

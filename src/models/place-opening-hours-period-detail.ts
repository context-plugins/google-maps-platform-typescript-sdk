import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlaceOpeningHoursPeriodDetail = {
  date?: string;
  day: number;
  time: string;
  truncated?: boolean;
};

export const placeOpeningHoursPeriodDetailSchema: Schema<PlaceOpeningHoursPeriodDetail> =
  s.object<PlaceOpeningHoursPeriodDetail>({
    date: s.optional(s.string()),
    day: s.number(),
    time: s.string(),
    truncated: s.optional(s.boolean()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { placeOpeningHoursPeriodSchema, type PlaceOpeningHoursPeriod } from "./place-opening-hours-period.js";
import { placeSpecialDaySchema, type PlaceSpecialDay } from "./place-special-day.js";

export type OpeningHours = {
  openNow?: boolean;
  periods?: PlaceOpeningHoursPeriod[];
  specialDays?: PlaceSpecialDay[];
  type?: string;
  weekdayText?: string[];
};

export const openingHoursSchema: Schema<OpeningHours> = s.object<OpeningHours>({
  openNow: s.optional(s.boolean()),
  periods: s.optional(s.array(s.lazy(() => placeOpeningHoursPeriodSchema))),
  specialDays: s.optional(s.array(s.lazy(() => placeSpecialDaySchema))),
  type: s.optional(s.string()),
  weekdayText: s.optional(s.array(s.string())),
  _keysMap: {
    openNow: "open_now",
    specialDays: "special_days",
    weekdayText: "weekday_text",
  },
});

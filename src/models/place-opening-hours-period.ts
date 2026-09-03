import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  placeOpeningHoursPeriodDetailSchema,
  type PlaceOpeningHoursPeriodDetail,
} from "./place-opening-hours-period-detail.js";

export type PlaceOpeningHoursPeriod = {
  open: PlaceOpeningHoursPeriodDetail;
  close?: PlaceOpeningHoursPeriodDetail;
};

export const placeOpeningHoursPeriodSchema: Schema<PlaceOpeningHoursPeriod> =
  s.object<PlaceOpeningHoursPeriod>({
    open: placeOpeningHoursPeriodDetailSchema,
    close: s.optional(s.lazy(() => placeOpeningHoursPeriodDetailSchema)),
  });

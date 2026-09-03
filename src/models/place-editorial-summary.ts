import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlaceEditorialSummary = {
  overview?: string;
  language?: string;
};

export const placeEditorialSummarySchema: Schema<PlaceEditorialSummary> = s.object<PlaceEditorialSummary>({
  overview: s.optional(s.string()),
  language: s.optional(s.string()),
});

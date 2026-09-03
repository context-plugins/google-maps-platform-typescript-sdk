import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EditorialSummary = {
  overview?: string;
  language?: string;
};

export const editorialSummarySchema: Schema<EditorialSummary> = s.object<EditorialSummary>({
  overview: s.optional(s.string()),
  language: s.optional(s.string()),
});

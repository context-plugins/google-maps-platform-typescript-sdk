import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EditorialSummary = {
  /** A medium-length textual summary of the place. */
  overview?: string;
  /** The language of the previous fields. May not always be present. */
  language?: string;
};

export const editorialSummarySchema: Schema<EditorialSummary> = s.object<EditorialSummary>({
  overview: s.optional(s.string()),
  language: s.optional(s.string()),
});

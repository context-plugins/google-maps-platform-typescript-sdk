import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlaceReview = {
  authorName: string;
  authorUrl?: string;
  profilePhotoUrl?: string;
  language?: string;
  originalLanguage?: string;
  rating: number;
  relativeTimeDescription: string;
  text?: string;
  time: number;
  translated?: boolean;
};

export const placeReviewSchema: Schema<PlaceReview> = s.object<PlaceReview>({
  authorName: s.string(),
  authorUrl: s.optional(s.string()),
  profilePhotoUrl: s.optional(s.string()),
  language: s.optional(s.string()),
  originalLanguage: s.optional(s.string()),
  rating: s.number(),
  relativeTimeDescription: s.string(),
  text: s.optional(s.string()),
  time: s.number(),
  translated: s.optional(s.boolean()),
  _keysMap: {
    authorName: "author_name",
    authorUrl: "author_url",
    profilePhotoUrl: "profile_photo_url",
    originalLanguage: "original_language",
    relativeTimeDescription: "relative_time_description",
  },
});

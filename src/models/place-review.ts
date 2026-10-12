import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A review of the place submitted by a user. */
export type PlaceReview = {
  /**
   * The name of the user who submitted the review. Anonymous reviews are attributed to "A Google
   * user".
   */
  authorName: string;
  /** The URL to the user's Google Maps Local Guides profile, if available. */
  authorUrl?: string;
  /** The URL to the user's profile photo, if available. */
  profilePhotoUrl?: string;
  /**
   * An IETF language code indicating the language of the returned review. This field contains the
   * main language tag only, and not the secondary tag indicating country or region. For example,
   * all the English reviews are tagged as 'en', and not 'en-AU' or 'en-UK' and so on. This field is
   * empty if there is only a rating with no review text.
   */
  language?: string;
  /**
   * An IETF language code indicating the original language of the review. If the review has been
   * translated, then `original_language` != `language`. This field contains the main language tag
   * only, and not the secondary tag indicating country or region. For example, all the English
   * reviews are tagged as 'en', and not 'en-AU' or 'en-UK' and so on. This field is empty if there
   * is only a rating with no review text.
   */
  originalLanguage?: string;
  /** The user's overall rating for this place. This is a whole number, ranging from 1 to 5. */
  rating: number;
  /** The time that the review was submitted in text, relative to the current time. */
  relativeTimeDescription: string;
  /**
   * The user's review. When reviewing a location with Google Places, text reviews are considered
   * optional. Therefore, this field may be empty. Note that this field may include simple HTML
   * markup. For example, the entity reference `&amp;` may represent an ampersand character.
   */
  text?: string;
  /**
   * The time that the review was submitted, measured in the number of seconds since since midnight,
   * January 1, 1970 UTC.
   */
  time: number;
  /**
   * A boolean value indicating if the review was translated from the original language it was
   * written in. If a review has been translated, corresponding to a value of true, Google
   * recommends that you indicate this to your users. For example, you can add the following string,
   * “Translated by Google”, to the review.
   */
  translated?: boolean;
};

export const placeReviewSchema: Schema<PlaceReview> = s.object<PlaceReview>({
  authorName: s.string(),
  authorUrl: s.optional(s.string()),
  profilePhotoUrl: s.optional(s.string()),
  language: s.optional(s.string()),
  originalLanguage: s.optional(s.string()),
  rating: s.float64(),
  relativeTimeDescription: s.string(),
  text: s.optional(s.string()),
  time: s.float64(),
  translated: s.optional(s.boolean()),
  _keysMap: {
    authorName: "author_name",
    authorUrl: "author_url",
    profilePhotoUrl: "profile_photo_url",
    originalLanguage: "original_language",
    relativeTimeDescription: "relative_time_description",
  },
});

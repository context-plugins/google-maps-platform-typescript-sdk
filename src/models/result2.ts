import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressComponentSchema, type AddressComponent } from "./address-component.js";
import { businessStatusSchema, type BusinessStatus } from "./business-status.js";
import { currentOpeningHoursSchema, type CurrentOpeningHours } from "./current-opening-hours.js";
import { editorialSummarySchema, type EditorialSummary } from "./editorial-summary.js";
import { geometry2Schema, type Geometry2 } from "./geometry2.js";
import { openingHoursSchema, type OpeningHours } from "./opening-hours.js";
import { placeOpeningHoursSchema, type PlaceOpeningHours } from "./place-opening-hours.js";
import { placePhotoSchema, type PlacePhoto } from "./place-photo.js";
import { placeReviewSchema, type PlaceReview } from "./place-review.js";
import { plusCode1Schema, type PlusCode1 } from "./plus-code1.js";

export type Result2 = {
  /** An array containing the separate components applicable to this address. */
  addressComponents?: AddressComponent[];
  /**
   * A representation of the place's address in the [adr
   * microformat](http://microformats.org/wiki/adr).
   */
  adrAddress?: string;
  businessStatus?: BusinessStatus;
  /** Specifies if the business supports curbside pickup. */
  curbsidePickup?: boolean;
  currentOpeningHours?: CurrentOpeningHours;
  /** Specifies if the business supports delivery. */
  delivery?: boolean;
  /** Specifies if the business supports indoor or outdoor seating options. */
  dineIn?: boolean;
  editorialSummary?: EditorialSummary;
  /**
   * A string containing the human-readable address of this place.
   *
   * Often this address is equivalent to the postal address. Note that some countries, such as the
   * United Kingdom, do not allow distribution of true postal addresses due to licensing
   * restrictions.
   *
   * The formatted address is logically composed of one or more address components. For example, the
   * address "111 8th Avenue, New York, NY" consists of the following components: "111" (the street
   * number), "8th Avenue" (the route), "New York" (the city) and "NY" (the US state).
   *
   * Do not parse the formatted address programmatically. Instead you should use the individual
   * address components, which the API response includes in addition to the formatted address field.
   */
  formattedAddress?: string;
  /**
   * Contains the place's phone number in its [local
   * format](http://en.wikipedia.org/wiki/Local_conventions_for_writing_telephone_numbers).
   */
  formattedPhoneNumber?: string;
  geometry?: Geometry2;
  /**
   * Contains the URL of a suggested icon which may be displayed to the user when indicating this
   * result on a map.
   */
  icon?: string;
  /** Contains the default HEX color code for the place's category. */
  iconBackgroundColor?: string;
  /** Contains the URL of a recommended icon, minus the `.svg` or `.png` file type extension. */
  iconMaskBaseUri?: string;
  /**
   * Contains the place's phone number in international format. International format includes the
   * country code, and is prefixed with the plus, +, sign. For example, the
   * international_phone_number for Google's Sydney, Australia office is `+61 2 9374 4000`.
   */
  internationalPhoneNumber?: string;
  /**
   * Contains the human-readable name for the returned result. For `establishment` results, this is
   * usually the canonicalized business name.
   */
  name?: string;
  openingHours?: OpeningHours;
  /**
   * Use `business_status` to get the operational status of businesses.
   *
   * @deprecated
   */
  permanentlyClosed?: boolean;
  /**
   * An array of photo objects, each containing a reference to an image. A request may return up to
   * ten photos. More information about place photos and how you can use the images in your
   * application can be found in the [Place
   * Photos](https://developers.google.com/maps/documentation/places/web-service/photos)
   * documentation.
   */
  photos?: PlacePhoto[];
  /**
   * A textual identifier that uniquely identifies a place. To retrieve information about the place,
   * pass this identifier in the `place_id` field of a Places API request. For more information
   * about place IDs, see the [place ID
   * overview](https://developers.google.com/maps/documentation/places/web-service/place-id).
   */
  placeId?: string;
  plusCode?: PlusCode1;
  /**
   * The price level of the place, on a scale of 0 to 4. The exact amount indicated by a specific
   * value will vary from region to region. Price levels are interpreted as follows:
   * - 0 Free
   * - 1 Inexpensive
   * - 2 Moderate
   * - 3 Expensive
   * - 4 Very Expensive
   */
  priceLevel?: number;
  /** Contains the place's rating, from 1.0 to 5.0, based on aggregated user reviews. */
  rating?: number;
  /**
   * @deprecated
   */
  reference?: string;
  /** Specifies if the place supports reservations. */
  reservable?: boolean;
  /**
   * A JSON array of up to five reviews. By default, the reviews are sorted in order of relevance.
   * Use the `reviews_sort` request parameter to control sorting.
   *
   * - For `most_relevant` (default), reviews are sorted by relevance; the service will bias the
   *   results to return reviews originally written in the preferred language.
   * - For `newest`, reviews are sorted in chronological order; the preferred language does not
   *   affect the sort order. Google recommends indicating to users whether results are ordered by
   *   `most_relevant` or `newest`.
   */
  reviews?: PlaceReview[];
  /** Specifies if the place serves beer. */
  servesBeer?: boolean;
  /** Specifies if the place serves breakfast. */
  servesBreakfast?: boolean;
  /** Specifies if the place serves brunch. */
  servesBrunch?: boolean;
  /** Specifies if the place serves dinner. */
  servesDinner?: boolean;
  /** Specifies if the place serves lunch. */
  servesLunch?: boolean;
  /** Specifies if the place serves vegetarian food. */
  servesVegetarianFood?: boolean;
  /** Specifies if the place serves wine. */
  servesWine?: boolean;
  /**
   * @deprecated
   */
  scope?: string;
  /**
   * Contains an array of entries for the next seven days including information about secondary
   * hours of a business. Secondary hours are different from a business's main hours. For example, a
   * restaurant can specify drive through hours or delivery hours as its secondary hours. This field
   * populates the `type` subfield, which draws from a predefined list of opening hours types (such
   * as `DRIVE_THROUGH`, `PICKUP`, or `TAKEOUT`) based on the types of the place. This field
   * includes the `special_days` subfield of all hours, set for dates that have exceptional hours.
   */
  secondaryOpeningHours?: PlaceOpeningHours[];
  /** Specifies if the business supports takeout. */
  takeout?: boolean;
  /**
   * Contains an array of feature types describing the given result. See the list of [supported
   * types](https://developers.google.com/maps/documentation/places/web-service/supported_types#table2).
   */
  types?: string[];
  /**
   * Contains the URL of the official Google page for this place. This will be the Google-owned page
   * that contains the best available information about the place. Applications must link to or
   * embed this page on any screen that shows detailed results about the place to the user.
   */
  url?: string;
  /** The total number of reviews, with or without text, for this place. */
  userRatingsTotal?: number;
  /**
   * Contains the number of minutes this place’s current timezone is offset from UTC. For example,
   * for places in Sydney, Australia during daylight saving time this would be 660 (+11 hours from
   * UTC), and for places in California outside of daylight saving time this would be -480 (-8 hours
   * from UTC).
   */
  utcOffset?: number;
  /**
   * For establishment (`types:["establishment", ...])` results only, the `vicinity` field contains
   * a simplified address for the place, including the street name, street number, and locality, but
   * not the province/state, postal code, or country.
   *
   * For all other results, the `vicinity` field contains the name of the narrowest political
   * (`types:["political", ...]`) feature that is present in the address of the result.
   *
   * This content is meant to be read as-is. Do not programmatically parse the formatted address.
   */
  vicinity?: string;
  /** The authoritative website for this place, such as a business' homepage. */
  website?: string;
  /** Specifies if the place has an entrance that is wheelchair-accessible. */
  wheelchairAccessibleEntrance?: boolean;
};

export const result2Schema: Schema<Result2> = s.object<Result2>({
  addressComponents: s.optional(s.array(s.lazy(() => addressComponentSchema))),
  adrAddress: s.optional(s.string()),
  businessStatus: s.optional(s.lazy(() => businessStatusSchema)),
  curbsidePickup: s.optional(s.boolean()),
  currentOpeningHours: s.optional(s.lazy(() => currentOpeningHoursSchema)),
  delivery: s.optional(s.boolean()),
  dineIn: s.optional(s.boolean()),
  editorialSummary: s.optional(s.lazy(() => editorialSummarySchema)),
  formattedAddress: s.optional(s.string()),
  formattedPhoneNumber: s.optional(s.string()),
  geometry: s.optional(s.lazy(() => geometry2Schema)),
  icon: s.optional(s.string()),
  iconBackgroundColor: s.optional(s.string()),
  iconMaskBaseUri: s.optional(s.string()),
  internationalPhoneNumber: s.optional(s.string()),
  name: s.optional(s.string()),
  openingHours: s.optional(s.lazy(() => openingHoursSchema)),
  permanentlyClosed: s.optional(s.boolean()),
  photos: s.optional(s.array(s.lazy(() => placePhotoSchema))),
  placeId: s.optional(s.string()),
  plusCode: s.optional(s.lazy(() => plusCode1Schema)),
  priceLevel: s.optional(s.float64()),
  rating: s.optional(s.float64()),
  reference: s.optional(s.string()),
  reservable: s.optional(s.boolean()),
  reviews: s.optional(s.array(s.lazy(() => placeReviewSchema))),
  servesBeer: s.optional(s.boolean()),
  servesBreakfast: s.optional(s.boolean()),
  servesBrunch: s.optional(s.boolean()),
  servesDinner: s.optional(s.boolean()),
  servesLunch: s.optional(s.boolean()),
  servesVegetarianFood: s.optional(s.boolean()),
  servesWine: s.optional(s.boolean()),
  scope: s.optional(s.string()),
  secondaryOpeningHours: s.optional(s.array(s.lazy(() => placeOpeningHoursSchema))),
  takeout: s.optional(s.boolean()),
  types: s.optional(s.array(s.string())),
  url: s.optional(s.string()),
  userRatingsTotal: s.optional(s.float64()),
  utcOffset: s.optional(s.float64()),
  vicinity: s.optional(s.string()),
  website: s.optional(s.string()),
  wheelchairAccessibleEntrance: s.optional(s.boolean()),
  _keysMap: {
    addressComponents: "address_components",
    adrAddress: "adr_address",
    businessStatus: "business_status",
    curbsidePickup: "curbside_pickup",
    currentOpeningHours: "current_opening_hours",
    dineIn: "dine_in",
    editorialSummary: "editorial_summary",
    formattedAddress: "formatted_address",
    formattedPhoneNumber: "formatted_phone_number",
    iconBackgroundColor: "icon_background_color",
    iconMaskBaseUri: "icon_mask_base_uri",
    internationalPhoneNumber: "international_phone_number",
    openingHours: "opening_hours",
    permanentlyClosed: "permanently_closed",
    placeId: "place_id",
    plusCode: "plus_code",
    priceLevel: "price_level",
    servesBeer: "serves_beer",
    servesBreakfast: "serves_breakfast",
    servesBrunch: "serves_brunch",
    servesDinner: "serves_dinner",
    servesLunch: "serves_lunch",
    servesVegetarianFood: "serves_vegetarian_food",
    servesWine: "serves_wine",
    secondaryOpeningHours: "secondary_opening_hours",
    userRatingsTotal: "user_ratings_total",
    utcOffset: "utc_offset",
    wheelchairAccessibleEntrance: "wheelchair_accessible_entrance",
  },
});

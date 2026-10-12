import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressComponentSchema, type AddressComponent } from "./address-component.js";
import { geometry1Schema, type Geometry1 } from "./geometry1.js";
import { plusCode1Schema, type PlusCode1 } from "./plus-code1.js";

export type GeocodingResult = {
  /** An array containing the separate components applicable to this address. */
  addressComponents: AddressComponent[];
  /** The human-readable address of this location. */
  formattedAddress: string;
  geometry: Geometry1;
  /**
   * A unique identifier that can be used with other Google APIs. For example, you can use the
   * `place_id` in a Places API request to get details of a local business, such as phone number,
   * opening hours, user reviews, and more. See the [place ID
   * overview](https://developers.google.com/places/place-id).
   */
  placeId: string;
  plusCode?: PlusCode1;
  /**
   * The `types[]` array indicates the type of the returned result. This array contains a set of
   * zero or more tags identifying the type of feature returned in the result. For example, a
   * geocode of "Chicago" returns "locality" which indicates that "Chicago" is a city, and also
   * returns "political" which indicates it is a political entity.
   */
  types: string[];
  /**
   * An array denoting all the localities contained in a postal code. This is only present when the
   * result is a postal code that contains multiple localities.
   */
  postcodeLocalities?: string[];
  /**
   * Indicates that the geocoder did not return an exact match for the original request, though it
   * was able to match part of the requested address. You may wish to examine the original request
   * for misspellings and/or an incomplete address.
   *
   * Partial matches most often occur for street addresses that do not exist within the locality you
   * pass in the request. Partial matches may also be returned when a request matches two or more
   * locations in the same locality.
   */
  partialMatch?: boolean;
};

export const geocodingResultSchema: Schema<GeocodingResult> = s.object<GeocodingResult>({
  addressComponents: s.array(s.lazy(() => addressComponentSchema)),
  formattedAddress: s.string(),
  geometry: geometry1Schema,
  placeId: s.string(),
  plusCode: s.optional(s.lazy(() => plusCode1Schema)),
  types: s.array(s.string()),
  postcodeLocalities: s.optional(s.array(s.string())),
  partialMatch: s.optional(s.boolean()),
  _keysMap: {
    addressComponents: "address_components",
    formattedAddress: "formatted_address",
    placeId: "place_id",
    plusCode: "plus_code",
    postcodeLocalities: "postcode_localities",
    partialMatch: "partial_match",
  },
});

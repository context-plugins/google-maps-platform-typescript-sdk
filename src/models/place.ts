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

export type Place = {
  addressComponents?: AddressComponent[];
  adrAddress?: string;
  businessStatus?: BusinessStatus;
  curbsidePickup?: boolean;
  currentOpeningHours?: CurrentOpeningHours;
  delivery?: boolean;
  dineIn?: boolean;
  editorialSummary?: EditorialSummary;
  formattedAddress?: string;
  formattedPhoneNumber?: string;
  geometry?: Geometry2;
  icon?: string;
  iconBackgroundColor?: string;
  iconMaskBaseUri?: string;
  internationalPhoneNumber?: string;
  name?: string;
  openingHours?: OpeningHours;
  permanentlyClosed?: boolean;
  photos?: PlacePhoto[];
  placeId?: string;
  plusCode?: PlusCode1;
  priceLevel?: number;
  rating?: number;
  reference?: string;
  reservable?: boolean;
  reviews?: PlaceReview[];
  servesBeer?: boolean;
  servesBreakfast?: boolean;
  servesBrunch?: boolean;
  servesDinner?: boolean;
  servesLunch?: boolean;
  servesVegetarianFood?: boolean;
  servesWine?: boolean;
  scope?: string;
  secondaryOpeningHours?: PlaceOpeningHours[];
  takeout?: boolean;
  types?: string[];
  url?: string;
  userRatingsTotal?: number;
  utcOffset?: number;
  vicinity?: string;
  website?: string;
  wheelchairAccessibleEntrance?: boolean;
};

export const placeSchema: Schema<Place> = s.object<Place>({
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
  priceLevel: s.optional(s.number()),
  rating: s.optional(s.number()),
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
  userRatingsTotal: s.optional(s.number()),
  utcOffset: s.optional(s.number()),
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

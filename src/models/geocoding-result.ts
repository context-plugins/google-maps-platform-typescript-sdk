import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressComponentSchema, type AddressComponent } from "./address-component.js";
import { geometry1Schema, type Geometry1 } from "./geometry1.js";
import { plusCode1Schema, type PlusCode1 } from "./plus-code1.js";

export type GeocodingResult = {
  addressComponents: AddressComponent[];
  formattedAddress: string;
  geometry: Geometry1;
  placeId: string;
  plusCode?: PlusCode1;
  types: string[];
  postcodeLocalities?: string[];
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

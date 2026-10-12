import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AddressComponent = {
  /** The full text description or name of the address component as returned by the Geocoder. */
  longName: string;
  /**
   * An abbreviated textual name for the address component, if available. For example, an address
   * component for the state of Alaska may have a long_name of "Alaska" and a short_name of "AK"
   * using the 2-letter postal abbreviation.
   */
  shortName: string;
  /**
   * An array indicating the type of the address component. See the list of [supported
   * types](https://developers.google.com/maps/documentation/places/web-service/supported_types).
   */
  types: string[];
};

export const addressComponentSchema: Schema<AddressComponent> = s.object<AddressComponent>({
  longName: s.string(),
  shortName: s.string(),
  types: s.array(s.string()),
  _keysMap: {
    longName: "long_name",
    shortName: "short_name",
  },
});

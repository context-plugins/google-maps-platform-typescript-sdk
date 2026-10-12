import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A photo of a Place. The photo can be accesed via the [Place
 * Photo](https://developers.google.com/places/web-service/photos) API using an url in the following
 * pattern:
 *
 * ```
 * https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=photo_reference&key=YOUR_API_KEY
 * ```
 *
 * See [Place Photos](https://developers.google.com/places/web-service/photos) for more information.
 */
export type PlacePhoto = {
  /** The height of the photo. */
  height: number;
  /** The width of the photo. */
  width: number;
  /** The HTML attributions for the photo. */
  htmlAttributions: string[];
  /** A string used to identify the photo when you perform a Photo request. */
  photoReference: string;
};

export const placePhotoSchema: Schema<PlacePhoto> = s.object<PlacePhoto>({
  height: s.float64(),
  width: s.float64(),
  htmlAttributions: s.array(s.string()),
  photoReference: s.string(),
  _keysMap: {
    htmlAttributions: "html_attributions",
    photoReference: "photo_reference",
  },
});

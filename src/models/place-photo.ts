import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlacePhoto = {
  height: number;
  width: number;
  htmlAttributions: string[];
  photoReference: string;
};

export const placePhotoSchema: Schema<PlacePhoto> = s.object<PlacePhoto>({
  height: s.number(),
  width: s.number(),
  htmlAttributions: s.array(s.string()),
  photoReference: s.string(),
  _keysMap: {
    htmlAttributions: "html_attributions",
    photoReference: "photo_reference",
  },
});

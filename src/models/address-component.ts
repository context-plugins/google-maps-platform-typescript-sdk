import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AddressComponent = {
  longName: string;
  shortName: string;
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

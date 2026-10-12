import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of input. This can be one of either `textquery` or `phonenumber`. Phone numbers must be
 * in international format (prefixed by a plus sign ("+"), followed by the country code, then the
 * phone number itself). See [E.164 ITU recommendation](https://en.wikipedia.org/wiki/E.164) for
 * more information.
 */
export const Inputtype1 = {
  Textquery: "textquery",
  Phonenumber: "phonenumber",
} as const;
export type Inputtype1 = (typeof Inputtype1)[keyof typeof Inputtype1] | (string & {});

export const inputtype1Schema: EnumSchema<Inputtype1> = s.enumOf<Inputtype1>(Inputtype1);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Inputtype1 = {
  Textquery: "textquery",
  Phonenumber: "phonenumber",
} as const;
export type Inputtype1 = (typeof Inputtype1)[keyof typeof Inputtype1] | (string & {});

export const inputtype1Schema: EnumSchema<Inputtype1> = s.enumOf<Inputtype1>(Inputtype1);

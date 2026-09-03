import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Inputtype = {
  Textquery: "textquery",
  Phonenumber: "phonenumber",
} as const;
export type Inputtype = (typeof Inputtype)[keyof typeof Inputtype] | (string & {});

export const inputtypeSchema: EnumSchema<Inputtype> = s.enumOf<Inputtype>(Inputtype);

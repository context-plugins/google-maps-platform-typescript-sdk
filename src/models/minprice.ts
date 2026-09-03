import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Minprice = {
  _0: "0",
  _1: "1",
  _2: "2",
  _3: "3",
  _4: "4",
} as const;
export type Minprice = (typeof Minprice)[keyof typeof Minprice] | (string & {});

export const minpriceSchema: EnumSchema<Minprice> = s.enumOf<Minprice>(Minprice);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Minprice = {
  /** Free. */
  _0: "0",
  /** Inexpensive. */
  _1: "1",
  /** Moderately priced. */
  _2: "2",
  /** Expensive. */
  _3: "3",
  /** Very expensive. */
  _4: "4",
} as const;
export type Minprice = (typeof Minprice)[keyof typeof Minprice] | (string & {});

export const minpriceSchema: EnumSchema<Minprice> = s.enumOf<Minprice>(Minprice);

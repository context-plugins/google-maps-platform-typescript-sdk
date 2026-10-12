import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Maxprice = {
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
export type Maxprice = (typeof Maxprice)[keyof typeof Maxprice] | (string & {});

export const maxpriceSchema: EnumSchema<Maxprice> = s.enumOf<Maxprice>(Maxprice);

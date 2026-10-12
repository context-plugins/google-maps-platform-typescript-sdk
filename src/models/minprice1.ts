import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Restricts results to only those places within the specified range. Valid values range between 0
 * (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a specific
 * value will vary from region to region.
 */
export const Minprice1 = {
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
export type Minprice1 = (typeof Minprice1)[keyof typeof Minprice1] | (string & {});

export const minprice1Schema: EnumSchema<Minprice1> = s.enumOf<Minprice1>(Minprice1);

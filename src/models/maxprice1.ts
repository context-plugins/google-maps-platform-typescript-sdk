import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Restricts results to only those places within the specified range. Valid values range between 0
 * (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a specific
 * value will vary from region to region.
 */
export const Maxprice1 = {
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
export type Maxprice1 = (typeof Maxprice1)[keyof typeof Maxprice1] | (string & {});

export const maxprice1Schema: EnumSchema<Maxprice1> = s.enumOf<Maxprice1>(Maxprice1);

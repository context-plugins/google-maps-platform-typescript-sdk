import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Maxprice = {
  _0: "0",
  _1: "1",
  _2: "2",
  _3: "3",
  _4: "4",
} as const;
export type Maxprice = (typeof Maxprice)[keyof typeof Maxprice] | (string & {});

export const maxpriceSchema: EnumSchema<Maxprice> = s.enumOf<Maxprice>(Maxprice);

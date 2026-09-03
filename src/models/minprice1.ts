import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Minprice1 = {
  _0: "0",
  _1: "1",
  _2: "2",
  _3: "3",
  _4: "4",
} as const;
export type Minprice1 = (typeof Minprice1)[keyof typeof Minprice1] | (string & {});

export const minprice1Schema: EnumSchema<Minprice1> = s.enumOf<Minprice1>(Minprice1);

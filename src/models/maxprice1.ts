import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Maxprice1 = {
  _0: "0",
  _1: "1",
  _2: "2",
  _3: "3",
  _4: "4",
} as const;
export type Maxprice1 = (typeof Maxprice1)[keyof typeof Maxprice1] | (string & {});

export const maxprice1Schema: EnumSchema<Maxprice1> = s.enumOf<Maxprice1>(Maxprice1);

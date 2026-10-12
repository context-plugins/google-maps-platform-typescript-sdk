import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Fare1 = {
  /**
   * An [ISO 4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) indicating the currency
   * that the amount is expressed in.
   */
  currency: string;
  /** The total fare amount, in the currency specified. */
  value: number;
  /** The total fare amount, formatted in the requested language. */
  text: string;
};

export const fare1Schema: Schema<Fare1> = s.object<Fare1>({
  currency: s.string(),
  value: s.float64(),
  text: s.string(),
});

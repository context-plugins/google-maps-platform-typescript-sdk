import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Fare1 = {
  currency: string;
  value: number;
  text: string;
};

export const fare1Schema: Schema<Fare1> = s.object<Fare1>({
  currency: s.string(),
  value: s.number(),
  text: s.string(),
});

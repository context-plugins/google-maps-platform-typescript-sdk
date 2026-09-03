import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Fare = {
  currency: string;
  value: number;
  text: string;
};

export const fareSchema: Schema<Fare> = s.object<Fare>({
  currency: s.string(),
  value: s.number(),
  text: s.string(),
});

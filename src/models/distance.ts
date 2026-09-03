import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Distance = {
  text: string;
  value: number;
};

export const distanceSchema: Schema<Distance> = s.object<Distance>({
  text: s.string(),
  value: s.number(),
});

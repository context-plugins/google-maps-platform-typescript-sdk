import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DurationInTraffic = {
  text: string;
  value: number;
};

export const durationInTrafficSchema: Schema<DurationInTraffic> = s.object<DurationInTraffic>({
  text: s.string(),
  value: s.number(),
});

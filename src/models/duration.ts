import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Duration = {
  text: string;
  value: number;
};

export const durationSchema: Schema<Duration> = s.object<Duration>({
  text: s.string(),
  value: s.number(),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { northeastSchema, type Northeast } from "./northeast.js";
import { southwestSchema, type Southwest } from "./southwest.js";

export type Bounds1 = {
  northeast: Northeast;
  southwest: Southwest;
};

export const bounds1Schema: Schema<Bounds1> = s.object<Bounds1>({
  northeast: northeastSchema,
  southwest: southwestSchema,
});

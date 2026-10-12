import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { northeastSchema, type Northeast } from "./northeast.js";
import { southwestSchema, type Southwest } from "./southwest.js";

/** A rectangle in geographical coordinates from points at the southwest and northeast corners. */
export type Bounds = {
  northeast: Northeast;
  southwest: Southwest;
};

export const boundsSchema: Schema<Bounds> = s.object<Bounds>({
  northeast: northeastSchema,
  southwest: southwestSchema,
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { northeastSchema, type Northeast } from "./northeast.js";
import { southwestSchema, type Southwest } from "./southwest.js";

export type Viewport = {
  northeast: Northeast;
  southwest: Southwest;
};

export const viewportSchema: Schema<Viewport> = s.object<Viewport>({
  northeast: northeastSchema,
  southwest: southwestSchema,
});

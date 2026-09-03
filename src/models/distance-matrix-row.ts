import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { distanceMatrixElementSchema, type DistanceMatrixElement } from "./distance-matrix-element.js";

export type DistanceMatrixRow = {
  elements: DistanceMatrixElement[];
};

export const distanceMatrixRowSchema: Schema<DistanceMatrixRow> = s.object<DistanceMatrixRow>({
  elements: s.array(s.lazy(() => distanceMatrixElementSchema)),
});

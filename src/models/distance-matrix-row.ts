import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { distanceMatrixElementSchema, type DistanceMatrixElement } from "./distance-matrix-element.js";

export type DistanceMatrixRow = {
  /**
   * When the Distance Matrix API returns results, it places them within a JSON rows array. Even if
   * no results are returned (such as when the origins and/or destinations don't exist), it still
   * returns an empty array.
   *
   * Rows are ordered according to the values in the origin parameter of the request. Each row
   * corresponds to an origin, and each element within that row corresponds to a pairing of the
   * origin with a destination value.
   *
   * Each row array contains one or more element entries, which in turn contain the information
   * about a single origin-destination pairing.
   */
  elements: DistanceMatrixElement[];
};

export const distanceMatrixRowSchema: Schema<DistanceMatrixRow> = s.object<DistanceMatrixRow>({
  elements: s.array(s.lazy(() => distanceMatrixElementSchema)),
});

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Limits Street View searches to selected sources. Valid values are:
 * * `default` uses the default sources for Street View; searches are not limited to specific
 *   sources.
 * * `outdoor` limits searches to outdoor collections. Indoor collections are not included in search
 *   results. Note that outdoor panoramas may not exist for the specified location. Also note that
 *   the search only returns panoramas where it's possible to determine whether they're indoors or
 *   outdoors. For example, PhotoSpheres are not returned because it's unknown whether they are
 *   indoors or outdoors.
 */
export const Source1 = {
  Default: "default",
  Outdoor: "outdoor",
} as const;
export type Source1 = (typeof Source1)[keyof typeof Source1] | (string & {});

export const source1Schema: EnumSchema<Source1> = s.enumOf<Source1>(Source1);

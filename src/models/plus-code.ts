import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An encoded location reference, derived from latitude and longitude coordinates, that represents
 * an area, 1/8000th of a degree by 1/8000th of a degree (about 14m x 14m at the equator) or
 * smaller. Plus codes can be used as a replacement for street addresses in places where they do not
 * exist (where buildings are not numbered or streets are not named).
 */
export type PlusCode = {
  /**
   * The `compound_code` is a 6 character or longer local code with an explicit location (`CWC8+R9,
   * Mountain View, CA, USA`). Some APIs may return an empty string if the `compound_code` is not
   * available.
   */
  compoundCode?: string;
  /**
   * The `global_code` is a 4 character area code and 6 character or longer local code
   * (`849VCWC8+R9`).
   */
  globalCode: string;
};

export const plusCodeSchema: Schema<PlusCode> = s.object<PlusCode>({
  compoundCode: s.optional(s.string()),
  globalCode: s.string(),
  _keysMap: {
    compoundCode: "compound_code",
    globalCode: "global_code",
  },
});

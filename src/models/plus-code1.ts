import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlusCode1 = {
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

export const plusCode1Schema: Schema<PlusCode1> = s.object<PlusCode1>({
  compoundCode: s.optional(s.string()),
  globalCode: s.string(),
  _keysMap: {
    compoundCode: "compound_code",
    globalCode: "global_code",
  },
});

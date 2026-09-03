import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlusCode1 = {
  compoundCode?: string;
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

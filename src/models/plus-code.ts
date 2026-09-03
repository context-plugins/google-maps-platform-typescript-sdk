import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlusCode = {
  compoundCode?: string;
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

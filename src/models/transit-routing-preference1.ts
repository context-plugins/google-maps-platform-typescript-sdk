import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransitRoutingPreference1 = {
  LessWalking: "less_walking",
  FewerTransfers: "fewer_transfers",
} as const;
export type TransitRoutingPreference1 =
  | (typeof TransitRoutingPreference1)[keyof typeof TransitRoutingPreference1]
  | (string & {});

export const transitRoutingPreference1Schema: EnumSchema<TransitRoutingPreference1> =
  s.enumOf<TransitRoutingPreference1>(TransitRoutingPreference1);

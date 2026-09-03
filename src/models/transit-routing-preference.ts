import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransitRoutingPreference = {
  LessWalking: "less_walking",
  FewerTransfers: "fewer_transfers",
} as const;
export type TransitRoutingPreference =
  | (typeof TransitRoutingPreference)[keyof typeof TransitRoutingPreference]
  | (string & {});

export const transitRoutingPreferenceSchema: EnumSchema<TransitRoutingPreference> =
  s.enumOf<TransitRoutingPreference>(TransitRoutingPreference);

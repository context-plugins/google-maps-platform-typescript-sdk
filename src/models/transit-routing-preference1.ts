import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies preferences for transit routes. Using this parameter, you can bias the options
 * returned, rather than accepting the default best route chosen by the API. This parameter may only
 * be specified for transit directions. The parameter supports the following arguments:
 * * `less_walking` indicates that the calculated route should prefer limited amounts of walking.
 * * `fewer_transfers` indicates that the calculated route should prefer a limited number of
 *   transfers.
 */
export const TransitRoutingPreference1 = {
  LessWalking: "less_walking",
  FewerTransfers: "fewer_transfers",
} as const;
export type TransitRoutingPreference1 =
  | (typeof TransitRoutingPreference1)[keyof typeof TransitRoutingPreference1]
  | (string & {});

export const transitRoutingPreference1Schema: EnumSchema<TransitRoutingPreference1> =
  s.enumOf<TransitRoutingPreference1>(TransitRoutingPreference1);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the assumptions to use when calculating time in traffic. This setting affects the value
 * returned in the duration_in_traffic field in the response, which contains the predicted time in
 * traffic based on historical averages. The `traffic_model` parameter may only be specified for
 * driving directions where the request includes a `departure_time`. The available values for this
 * parameter are:
 * * `best_guess` (default) indicates that the returned duration_in_traffic should be the best
 *   estimate of travel time given what is known about both historical traffic conditions and live
 *   traffic. Live traffic becomes more important the closer the `departure_time` is to now.
 * * `pessimistic` indicates that the returned duration_in_traffic should be longer than the actual
 *   travel time on most days, though occasional days with particularly bad traffic conditions may
 *   exceed this value.
 * * `optimistic` indicates that the returned duration_in_traffic should be shorter than the actual
 *   travel time on most days, though occasional days with particularly good traffic conditions may
 *   be faster than this value. The default value of `best_guess` will give the most useful
 *   predictions for the vast majority of use cases. It is possible the `best_guess` travel time
 *   prediction may be shorter than `optimistic`, or alternatively, longer than `pessimistic`, due
 *   to the way the `best_guess` prediction model integrates live traffic information.
 */
export const TrafficModel1 = {
  BestGuess: "best_guess",
  Pessimistic: "pessimistic",
  Optimistic: "optimistic",
} as const;
export type TrafficModel1 = (typeof TrafficModel1)[keyof typeof TrafficModel1] | (string & {});

export const trafficModel1Schema: EnumSchema<TrafficModel1> = s.enumOf<TrafficModel1>(TrafficModel1);

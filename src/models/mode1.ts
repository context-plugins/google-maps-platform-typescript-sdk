import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * For the calculation of distances and directions, you may specify the transportation mode to use.
 * By default, `DRIVING` mode is used. By default, directions are calculated as driving directions.
 * The following travel modes are supported:
 *
 * * `driving` (default) indicates standard driving directions or distance using the road network.
 * * `walking` requests walking directions or distance via pedestrian paths & sidewalks (where
 *   available).
 * * `bicycling` requests bicycling directions or distance via bicycle paths & preferred streets
 *   (where available).
 * * `transit` requests directions or distance via public transit routes (where available). Transit
 *   trips are available for up to 7 days in the past or 100 days in the future. If you set the mode
 *   to transit, you can optionally specify either a `departure_time` or an `arrival_time`. If
 *   neither time is specified, the `departure_time` defaults to now (that is, the departure time
 *   defaults to the current time). You can also optionally include a `transit_mode` and/or a
 *   `transit_routing_preference`.
 *
 * <div class="note">Note: Both walking and bicycling directions may sometimes not include clear
 * pedestrian or bicycling paths, so these directions will return warnings in the returned result
 * which you must display to the user.</div>
 */
export const Mode1 = {
  Driving: "driving",
  Bicycling: "bicycling",
  Transit: "transit",
  Walking: "walking",
} as const;
export type Mode1 = (typeof Mode1)[keyof typeof Mode1] | (string & {});

export const mode1Schema: EnumSchema<Mode1> = s.enumOf<Mode1>(Mode1);

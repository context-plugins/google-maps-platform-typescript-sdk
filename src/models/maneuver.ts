import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Contains the action to take for the current step (turn left, merge, straight, etc.). Values are
 * subject to change, and new values may be introduced without prior notice.
 */
export const Maneuver = {
  TurnSlightLeft: "turn-slight-left",
  TurnSharpLeft: "turn-sharp-left",
  TurnLeft: "turn-left",
  TurnSlightRight: "turn-slight-right",
  TurnSharpRight: "turn-sharp-right",
  KeepRight: "keep-right",
  KeepLeft: "keep-left",
  UturnLeft: "uturn-left",
  UturnRight: "uturn-right",
  TurnRight: "turn-right",
  Straight: "straight",
  RampLeft: "ramp-left",
  RampRight: "ramp-right",
  Merge: "merge",
  ForkLeft: "fork-left",
  ForkRight: "fork-right",
  Ferry: "ferry",
  FerryTrain: "ferry-train",
  RoundaboutLeft: "roundabout-left",
  RoundaboutRight: "roundabout-right",
} as const;
export type Maneuver = (typeof Maneuver)[keyof typeof Maneuver] | (string & {});

export const maneuverSchema: EnumSchema<Maneuver> = s.enumOf<Maneuver>(Maneuver);

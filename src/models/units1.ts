import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the unit system to use when displaying results.
 *
 * Directions results contain text within distance fields that may be displayed to the user to
 * indicate the distance of a particular "step" of the route. By default, this text uses the unit
 * system of the origin's country or region.
 *
 * For example, a route from "Chicago, IL" to "Toronto, ONT" will display results in miles, while
 * the reverse route will display results in kilometers. You may override this unit system by
 * setting one explicitly within the request's units parameter, passing one of the following values:
 *
 * * `metric` specifies usage of the metric system. Textual distances are returned using kilometers
 *   and meters.
 * * `imperial` specifies usage of the Imperial (English) system. Textual distances are returned
 *   using miles and feet.
 *
 * <div class="note">Note: this unit system setting only affects the text displayed within distance
 * fields. The distance fields also contain values which are always expressed in meters.</div>
 */
export const Units1 = {
  Imperial: "imperial",
  Metric: "metric",
} as const;
export type Units1 = (typeof Units1)[keyof typeof Units1] | (string & {});

export const units1Schema: EnumSchema<Units1> = s.enumOf<Units1>(Units1);

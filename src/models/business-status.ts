import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the operational status of the place, if it is a business. If no data exists,
 * `business_status` is not returned.
 */
export const BusinessStatus = {
  Operational: "OPERATIONAL",
  ClosedTemporarily: "CLOSED_TEMPORARILY",
  ClosedPermanently: "CLOSED_PERMANENTLY",
} as const;
export type BusinessStatus = (typeof BusinessStatus)[keyof typeof BusinessStatus] | (string & {});

export const businessStatusSchema: EnumSchema<BusinessStatus> = s.enumOf<BusinessStatus>(BusinessStatus);

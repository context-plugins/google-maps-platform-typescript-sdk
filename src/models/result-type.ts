import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResultType = {
  AdministrativeAreaLevel1: "administrative_area_level_1",
  AdministrativeAreaLevel2: "administrative_area_level_2",
  AdministrativeAreaLevel3: "administrative_area_level_3",
  AdministrativeAreaLevel4: "administrative_area_level_4",
  AdministrativeAreaLevel5: "administrative_area_level_5",
  Airport: "airport",
  ColloquialArea: "colloquial_area",
  Country: "country",
  Intersection: "intersection",
  Locality: "locality",
  NaturalFeature: "natural_feature",
  Neighborhood: "neighborhood",
  Park: "park",
  PlusCode: "plus_code",
  Political: "political",
  PostalCode: "postal_code",
  Premise: "premise",
  Route: "route",
  StreetAddress: "street_address",
  Sublocality: "sublocality",
  Subpremise: "subpremise",
} as const;
export type ResultType = (typeof ResultType)[keyof typeof ResultType] | (string & {});

export const resultTypeSchema: EnumSchema<ResultType> = s.enumOf<ResultType>(ResultType);

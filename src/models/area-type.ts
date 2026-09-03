import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AreaType = {
  AdministrativeAreaLevel1: "administrative_area_level_1",
  AdministrativeAreaLevel2: "administrative_area_level_2",
  AdministrativeAreaLevel3: "administrative_area_level_3",
  AdministrativeAreaLevel4: "administrative_area_level_4",
  AdministrativeAreaLevel5: "administrative_area_level_5",
  AmusementPark: "amusement_park",
  Airport: "airport",
  ColloquialArea: "colloquial_area",
  Country: "country",
  Establishment: "establishment",
  Intersection: "intersection",
  Locality: "locality",
  NaturalFeature: "natural_feature",
  Neighborhood: "neighborhood",
  Park: "park",
  PlusCode: "plus_code",
  PointOfInterest: "point_of_interest",
  Political: "political",
  PostalCode: "postal_code",
  Premise: "premise",
  Route: "route",
  StreetAddress: "street_address",
  Sublocality: "sublocality",
  SublocalityLevel1: "sublocality_level_1",
  Subpremise: "subpremise",
  TouristAttraction: "tourist_attraction",
  TrainStation: "train_station",
  TransitStation: "transit_station",
} as const;
export type AreaType = (typeof AreaType)[keyof typeof AreaType] | (string & {});

export const areaTypeSchema: EnumSchema<AreaType> = s.enumOf<AreaType>(AreaType);

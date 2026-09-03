import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { geocodingResponseSchema, type GeocodingResponse } from "../models/geocoding-response.js";
import { language1Schema, type Language1 } from "../models/language1.js";
import { locationTypeSchema, type LocationType } from "../models/location-type.js";
import { region1Schema, type Region1 } from "../models/region1.js";
import { resultTypeSchema, type ResultType } from "../models/result-type.js";
import type { Servers } from "../servers.js";

export class GeocodingApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  geocode(
    request: GeocodingApi.GeocodeRequest,
    options?: RequestOptions,
  ): ApiPromise<GeocodingResponse, ResponseError> {
    return this.#rawClient.execute<GeocodingResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/maps/api/geocode/json"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "address", value: request.address, schema: s.optional(s.string()) },
          { name: "bounds", value: request.bounds, schema: s.optional(s.array(s.string())) },
          { name: "components", value: request.components, schema: s.optional(s.array(s.string())) },
          { name: "latlng", value: request.latlng, schema: s.optional(s.string()) },
          {
            name: "location_type",
            value: request.locationType,
            schema: s.optional(s.array(s.lazy(() => locationTypeSchema))),
          },
          { name: "place_id", value: request.placeId, schema: s.optional(s.string()) },
          {
            name: "result_type",
            value: request.resultType,
            schema: s.optional(s.array(s.lazy(() => resultTypeSchema))),
          },
          { name: "language", value: request.language, schema: s.optional(s.lazy(() => language1Schema)) },
          { name: "region", value: request.region, schema: s.optional(s.lazy(() => region1Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: geocodingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace GeocodingApi {
  export type GeocodeRequest = {
    address?: string;
    bounds?: string[];
    components?: string[];
    latlng?: string;
    locationType?: LocationType[];
    placeId?: string;
    resultType?: ResultType[];
    language?: Language1;
    region?: Region1;
  };
}

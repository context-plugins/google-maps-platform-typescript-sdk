import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  mapsApiElevationJsonResponseSchema,
  type MapsApiElevationJsonResponse,
} from "../models/maps-api-elevation-json-response.js";
import type { Servers } from "../servers.js";

export class ElevationApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  elevation(
    request: ElevationApi.ElevationRequest,
    options?: RequestOptions,
  ): ApiPromise<MapsApiElevationJsonResponse, ResponseError> {
    return this.#rawClient.execute<MapsApiElevationJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/maps/api/elevation/json"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "locations", value: request.locations, schema: s.optional(s.array(s.string())) },
          { name: "path", value: request.path, schema: s.optional(s.array(s.string())) },
          { name: "samples", value: request.samples, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mapsApiElevationJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ElevationApi {
  export type ElevationRequest = {
    locations?: string[];
    path?: string[];
    samples?: number;
  };
}

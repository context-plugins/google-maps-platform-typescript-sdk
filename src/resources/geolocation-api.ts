import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  geolocationV1GeolocateRequestSchema,
  type GeolocationV1GeolocateRequest,
} from "../models/geolocation-v1-geolocate-request.js";
import {
  geolocationV1GeolocateResponseSchema,
  type GeolocationV1GeolocateResponse,
} from "../models/geolocation-v1-geolocate-response.js";
import {
  geolocationV1Geolocate400Error1Schema,
  type GeolocationV1Geolocate400Error1,
} from "../models/geolocation-v1-geolocate400-error1.js";
import {
  geolocationV1Geolocate404Error1Schema,
  type GeolocationV1Geolocate404Error1,
} from "../models/geolocation-v1-geolocate404-error1.js";
import type { Servers } from "../servers.js";

export class GeolocationApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  geolocate(
    request: GeolocationApi.GeolocateRequest,
    options?: RequestOptions,
  ): ApiPromise<GeolocationV1GeolocateResponse, GeolocationApi.GeolocateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/geolocation/v1/geolocate"),
        auth: this.#auth.apiKeyAuth,
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => geolocationV1GeolocateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: geolocationV1GeolocateResponseSchema },
        errorFactory: GeolocationApi.GeolocateError,
      },
      options,
    );
  }
}

export namespace GeolocationApi {
  export type GeolocateRequest = {
    body?: GeolocationV1GeolocateRequest;
  };

  export class GeolocateError extends ResponseError<
    | Declared<"geolocationV1Geolocate400Error1", GeolocationV1Geolocate400Error1>
    | Declared<"geolocationV1Geolocate404Error1", GeolocationV1Geolocate404Error1>
  > {
    static readonly errors: ErrorDecoders<GeolocateError> = [
      {
        on: 400,
        kind: "geolocationV1Geolocate400Error1",
        decode: { kind: "json", schema: geolocationV1Geolocate400Error1Schema },
      },
      {
        on: 404,
        kind: "geolocationV1Geolocate404Error1",
        decode: { kind: "json", schema: geolocationV1Geolocate404Error1Schema },
      },
    ];
  }
}

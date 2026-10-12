import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * geolocate
   *
   * @remarks
   * Geolocation API returns a location and accuracy radius based on information about cell towers
   * and WiFi nodes that the mobile client can detect. This document describes the protocol used to
   * send this data to the server and to return a response to the client.
   *
   * Communication is done over HTTPS using POST. Both request and response are formatted as JSON,
   * and the content type of both is `application/json`.
   *
   * You must specify a key in your request, included as the value of a`key` parameter. A `key` is
   * your application's API key. This key identifies your application for purposes of quota
   * management. Learn how to [get a
   * key](https://developers.google.com/maps/documentation/geolocation/get-api-key).
   *
   * @returns 200 OK
   *
   * @throws {@link GeolocationApi.GeolocateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GoogleMapsPlatformError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  geolocate(
    request: GeolocationApi.GeolocateRequest,
    options?: RequestOptions,
  ): ApiPromise<GeolocationV1GeolocateResponse, GeolocationApi.GeolocateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/geolocation/v1/geolocate"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The request body must be formatted as JSON. */
    body?: GeolocationV1GeolocateRequest;
  };

  export class GeolocateError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"geolocationV1Geolocate400Error1", GeolocationV1Geolocate400Error1>
      | Declared<"geolocationV1Geolocate404Error1", GeolocationV1Geolocate404Error1>
    >;

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

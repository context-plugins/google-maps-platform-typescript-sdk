import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  nearestRoadsErrorResponseSchema,
  type NearestRoadsErrorResponse,
} from "../models/nearest-roads-error-response.js";
import { nearestRoadsResponseSchema, type NearestRoadsResponse } from "../models/nearest-roads-response.js";
import { snapToRoadsResponseSchema, type SnapToRoadsResponse } from "../models/snap-to-roads-response.js";
import type { Servers } from "../servers.js";

export class RoadsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  nearestRoads(
    request: RoadsApi.NearestRoadsRequest,
    options?: RequestOptions,
  ): ApiPromise<NearestRoadsResponse, RoadsApi.NearestRoadsApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v1/nearestRoads"),
        auth: this.#auth.apiKeyAuth,
        query: [{ name: "points", value: request.points, schema: s.array(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: nearestRoadsResponseSchema },
        errorFactory: RoadsApi.NearestRoadsApiError,
      },
      options,
    );
  }

  snapToRoads(
    request: RoadsApi.SnapToRoadsRequest,
    options?: RequestOptions,
  ): ApiPromise<SnapToRoadsResponse, ResponseError> {
    return this.#rawClient.execute<SnapToRoadsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v1/snaptoroads"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "path", value: request.path, schema: s.array(s.string()) },
          { name: "interpolate", value: request.interpolate, schema: s.optional(s.boolean()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: snapToRoadsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace RoadsApi {
  export type NearestRoadsRequest = {
    points: string[];
  };

  export class NearestRoadsApiError extends ResponseError<
    Declared<"nearestRoadsErrorResponse", NearestRoadsErrorResponse>
  > {
    static readonly errors: ErrorDecoders<NearestRoadsApiError> = [
      {
        on: 400,
        kind: "nearestRoadsErrorResponse",
        decode: { kind: "json", schema: nearestRoadsErrorResponseSchema },
      },
    ];
  }

  export type SnapToRoadsRequest = {
    path: string[];
    interpolate?: boolean;
  };
}

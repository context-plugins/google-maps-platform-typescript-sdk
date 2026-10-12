import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * nearestRoads
   *
   * @remarks
   * This service returns individual road segments for a given set of GPS coordinates. This services
   * takes up to 100 GPS points and returns the closest road segments for each point. The points
   * passed do not need to be part of a continuous path.
   *
   * @returns 200 OK
   *
   * @throws {@link RoadsApi.NearestRoadsApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GoogleMapsPlatformError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  nearestRoads(
    request: RoadsApi.NearestRoadsRequest,
    options?: RequestOptions,
  ): ApiPromise<NearestRoadsResponse, RoadsApi.NearestRoadsApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/nearestRoads"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "points", value: request.points, schema: s.array(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: nearestRoadsResponseSchema },
        errorFactory: RoadsApi.NearestRoadsApiError,
      },
      options,
    );
  }

  /**
   * snapToRoads
   *
   * @remarks
   * This service returns the best-fit road geometry for a given set of GPS coordinates. This
   * service takes up to 100 GPS points collected along a route, and returns a similar set of data
   * with the points snapped to the most likely roads the vehicle was traveling along. Optionally,
   * you can request that the points be interpolated, resulting in a path that smoothly follows the
   * geometry of the road.
   *
   * @returns 200 OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GoogleMapsPlatformError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  snapToRoads(
    request: RoadsApi.SnapToRoadsRequest,
    options?: RequestOptions,
  ): ApiPromise<SnapToRoadsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/snaptoroads"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "path", value: request.path, schema: s.array(s.string()) },
          { name: "interpolate", value: request.interpolate, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: snapToRoadsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace RoadsApi {
  export type NearestRoadsRequest = {
    /**
     * The points to be snapped. The points parameter accepts a list of latitude/longitude pairs.
     * Separate latitude and longitude values with commas. Separate coordinates with the pipe
     * character: "|". For example:
     * `points=60.170880,24.942795|60.170879,24.942796|60.170877,24.942796`.
     */
    points: string[];
  };

  export class NearestRoadsApiError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"nearestRoadsErrorResponse", NearestRoadsErrorResponse>>;

    static readonly errors: ErrorDecoders<NearestRoadsApiError> = [
      {
        on: 400,
        kind: "nearestRoadsErrorResponse",
        decode: { kind: "json", schema: nearestRoadsErrorResponseSchema },
      },
    ];
  }

  export type SnapToRoadsRequest = {
    /**
     * The path to be snapped. The path parameter accepts a list of latitude/longitude pairs.
     * Latitude and longitude values should be separated by commas. Coordinates should be separated
     * by the pipe character: "|". For example:
     * `path=60.170880,24.942795|60.170879,24.942796|60.170877,24.942796`. <div class="note">Note:
     * The snapping algorithm works best for points that are not too far apart. If you observe odd
     * snapping behavior, try creating paths that have points closer together. To ensure the best
     * snap-to-road quality, you should aim to provide paths on which consecutive pairs of points
     * are within 300m of each other. This will also help in handling any isolated, long jumps
     * between consecutive points caused by GPS signal loss, or noise.</div>
     */
    path: string[];
    /**
     * Whether to interpolate a path to include all points forming the full road-geometry. When
     * true, additional interpolated points will also be returned, resulting in a path that smoothly
     * follows the geometry of the road, even around corners and through tunnels. Interpolated paths
     * will most likely contain more points than the original path. Defaults to `false`.
     */
    interpolate?: boolean;
  };
}

import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { language1Schema, type Language1 } from "../models/language1.js";
import { timeZoneResponseSchema, type TimeZoneResponse } from "../models/time-zone-response.js";
import type { Servers } from "../servers.js";

export class TimeZoneApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  timezone(
    request: TimeZoneApi.TimezoneRequest,
    options?: RequestOptions,
  ): ApiPromise<TimeZoneResponse, ResponseError> {
    return this.#rawClient.execute<TimeZoneResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/maps/api/timezone/json"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "location", value: request.location, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.number() },
          { name: "language", value: request.language, schema: s.optional(s.lazy(() => language1Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: timeZoneResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TimeZoneApi {
  export type TimezoneRequest = {
    location: string;
    timestamp: number;
    language?: Language1;
  };
}

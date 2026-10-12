import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * timezone
   *
   * @remarks
   * The Time Zone API provides a simple interface to request the time zone for locations on the
   * surface of the earth, as well as the time offset from UTC for each of those locations. You
   * request the time zone information for a specific latitude/longitude pair and date. The API
   * returns the name of that time zone, the time offset from UTC, and the daylight savings offset.
   *
   * @returns 200 OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GoogleMapsPlatformError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  timezone(
    request: TimeZoneApi.TimezoneRequest,
    options?: RequestOptions,
  ): ApiPromise<TimeZoneResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/maps/api/timezone/json"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "location", value: request.location, schema: s.string() },
          { name: "timestamp", value: request.timestamp, schema: s.float64() },
          { name: "language", value: request.language, schema: s.optional(s.lazy(() => language1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: timeZoneResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TimeZoneApi {
  export type TimezoneRequest = {
    /**
     * A comma-separated latitude,longitude tuple, `location=39.6034810,-119.6822510`, representing
     * the location to look up.
     */
    location: string;
    /**
     * The desired time as seconds since midnight, January 1, 1970 UTC. The Time Zone API uses the
     * `timestamp` to determine whether or not Daylight Savings should be applied, based on the time
     * zone of the `location`.
     *
     * Note that the API does not take historical time zones into account. That is, if you specify a
     * past timestamp, the API does not take into account the possibility that the location was
     * previously in a different time zone.
     */
    timestamp: number;
    /**
     * The language in which to return results.
     *
     * * See the [list of supported
     *   languages](https://developers.google.com/maps/faq#languagesupport). Google often updates
     *   the supported languages, so this list may not be exhaustive.
     * * If `language` is not supplied, the API attempts to use the preferred language as specified
     *   in the `Accept-Language` header.
     * * The API does its best to provide a street address that is readable for both the user and
     *   locals. To achieve that goal, it returns street addresses in the local language,
     *   transliterated to a script readable by the user if necessary, observing the preferred
     *   language. All other addresses are returned in the preferred language. Address components
     *   are all returned in the same language, which is chosen from the first component.
     * * If a name is not available in the preferred language, the API uses the closest match.
     * * The preferred language has a small influence on the set of results that the API chooses to
     *   return, and the order in which they are returned. The geocoder interprets abbreviations
     *   differently depending on language, such as the abbreviations for street types, or synonyms
     *   that may be valid in one language but not in another. For example, _utca_ and _tér_ are
     *   synonyms for street in Hungarian.
     */
    language?: Language1;
  };
}

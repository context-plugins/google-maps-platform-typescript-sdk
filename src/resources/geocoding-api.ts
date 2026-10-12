import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * geocode
   *
   * @remarks
   * The Geocoding API is a service that provides geocoding and reverse geocoding of addresses.
   *
   * **Geocoding** is the process of converting addresses (like a street address) into geographic
   * coordinates (like latitude and longitude), which you can use to place markers on a map, or
   * position the map.
   *
   * **Reverse geocoding** is the process of converting geographic coordinates into a human-readable
   * address.
   *
   * You can also use the Geocoding API to find the address for a given place ID.
   *
   * To see countries currently supported by the Google Maps Platform Geocoding API, please consult
   * the [Google Maps coverage data](https://developers.google.com/maps/coverage). The accuracy of
   * geocoded locations may vary per country, so you should consider using the returned
   * `location_type` field to determine if a good enough match has been found for the purposes of
   * your application. Please note that the availability of geocoding data depends on our contracts
   * with data providers, so it is subject to change.
   *
   * @returns 200 OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GoogleMapsPlatformError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  geocode(
    request: GeocodingApi.GeocodeRequest,
    options?: RequestOptions,
  ): ApiPromise<GeocodingResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/maps/api/geocode/json"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: geocodingResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace GeocodingApi {
  export type GeocodeRequest = {
    /**
     * The street address or plus code that you want to geocode. Specify addresses in accordance
     * with the format used by the national postal service of the country concerned. Additional
     * address elements such as business names and unit, suite or floor numbers should be avoided.
     * Street address elements should be delimited by spaces (shown here as url-escaped to `%20`):
     *
     * ```
     * address=24%20Sussex%20Drive%20Ottawa%20ON
     * ```
     *
     * Format plus codes as shown here (plus signs are url-escaped to `%2B` and spaces are
     * url-escaped to `%20`):
     * - global code is a 4 character area code and 6 character or longer local code (`849VCWC8+R9`
     *   is `849VCWC8%2BR9`).
     * - compound code is a 6 character or longer local code with an explicit location (`CWC8+R9
     *   Mountain View, CA, USA` is `CWC8%2BR9%20Mountain%20View%20CA%20USA`).
     *
     * <div class="note">Note: At least one of `address` or `components` is required.</div>
     */
    address?: string;
    /**
     * The bounding box of the viewport within which to bias geocode results more prominently. This
     * parameter will only influence, not fully restrict, results from the geocoder.
     */
    bounds?: string[];
    /**
     * A components filter with elements separated by a pipe (|). The components filter is also
     * accepted as an optional parameter if an address is provided. Each element in the components
     * filter consists of a `component:value` pair, and fully restricts the results from the
     * geocoder.
     *
     * The components that can be filtered include:
     *
     * * `postal_code` matches `postal_code` and `postal_code_prefix`.
     * * `country` matches a country name or a two letter ISO 3166-1 country code. The API follows
     *   the ISO standard for defining countries, and the filtering works best when using the
     *   corresponding ISO code of the country. <aside class="note"><strong>Note</strong>: If you
     *   receive unexpected results with a country code, verify that you are using a code which
     *   includes the countries, dependent territories, and special areas of geographical interest
     *   you intend. You can find code information at Wikipedia: List of ISO 3166 country codes or
     *   the ISO Online Browsing Platform.</aside>
     *
     * The following components may be used to influence results, but will not be enforced:
     *
     * * `route` matches the long or short name of a route.
     * * `locality` matches against `locality` and `sublocality` types.
     * * `administrative_area` matches all the `administrative_area` levels.
     *
     * Notes about component filtering:
     *
     * * Do not repeat these component filters in requests, or the API will return
     *   `INVALID_REQUEST`:
     *   * `country`
     *   * `postal_code`
     *   * `route`
     * * If the request contains repeated component filters, the API evaluates those filters as an
     *   AND, not an OR.
     * * Results are consistent with Google Maps, which occasionally yields unexpected
     *   `ZERO_RESULTS` responses. Using Place Autocomplete may provide better results in some use
     *   cases. To learn more, see [this
     *   FAQ](https://developers..google.com/maps/documentation/geocoding/faq#trbl_component_filtering).
     * * For each address component, either specify it in the address parameter or in a components
     *   filter, but not both. Specifying the same values in both may result in `ZERO_RESULTS`.
     *
     * <div class="note">Note: At least one of `address` or `components` is required.</div>
     */
    components?: string[];
    /**
     * The street address that you want to geocode, in the format used by the national postal
     * service of the country concerned. Additional address elements such as business names and
     * unit, suite or floor numbers should be avoided.
     */
    latlng?: string;
    /**
     * A filter of one or more location types, separated by a pipe (`|`). If the parameter contains
     * multiple location types, the API returns all addresses that match any of the types. A note
     * about processing: The `location_type` parameter does not restrict the search to the specified
     * location type(s). Rather, the `location_type` acts as a post-search filter: the API fetches
     * all results for the specified latlng, then discards those results that do not match the
     * specified location type(s). The following values are supported:
     * * `APPROXIMATE` returns only the addresses that are characterized as approximate.
     * * `GEOMETRIC_CENTER` returns only geometric centers of a location such as a polyline (for
     *   example, a street) or polygon (region).
     * * `RANGE_INTERPOLATED` returns only the addresses that reflect an approximation (usually on a
     *   road) interpolated between two precise points (such as intersections). An interpolated
     *   range generally indicates that rooftop geocodes are unavailable for a street address.
     * * `ROOFTOP` returns only the addresses for which Google has location information accurate
     *   down to street address precision.
     */
    locationType?: LocationType[];
    /**
     * A textual identifier that uniquely identifies a place, returned from a [Place
     * Search](https://developers.google.com/maps/documentation/places/web-service/search). For more
     * information about place IDs, see the [place ID
     * overview](https://developers.google.com/maps/documentation/places/web-service/place-id).
     */
    placeId?: string;
    /**
     * A filter of one or more address types, separated by a pipe (|). If the parameter contains
     * multiple address types, the API returns all addresses that match any of the types. A note
     * about processing: The `result_type` parameter does not restrict the search to the specified
     * address type(s). Rather, the `result_type` acts as a post-search filter: the API fetches all
     * results for the specified `latlng`, then discards those results that do not match the
     * specified address type(s).The following values are supported:
     * * `administrative_area_level_1` indicates a first-order civil entity below the country level.
     *   Within the United States, these administrative levels are states. Not all nations exhibit
     *   these administrative levels. In most cases, administrative_area_level_1 * `short` names
     *   will closely match ISO 3166-2 subdivisions and other widely circulated lists; however this
     *   is not guaranteed as our geocoding results are based on a variety of signals and location
     *   data.
     * * `administrative_area_level_2` indicates a second-order civil entity below the country
     *   level. Within the United States, these administrative levels are counties. Not all nations
     *   exhibit these administrative levels.
     * * `administrative_area_level_3` indicates a third-order civil entity below the country level.
     *   This type indicates a minor civil division. Not all nations exhibit these administrative
     *   levels.
     * * `administrative_area_level_4` indicates a fourth-order civil entity below the country
     *   level. This type indicates a minor civil division. Not all nations exhibit these
     *   administrative levels.
     * * `administrative_area_level_5` indicates a fifth-order civil entity below the country level.
     *   This type indicates a minor civil division. Not all nations exhibit these administrative
     *   levels.
     * * `airport` indicates an airport.
     * * `colloquial_area` indicates a commonly-used alternative name for the entity.
     * * `country` indicates the national political entity, and is typically the highest order type
     *   returned by the Geocoder.
     * * `intersection` indicates a major intersection, usually of two major roads.
     * * `locality` indicates an incorporated city or town political entity.
     * * `natural_feature` indicates a prominent natural feature.
     * * `neighborhood` indicates a named neighborhood
     * * `park` indicates a named park.
     * * `plus_code` indicates an encoded location reference, derived from latitude and longitude.
     *   Plus codes can be used as a replacement for street addresses in places where they do not
     *   exist (where buildings are not numbered or streets are not named). See
     *   [https://plus.codes/](https://plus.codes/) for details.
     * * `point_of_interest` indicates a named point of interest. Typically, these "POI"s are
     *   prominent local entities that don't easily fit in another category, such as "Empire State
     *   Building" or "Eiffel Tower".
     * * `political` indicates a political entity. Usually, this type indicates a polygon of some
     *   civil administration.
     * * `postal_code` indicates a postal code as used to address postal mail within the country.
     * * `premise` indicates a named location, usually a building or collection of buildings with a
     *   common name
     * * `route` indicates a named route (such as "US 101").
     * * `street_address` indicates a precise street address.
     * * `sublocality` indicates a first-order civil entity below a locality. For some locations may
     *   receive one of the additional types: `sublocality_level_1` to `sublocality_level_5`. Each
     *   sublocality level is a civil entity. Larger numbers indicate a smaller geographic area.
     * * `subpremise` indicates a first-order entity below a named location, usually a singular
     *   building within a collection of buildings with a common name
     */
    resultType?: ResultType[];
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
    /**
     * The region code, specified as a [ccTLD ("top-level
     * domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains)
     * two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable
     * exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1
     * code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern
     * Ireland").
     */
    region?: Region1;
  };
}

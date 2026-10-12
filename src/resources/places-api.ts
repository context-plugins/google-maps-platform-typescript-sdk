import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { inputtype1Schema, type Inputtype1 } from "../models/inputtype1.js";
import { language1Schema, type Language1 } from "../models/language1.js";
import { maxprice1Schema, type Maxprice1 } from "../models/maxprice1.js";
import { minprice1Schema, type Minprice1 } from "../models/minprice1.js";
import {
  placesAutocompleteResponseSchema,
  type PlacesAutocompleteResponse,
} from "../models/places-autocomplete-response.js";
import {
  placesDetailsResponseSchema,
  type PlacesDetailsResponse,
} from "../models/places-details-response.js";
import {
  placesFindPlaceFromTextResponseSchema,
  type PlacesFindPlaceFromTextResponse,
} from "../models/places-find-place-from-text-response.js";
import {
  placesQueryAutocompleteResponseSchema,
  type PlacesQueryAutocompleteResponse,
} from "../models/places-query-autocomplete-response.js";
import {
  placesTextSearchResponseSchema,
  type PlacesTextSearchResponse,
} from "../models/places-text-search-response.js";
import { rankby1Schema, type Rankby1 } from "../models/rankby1.js";
import { region1Schema, type Region1 } from "../models/region1.js";
import type { Servers } from "../servers.js";

export class PlacesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * autocomplete
   *
   * @remarks
   * The Place Autocomplete service is a web service that returns place predictions in response to
   * an HTTP request. The request specifies a textual search string and optional geographic bounds.
   * The service can be used to provide autocomplete functionality for text-based geographic
   * searches, by returning places such as businesses, addresses and points of interest as a user
   * types. <div class="note">Note: You can use Place Autocomplete even without a map. If you do
   * show a map, it must be a Google map. When you display predictions from the Place Autocomplete
   * service without a map, you must include the ['Powered by
   * Google'](https://developers.google.com/maps/documentation/places/web-service/policies#logo_requirementshttps://developers.google.com/maps/documentation/places/web-service/policies#logo_requirements)
   * logo.</div>
   *
   * The Place Autocomplete service can match on full words and substrings, resolving place names,
   * addresses, and plus codes. Applications can therefore send queries as the user types, to
   * provide on-the-fly place predictions.
   *
   * The returned predictions are designed to be presented to the user to aid them in selecting the
   * desired place. You can send a [Place
   * Details](https://developers.google.com/maps/documentation/places/web-service/details#PlaceDetailsRequests)
   * request for more information about any of the places which are returned.
   *
   * @returns 200 OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GoogleMapsPlatformError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  autocomplete(
    request: PlacesApi.AutocompleteRequest,
    options?: RequestOptions,
  ): ApiPromise<PlacesAutocompleteResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/maps/api/place/autocomplete/json"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "input", value: request.input, schema: s.string() },
          { name: "radius", value: request.radius, schema: s.float64() },
          { name: "sessiontoken", value: request.sessiontoken, schema: s.optional(s.string()) },
          { name: "components", value: request.components, schema: s.optional(s.string()) },
          { name: "strictbounds", value: request.strictbounds, schema: s.optional(s.boolean()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
          { name: "origin", value: request.origin, schema: s.optional(s.string()) },
          { name: "location", value: request.location, schema: s.optional(s.string()) },
          { name: "locationbias", value: request.locationbias, schema: s.optional(s.string()) },
          { name: "locationrestriction", value: request.locationrestriction, schema: s.optional(s.string()) },
          { name: "types", value: request.types, schema: s.optional(s.string()) },
          { name: "language", value: request.language, schema: s.optional(s.lazy(() => language1Schema)) },
          { name: "region", value: request.region, schema: s.optional(s.lazy(() => region1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: placesAutocompleteResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * findPlaceFromText
   *
   * @remarks
   * A Find Place request takes a text input and returns a place. The input can be any kind of
   * Places text data, such as a name, address, or phone number. The request must be a string. A
   * Find Place request using non-string data such as a lat/lng coordinate or plus code generates an
   * error. <div class="note">Note: If you omit the fields parameter from a Find Place request, only
   * the place_id for the result will be returned.</div>
   *
   * @returns 200 OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GoogleMapsPlatformError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  findPlaceFromText(
    request: PlacesApi.FindPlaceFromTextRequest,
    options?: RequestOptions,
  ): ApiPromise<PlacesFindPlaceFromTextResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/maps/api/place/findplacefromtext/json"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "input", value: request.input, schema: s.string() },
          { name: "inputtype", value: request.inputtype, schema: inputtype1Schema },
          { name: "fields", value: request.fields, schema: s.optional(s.array(s.string())) },
          { name: "locationbias", value: request.locationbias, schema: s.optional(s.string()) },
          { name: "language", value: request.language, schema: s.optional(s.lazy(() => language1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: placesFindPlaceFromTextResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * nearbySearch
   *
   * @remarks
   * A Nearby Search lets you search for places within a specified area. You can refine your search
   * request by supplying keywords or specifying the type of place you are searching for.
   *
   * @returns 200 OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GoogleMapsPlatformError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  nearbySearch(
    request: PlacesApi.NearbySearchRequest,
    options?: RequestOptions,
  ): ApiPromise<PlacesTextSearchResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/maps/api/place/nearbysearch/json"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "location", value: request.location, schema: s.string() },
          { name: "radius", value: request.radius, schema: s.float64() },
          { name: "keyword", value: request.keyword, schema: s.optional(s.string()) },
          { name: "maxprice", value: request.maxprice, schema: s.optional(s.lazy(() => maxprice1Schema)) },
          { name: "minprice", value: request.minprice, schema: s.optional(s.lazy(() => minprice1Schema)) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "opennow", value: request.opennow, schema: s.optional(s.boolean()) },
          { name: "pagetoken", value: request.pagetoken, schema: s.optional(s.string()) },
          { name: "rankby", value: request.rankby, schema: s.optional(s.lazy(() => rankby1Schema)) },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
          { name: "language", value: request.language, schema: s.optional(s.lazy(() => language1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: placesTextSearchResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * placeDetails
   *
   * @remarks
   * The Places API is a service that returns information about places using HTTP requests. Places
   * are defined within this API as establishments, geographic locations, or prominent points of
   * interest.
   *
   * @returns 200 OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GoogleMapsPlatformError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  placeDetails(
    request: PlacesApi.PlaceDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlacesDetailsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/maps/api/place/details/json"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "place_id", value: request.placeId, schema: s.string() },
          { name: "fields", value: request.fields, schema: s.optional(s.array(s.string())) },
          { name: "sessiontoken", value: request.sessiontoken, schema: s.optional(s.string()) },
          { name: "language", value: request.language, schema: s.optional(s.lazy(() => language1Schema)) },
          { name: "region", value: request.region, schema: s.optional(s.lazy(() => region1Schema)) },
          { name: "reviews_sort", value: request.reviewsSort, schema: s.optional(s.string()) },
          {
            name: "reviews_no_translations",
            value: request.reviewsNoTranslations,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: placesDetailsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * placePhoto
   *
   * @remarks
   * The Place Photo service, part of the Places API, is a read- only API that allows you to add
   * high quality photographic content to your application. The Place Photo service gives you access
   * to the millions of photos stored in the Places database. When you get place information using a
   * Place Details request, photo references will be returned for relevant photographic content.
   * Find Place, Nearby Search, and Text Search requests also return a single photo reference per
   * place, when relevant. Using the Photo service you can then access the referenced photos and
   * resize the image to the optimal size for your application.
   *
   * Photos returned by the Photo service are sourced from a variety of locations, including
   * business owners and user contributed photos. In most cases, these photos can be used without
   * attribution, or will have the required attribution included as a part of the image. However, if
   * the returned photo element includes a value in the html_attributions field, you will have to
   * include the additional attribution in your application wherever you display the image.
   *
   * @returns 200 OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GoogleMapsPlatformError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  placePhoto(
    request: PlacesApi.PlacePhotoRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/maps/api/place/photo"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "photo_reference", value: request.photoReference, schema: s.string() },
          { name: "maxheight", value: request.maxheight, schema: s.optional(s.float64()) },
          { name: "maxwidth", value: request.maxwidth, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * queryAutocomplete
   *
   * @remarks
   * The Query Autocomplete service can be used to provide a query prediction for text-based
   * geographic searches, by returning suggested queries as you type.
   *
   * The Query Autocomplete service allows you to add on-the-fly geographic query predictions to
   * your application. Instead of searching for a specific location, a user can type in a
   * categorical search, such as "pizza near New York" and the service responds with a list of
   * suggested queries matching the string. As the Query Autocomplete service can match on both full
   * words and substrings, applications can send queries as the user types to provide on-the-fly
   * predictions.
   *
   * @returns 200 OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GoogleMapsPlatformError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  queryAutocomplete(
    request: PlacesApi.QueryAutocompleteRequest,
    options?: RequestOptions,
  ): ApiPromise<PlacesQueryAutocompleteResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/maps/api/place/queryautocomplete/json"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "input", value: request.input, schema: s.string() },
          { name: "radius", value: request.radius, schema: s.float64() },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
          { name: "location", value: request.location, schema: s.optional(s.string()) },
          { name: "language", value: request.language, schema: s.optional(s.lazy(() => language1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: placesQueryAutocompleteResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * textSearch
   *
   * @remarks
   * The Google Places API Text Search Service is a web service that returns information about a set
   * of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or
   * "123 Main Street". The service responds with a list of places matching the text string and any
   * location bias that has been set.
   *
   * The service is especially useful for making [ambiguous
   * address](https://developers.google.com/maps/documentation/geocoding/best-practices) queries in
   * an automated system, and non-address components of the string may match businesses as well as
   * addresses. Examples of ambiguous address queries are incomplete addresses, poorly formatted
   * addresses, or a request that includes non-address components such as business names.
   *
   * The search response will include a list of places. You can send a Place Details request for
   * more information about any of the places in the response.
   *
   * @returns 200 OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GoogleMapsPlatformError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  textSearch(
    request: PlacesApi.TextSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<PlacesTextSearchResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/maps/api/place/textsearch/json"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "radius", value: request.radius, schema: s.float64() },
          { name: "location", value: request.location, schema: s.optional(s.string()) },
          { name: "maxprice", value: request.maxprice, schema: s.optional(s.lazy(() => maxprice1Schema)) },
          { name: "minprice", value: request.minprice, schema: s.optional(s.lazy(() => minprice1Schema)) },
          { name: "opennow", value: request.opennow, schema: s.optional(s.boolean()) },
          { name: "pagetoken", value: request.pagetoken, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
          { name: "language", value: request.language, schema: s.optional(s.lazy(() => language1Schema)) },
          { name: "region", value: request.region, schema: s.optional(s.lazy(() => region1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: placesTextSearchResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace PlacesApi {
  export type AutocompleteRequest = {
    /**
     * The text string on which to search. The Place Autocomplete service will return candidate
     * matches based on this string and order results based on their perceived relevance.
     */
    input: string;
    /**
     * Defines the distance (in meters) within which to return place results. You may bias results
     * to a specified circle by passing a `location` and a `radius` parameter. Doing so instructs
     * the Places service to _prefer_ showing results within that circle; results outside of the
     * defined area may still be displayed.
     *
     * The radius will automatically be clamped to a maximum value depending on the type of search
     * and other parameters.
     *
     * * Autocomplete: 50,000 meters
     * * Nearby Search:
     *   * with `keyword` or `name`: 50,000 meters
     *   * without `keyword` or `name`
     *     * Up to 50,000 meters, adjusted dynamically based on area density, independent of
     *       `rankby` parameter.
     *     * When using `rankby=distance`, the radius parameter will not be accepted, and will
     *       result in an `INVALID_REQUEST`.
     * * Query Autocomplete: 50,000 meters
     * * Text Search: 50,000 meters
     */
    radius: number;
    /**
     * A random string which identifies an autocomplete
     * [session](https://developers.google.com/maps/documentation/places/web-service/details#session_tokens)
     * for billing purposes.
     *
     * The session begins when the user starts typing a query, and concludes when they select a
     * place and a call to Place Details is made. Each session can have multiple queries, followed
     * by one place selection. The API key(s) used for each request within a session must belong to
     * the same Google Cloud Console project. Once a session has concluded, the token is no longer
     * valid; your app must generate a fresh token for each session. If the `sessiontoken` parameter
     * is omitted, or if you reuse a session token, the session is charged as if no session token
     * was provided (each request is billed separately).
     *
     * We recommend the following guidelines:
     *
     * - Use session tokens for all autocomplete sessions.
     * - Generate a fresh token for each session. Using a version 4 UUID is recommended.
     * - Ensure that the API key(s) used for all Place Autocomplete and Place Details requests
     *   within a session belong to the same Cloud Console project.
     * - Be sure to pass a unique session token for each new session. Using the same token for more
     *   than one session will result in each request being billed individually.
     */
    sessiontoken?: string;
    /**
     * A grouping of places to which you would like to restrict your results. Currently, you can use
     * components to filter by up to 5 countries. Countries must be passed as a two character, ISO
     * 3166-1 Alpha-2 compatible country code. For example: `components=country:fr` would restrict
     * your results to places within France. Multiple countries must be passed as multiple
     * `country:XX` filters, with the pipe character `|` as a separator. For example:
     * `components=country:us|country:pr|country:vi|country:gu|country:mp` would restrict your
     * results to places within the United States and its unincorporated organized territories. <div
     * class="note"><strong>Note:</strong> If you receive unexpected results with a country code,
     * verify that you are using a code which includes the countries, dependent territories, and
     * special areas of geographical interest you intend. You can find code information at <a
     * href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes" target="blank"
     * class="external">Wikipedia: List of ISO 3166 country codes</a> or the <a
     * href="https://www.iso.org/obp/ui/#search" target="blank" class="external">ISO Online Browsing
     * Platform</a>.</div>
     */
    components?: string;
    /**
     * Returns only those places that are strictly within the region defined by `location` and
     * `radius`. This is a restriction, rather than a bias, meaning that results outside this region
     * will not be returned even if they match the user input.
     */
    strictbounds?: boolean;
    /**
     * The position, in the input term, of the last character that the service uses to match
     * predictions. For example, if the input is `Google` and the offset is 3, the service will
     * match on `Goo`. The string determined by the offset is matched against the first word in the
     * input term only. For example, if the input term is `Google abc` and the offset is 3, the
     * service will attempt to match against `Goo abc`. If no offset is supplied, the service will
     * use the whole term. The offset should generally be set to the position of the text caret.
     */
    offset?: number;
    /**
     * The origin point from which to calculate straight-line distance to the destination (returned
     * as `distance_meters`). If this value is omitted, straight-line distance will not be returned.
     * Must be specified as `latitude,longitude`.
     */
    origin?: string;
    /**
     * The point around which to retrieve place information. This must be specified as
     * `latitude,longitude`. The `radius` parameter must also be provided when specifying a
     * location. If `radius` is not provided, the `location` parameter is ignored.
     *
     * <div class="note">When using the Text Search API, the `location` parameter may be overriden
     * if the `query` contains an explicit location such as `Market in Barcelona`.</div>
     */
    location?: string;
    /**
     * Prefer results in a specified area, by specifying either a radius plus lat/lng, or two
     * lat/lng pairs representing the points of a rectangle. If this parameter is not specified, the
     * API uses IP address biasing by default.
     * - IP bias: Instructs the API to use IP address biasing. Pass the string `ipbias` (this option
     *   has no additional parameters).
     * - Circular: A string specifying radius in meters, plus lat/lng in decimal degrees. Use the
     *   following format: `circle:radiuslat,lng`.
     * - Rectangular: A string specifying two lat/lng pairs in decimal degrees, representing the
     *   south/west and north/east points of a rectangle. Use the following
     *   format:`rectangle:south,west|north,east`. Note that east/west values are wrapped to the
     *   range -180, 180, and north/south values are clamped to the range -90, 90.
     */
    locationbias?: string;
    /**
     * Restrict results to a specified area, by specifying either a radius plus lat/lng, or two
     * lat/lng pairs representing the points of a rectangle.
     * - Circular: A string specifying radius in meters, plus lat/lng in decimal degrees. Use the
     *   following format: `circle:radiuslat,lng`.
     * - Rectangular: A string specifying two lat/lng pairs in decimal degrees, representing the
     *   south/west and north/east points of a rectangle. Use the following
     *   format:`rectangle:south,west|north,east`. Note that east/west values are wrapped to the
     *   range -180, 180, and north/south values are clamped to the range -90, 90.
     */
    locationrestriction?: string;
    /**
     * You can restrict results from a Place Autocomplete request to be of a certain type by passing
     * the `types` parameter. This parameter specifies a type or a type collection, as listed in
     * [Place
     * Types](https://developers.google.com/maps/documentation/places/web-service/supported_types).
     * If nothing is specified, all types are returned.
     *
     * For the value of the `types` parameter you can specify either:
     * * Up to five values from [Table
     *   1](https://developers.google.com/maps/documentation/places/web-service/supported_types#table1)
     *   or [Table
     *   2](https://developers.google.com/maps/documentation/places/web-service/supported_types#table2).
     *   For multiple values, separate each value with a `|` (vertical bar). For example:
     *
     * `types=book_store|cafe`
     *
     * * Any supported filter in [Table
     *   3](https://developers.google.com/maps/documentation/places/web-service/supported_types#table3).
     *   You can safely mix the `geocode` and `establishment` types. You cannot mix type collections
     *   (`address`, `(cities)` or `(regions)`) with any other type, or an error occurs.
     *
     * The request will be rejected with an `INVALID_REQUEST` error if:
     *
     * * More than five types are specified.
     * * Any unrecognized types are present.
     * * Any types from in [Table
     *   1](https://developers.google.com/maps/documentation/places/web-service/supported_types#table1)
     *   or [Table
     *   2](https://developers.google.com/maps/documentation/places/web-service/supported_types#table2)
     *   are mixed with any of the filters in [Table
     *   3](https://developers.google.com/maps/documentation/places/web-service/supported_types#table3).
     */
    types?: string;
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

  export type FindPlaceFromTextRequest = {
    /**
     * The text string on which to search, for example: "restaurant" or "123 Main Street". This must
     * be a place name, address, or category of establishments. Any other types of input can
     * generate errors and are not guaranteed to return valid results. The Places API will return
     * candidate matches based on this string and order the results based on their perceived
     * relevance.
     */
    input: string;
    /**
     * The type of input. This can be one of either `textquery` or `phonenumber`. Phone numbers must
     * be in international format (prefixed by a plus sign ("+"), followed by the country code, then
     * the phone number itself). See [E.164 ITU recommendation](https://en.wikipedia.org/wiki/E.164)
     * for more information.
     */
    inputtype: Inputtype1;
    /**
     * <div class="caution"> Caution: Place Search requests and Place Details requests do not return
     * the same fields. Place Search requests return a subset of the fields that are returned by
     * Place Details requests. If the field you want is not returned by Place Search, you can use
     * Place Search to get a <code>place_id</code>, then use that Place ID to make a Place Details
     * request. For more information on the fields that are unavailable in a Place Search request,
     * see <a
     * href="https://developers.google.com/maps/documentation/places/web-service/place-data-fields#places-api-fields-support">Places
     * API fields support</a>.</div>
     *
     * Use the fields parameter to specify a comma-separated list of place data types to return. For
     * example: `fields=formatted_address,name,geometry`. Use a forward slash when specifying
     * compound values. For example: `opening_hours/open_now`.
     *
     * Fields are divided into three billing categories: Basic, Contact, and Atmosphere. Basic
     * fields are billed at base rate, and incur no additional charges. Contact and Atmosphere
     * fields are billed at a higher rate. See the [pricing
     * sheet](https://developers.google.com/maps/documentation/places/web-service/usage-and-billing/)
     * for more information. Attributions, `html_attributions`, are always returned with every call,
     * regardless of whether the field has been requested.
     *
     * **Basic**
     *
     * The Basic category includes the following fields: `address_components`, `adr_address`,
     * `business_status`, `formatted_address`, `geometry`, `icon`, `icon_mask_base_uri`,
     * `icon_background_color`, `name`, `permanently_closed`
     * ([deprecated](https://developers.google.com/maps/deprecations)), `photo`, `place_id`,
     * `plus_code`, `type`, `url`, `utc_offset`, `vicinity`, `wheelchair_accessible_entrance`.
     *
     * **Contact**
     *
     * The Contact category includes the following fields: `current_opening_hours`,
     * `formatted_phone_number`, `international_phone_number`, `opening_hours`,
     * `secondary_opening_hours`, `website`
     *
     * **Atmosphere**
     *
     * The Atmosphere category includes the following fields: `curbside_pickup`, `delivery`,
     * `dine_in`, `editorial_summary`, `price_level`, `rating`, `reservable`, `reviews`,
     * `serves_beer`, `serves_breakfast`, `serves_brunch`, `serves_dinner`, `serves_lunch`,
     * `serves_vegetarian_food`, `serves_wine`, `takeout`, `user_ratings_total`.
     */
    fields?: string[];
    /**
     * Prefer results in a specified area, by specifying either a radius plus lat/lng, or two
     * lat/lng pairs representing the points of a rectangle. If this parameter is not specified, the
     * API uses IP address biasing by default.
     * - IP bias: Instructs the API to use IP address biasing. Pass the string `ipbias` (this option
     *   has no additional parameters).
     * - Circular: A string specifying radius in meters, plus lat/lng in decimal degrees. Use the
     *   following format: `circle:radiuslat,lng`.
     * - Rectangular: A string specifying two lat/lng pairs in decimal degrees, representing the
     *   south/west and north/east points of a rectangle. Use the following
     *   format:`rectangle:south,west|north,east`. Note that east/west values are wrapped to the
     *   range -180, 180, and north/south values are clamped to the range -90, 90.
     */
    locationbias?: string;
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

  export type NearbySearchRequest = {
    /**
     * The point around which to retrieve place information. This must be specified as
     * `latitude,longitude`.
     */
    location: string;
    /**
     * Defines the distance (in meters) within which to return place results. You may bias results
     * to a specified circle by passing a `location` and a `radius` parameter. Doing so instructs
     * the Places service to _prefer_ showing results within that circle; results outside of the
     * defined area may still be displayed.
     *
     * The radius will automatically be clamped to a maximum value depending on the type of search
     * and other parameters.
     *
     * * Autocomplete: 50,000 meters
     * * Nearby Search:
     *   * with `keyword` or `name`: 50,000 meters
     *   * without `keyword` or `name`
     *     * Up to 50,000 meters, adjusted dynamically based on area density, independent of
     *       `rankby` parameter.
     *     * When using `rankby=distance`, the radius parameter will not be accepted, and will
     *       result in an `INVALID_REQUEST`.
     * * Query Autocomplete: 50,000 meters
     * * Text Search: 50,000 meters
     */
    radius: number;
    /**
     * The text string on which to search, for example: "restaurant" or "123 Main Street". This must
     * be a place name, address, or category of establishments. Any other types of input can
     * generate errors and are not guaranteed to return valid results. The Google Places service
     * will return candidate matches based on this string and order the results based on their
     * perceived relevance.
     *
     * Explicitly including location information using this parameter may conflict with the
     * location, radius, and rankby parameters, causing unexpected results.
     *
     * If this parameter is omitted, places with a business_status of CLOSED_TEMPORARILY or
     * CLOSED_PERMANENTLY will not be returned.
     */
    keyword?: string;
    /**
     * Restricts results to only those places within the specified range. Valid values range between
     * 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a
     * specific value will vary from region to region.
     */
    maxprice?: Maxprice1;
    /**
     * Restricts results to only those places within the specified range. Valid values range between
     * 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a
     * specific value will vary from region to region.
     */
    minprice?: Minprice1;
    /**
     * Equivalent to `keyword`. Values in this field are combined with values in the `keyword` field
     * and passed as part of the same search string.
     *
     * @deprecated
     */
    name?: string;
    /**
     * Returns only those places that are open for business at the time the query is sent. Places
     * that do not specify opening hours in the Google Places database will not be returned if you
     * include this parameter in your query.
     */
    opennow?: boolean;
    /**
     * Returns up to 20 results from a previously run search. Setting a `pagetoken` parameter will
     * execute a search with the same parameters used previously — all parameters other than
     * pagetoken will be ignored.
     */
    pagetoken?: string;
    /**
     * Specifies the order in which results are listed. Possible values are:
     * - `prominence` (default). This option sorts results based on their importance. Ranking will
     *   favor prominent places within the set radius over nearby places that match but that are
     *   less prominent. Prominence can be affected by a place's ranking in Google's index, global
     *   popularity, and other factors. When prominence is specified, the `radius` parameter is
     *   required.
     * - `distance`. This option biases search results in ascending order by their distance from the
     *   specified location. When `distance` is specified, one or more of `keyword`, `name`, or
     *   `type` is required and `radius` is disallowed.
     */
    rankby?: Rankby1;
    /**
     * Restricts the results to places matching the specified type. Only one type may be specified.
     * If more than one type is provided, all types following the first entry are ignored.
     *
     * * `type=hospital|pharmacy|doctor` becomes `type=hospital`
     * * `type=hospital,pharmacy,doctor` is ignored entirely
     *
     * See the list of [supported
     * types](https://developers.google.com/maps/documentation/places/web-service/supported_types).
     * <div class="note">Note: Adding both `keyword` and `type` with the same value
     * (`keyword=cafe&type=cafe` or `keyword=parking&type=parking`) can yield `ZERO_RESULTS`.</div>
     */
    type?: string;
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

  export type PlaceDetailsRequest = {
    /**
     * A textual identifier that uniquely identifies a place, returned from a [Place
     * Search](https://developers.google.com/maps/documentation/places/web-service/search). For more
     * information about place IDs, see the [place ID
     * overview](https://developers.google.com/maps/documentation/places/web-service/place-id).
     */
    placeId: string;
    /**
     * <div class="caution"> Caution: Place Search requests and Place Details requests do not return
     * the same fields. Place Search requests return a subset of the fields that are returned by
     * Place Details requests. If the field you want is not returned by Place Search, you can use
     * Place Search to get a <code>place_id</code>, then use that Place ID to make a Place Details
     * request. For more information on the fields that are unavailable in a Place Search request,
     * see <a
     * href="https://developers.google.com/maps/documentation/places/web-service/place-data-fields#places-api-fields-support">Places
     * API fields support</a>.</div>
     *
     * Use the fields parameter to specify a comma-separated list of place data types to return. For
     * example: `fields=formatted_address,name,geometry`. Use a forward slash when specifying
     * compound values. For example: `opening_hours/open_now`.
     *
     * Fields are divided into three billing categories: Basic, Contact, and Atmosphere. Basic
     * fields are billed at base rate, and incur no additional charges. Contact and Atmosphere
     * fields are billed at a higher rate. See the [pricing
     * sheet](https://developers.google.com/maps/documentation/places/web-service/usage-and-billing/)
     * for more information. Attributions, `html_attributions`, are always returned with every call,
     * regardless of whether the field has been requested.
     *
     * **Basic**
     *
     * The Basic category includes the following fields: `address_components`, `adr_address`,
     * `business_status`, `formatted_address`, `geometry`, `icon`, `icon_mask_base_uri`,
     * `icon_background_color`, `name`, `permanently_closed`
     * ([deprecated](https://developers.google.com/maps/deprecations)), `photo`, `place_id`,
     * `plus_code`, `type`, `url`, `utc_offset`, `vicinity`, `wheelchair_accessible_entrance`.
     *
     * **Contact**
     *
     * The Contact category includes the following fields: `current_opening_hours`,
     * `formatted_phone_number`, `international_phone_number`, `opening_hours`,
     * `secondary_opening_hours`, `website`
     *
     * **Atmosphere**
     *
     * The Atmosphere category includes the following fields: `curbside_pickup`, `delivery`,
     * `dine_in`, `editorial_summary`, `price_level`, `rating`, `reservable`, `reviews`,
     * `serves_beer`, `serves_breakfast`, `serves_brunch`, `serves_dinner`, `serves_lunch`,
     * `serves_vegetarian_food`, `serves_wine`, `takeout`, `user_ratings_total`.
     */
    fields?: string[];
    /**
     * A random string which identifies an autocomplete
     * [session](https://developers.google.com/maps/documentation/places/web-service/details#session_tokens)
     * for billing purposes.
     *
     * The session begins when the user starts typing a query, and concludes when they select a
     * place and a call to Place Details is made. Each session can have multiple queries, followed
     * by one place selection. The API key(s) used for each request within a session must belong to
     * the same Google Cloud Console project. Once a session has concluded, the token is no longer
     * valid; your app must generate a fresh token for each session. If the `sessiontoken` parameter
     * is omitted, or if you reuse a session token, the session is charged as if no session token
     * was provided (each request is billed separately).
     *
     * We recommend the following guidelines:
     *
     * - Use session tokens for all autocomplete sessions.
     * - Generate a fresh token for each session. Using a version 4 UUID is recommended.
     * - Ensure that the API key(s) used for all Place Autocomplete and Place Details requests
     *   within a session belong to the same Cloud Console project.
     * - Be sure to pass a unique session token for each new session. Using the same token for more
     *   than one session will result in each request being billed individually.
     */
    sessiontoken?: string;
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
    /**
     * The sorting method to use when returning reviews. Can be set to `most_relevant` (default) or
     * `newest`.
     *
     * - For `most_relevant` (default), reviews are sorted by relevance; the service will bias the
     *   results to return reviews originally written in the preferred language.
     * - For `newest`, reviews are sorted in chronological order; the preferred language does not
     *   affect the sort order.
     *
     * Google recommends that you display how the reviews are being sorted to the end user.
     */
    reviewsSort?: string;
    /**
     * Specify `reviews_no_translations=true` to disable translation of reviews; specify
     * `reviews_no_translations=false` to enable translation of reviews. Reviews are returned in
     * their original language.
     *
     * If omitted, or passed with no value, translation of reviews is enabled. If the `language`
     * parameter was specified in the request, use the specified language as the preferred language
     * for translation. If `language` is omitted, the API attempts to use the `Accept-Language`
     * header as the preferred language.
     */
    reviewsNoTranslations?: boolean;
  };

  export type PlacePhotoRequest = {
    /**
     * A string identifier that uniquely identifies a photo. Photo references are returned from
     * either a Place Search or Place Details request.
     */
    photoReference: string;
    /**
     * Specifies the maximum desired height, in pixels, of the image. If the image is smaller than
     * the values specified, the original image will be returned. If the image is larger in either
     * dimension, it will be scaled to match the smaller of the two dimensions, restricted to its
     * original aspect ratio. Both the `maxheight` and `maxwidth` properties accept an integer
     * between `1` and `1600`.
     */
    maxheight?: number;
    /**
     * Specifies the maximum desired width, in pixels, of the image. If the image is smaller than
     * the values specified, the original image will be returned. If the image is larger in either
     * dimension, it will be scaled to match the smaller of the two dimensions, restricted to its
     * original aspect ratio. Both the `maxheight` and `maxwidth` properties accept an integer
     * between `1` and `1600`.
     */
    maxwidth?: number;
  };

  export type QueryAutocompleteRequest = {
    /**
     * The text string on which to search. The Place Autocomplete service will return candidate
     * matches based on this string and order results based on their perceived relevance.
     */
    input: string;
    /**
     * Defines the distance (in meters) within which to return place results. You may bias results
     * to a specified circle by passing a `location` and a `radius` parameter. Doing so instructs
     * the Places service to _prefer_ showing results within that circle; results outside of the
     * defined area may still be displayed.
     *
     * The radius will automatically be clamped to a maximum value depending on the type of search
     * and other parameters.
     *
     * * Autocomplete: 50,000 meters
     * * Nearby Search:
     *   * with `keyword` or `name`: 50,000 meters
     *   * without `keyword` or `name`
     *     * Up to 50,000 meters, adjusted dynamically based on area density, independent of
     *       `rankby` parameter.
     *     * When using `rankby=distance`, the radius parameter will not be accepted, and will
     *       result in an `INVALID_REQUEST`.
     * * Query Autocomplete: 50,000 meters
     * * Text Search: 50,000 meters
     */
    radius: number;
    /**
     * The position, in the input term, of the last character that the service uses to match
     * predictions. For example, if the input is `Google` and the offset is 3, the service will
     * match on `Goo`. The string determined by the offset is matched against the first word in the
     * input term only. For example, if the input term is `Google abc` and the offset is 3, the
     * service will attempt to match against `Goo abc`. If no offset is supplied, the service will
     * use the whole term. The offset should generally be set to the position of the text caret.
     */
    offset?: number;
    /**
     * The point around which to retrieve place information. This must be specified as
     * `latitude,longitude`.
     *
     * <div class="note">The <code>location</code> parameter may be overriden if the
     * <code>query</code> contains an explicit location such as <code>Market in Barcelona</code>.
     * Using quotes around the query may also influence the weight given to the
     * <code>location</code> and <code>radius</code>.</div>
     */
    location?: string;
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

  export type TextSearchRequest = {
    /**
     * The text string on which to search, for example: "restaurant" or "123 Main Street". This must
     * a place name, address, or category of establishments. Any other types of input can generate
     * errors and are not guaranteed to return valid results. The Google Places service will return
     * candidate matches based on this string and order the results based on their perceived
     * relevance.
     */
    query: string;
    /**
     * Defines the distance (in meters) within which to return place results. You may bias results
     * to a specified circle by passing a `location` and a `radius` parameter. Doing so instructs
     * the Places service to _prefer_ showing results within that circle; results outside of the
     * defined area may still be displayed.
     *
     * The radius will automatically be clamped to a maximum value depending on the type of search
     * and other parameters.
     *
     * * Autocomplete: 50,000 meters
     * * Nearby Search:
     *   * with `keyword` or `name`: 50,000 meters
     *   * without `keyword` or `name`
     *     * Up to 50,000 meters, adjusted dynamically based on area density, independent of
     *       `rankby` parameter.
     *     * When using `rankby=distance`, the radius parameter will not be accepted, and will
     *       result in an `INVALID_REQUEST`.
     * * Query Autocomplete: 50,000 meters
     * * Text Search: 50,000 meters
     */
    radius: number;
    /**
     * The point around which to retrieve place information. This must be specified as
     * `latitude,longitude`.
     *
     * <div class="note">The <code>location</code> parameter may be overriden if the
     * <code>query</code> contains an explicit location such as <code>Market in Barcelona</code>.
     * Using quotes around the query may also influence the weight given to the
     * <code>location</code> and <code>radius</code>.</div>
     */
    location?: string;
    /**
     * Restricts results to only those places within the specified range. Valid values range between
     * 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a
     * specific value will vary from region to region.
     */
    maxprice?: Maxprice1;
    /**
     * Restricts results to only those places within the specified range. Valid values range between
     * 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a
     * specific value will vary from region to region.
     */
    minprice?: Minprice1;
    /**
     * Returns only those places that are open for business at the time the query is sent. Places
     * that do not specify opening hours in the Google Places database will not be returned if you
     * include this parameter in your query.
     */
    opennow?: boolean;
    /**
     * Returns up to 20 results from a previously run search. Setting a `pagetoken` parameter will
     * execute a search with the same parameters used previously — all parameters other than
     * pagetoken will be ignored.
     */
    pagetoken?: string;
    /**
     * Restricts the results to places matching the specified type. Only one type may be specified.
     * If more than one type is provided, all types following the first entry are ignored.
     *
     * * `type=hospital|pharmacy|doctor` becomes `type=hospital`
     * * `type=hospital,pharmacy,doctor` is ignored entirely
     *
     * See the list of [supported
     * types](https://developers.google.com/maps/documentation/places/web-service/supported_types).
     * <div class="note">Note: Adding both `keyword` and `type` with the same value
     * (`keyword=cafe&type=cafe` or `keyword=parking&type=parking`) can yield `ZERO_RESULTS`.</div>
     */
    type?: string;
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

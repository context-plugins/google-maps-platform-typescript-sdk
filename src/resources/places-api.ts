import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  autocomplete(
    request: PlacesApi.AutocompleteRequest,
    options?: RequestOptions,
  ): ApiPromise<PlacesAutocompleteResponse, ResponseError> {
    return this.#rawClient.execute<PlacesAutocompleteResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/maps/api/place/autocomplete/json"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "input", value: request.input, schema: s.string() },
          { name: "radius", value: request.radius, schema: s.number() },
          { name: "sessiontoken", value: request.sessiontoken, schema: s.optional(s.string()) },
          { name: "components", value: request.components, schema: s.optional(s.string()) },
          { name: "strictbounds", value: request.strictbounds, schema: s.optional(s.boolean()) },
          { name: "offset", value: request.offset, schema: s.optional(s.number()) },
          { name: "origin", value: request.origin, schema: s.optional(s.string()) },
          { name: "location", value: request.location, schema: s.optional(s.string()) },
          { name: "locationbias", value: request.locationbias, schema: s.optional(s.string()) },
          { name: "locationrestriction", value: request.locationrestriction, schema: s.optional(s.string()) },
          { name: "types", value: request.types, schema: s.optional(s.string()) },
          { name: "language", value: request.language, schema: s.optional(s.lazy(() => language1Schema)) },
          { name: "region", value: request.region, schema: s.optional(s.lazy(() => region1Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: placesAutocompleteResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  findPlaceFromText(
    request: PlacesApi.FindPlaceFromTextRequest,
    options?: RequestOptions,
  ): ApiPromise<PlacesFindPlaceFromTextResponse, ResponseError> {
    return this.#rawClient.execute<PlacesFindPlaceFromTextResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/maps/api/place/findplacefromtext/json"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "input", value: request.input, schema: s.string() },
          { name: "inputtype", value: request.inputtype, schema: inputtype1Schema },
          { name: "fields", value: request.fields, schema: s.optional(s.array(s.string())) },
          { name: "locationbias", value: request.locationbias, schema: s.optional(s.string()) },
          { name: "language", value: request.language, schema: s.optional(s.lazy(() => language1Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: placesFindPlaceFromTextResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  nearbySearch(
    request: PlacesApi.NearbySearchRequest,
    options?: RequestOptions,
  ): ApiPromise<PlacesTextSearchResponse, ResponseError> {
    return this.#rawClient.execute<PlacesTextSearchResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/maps/api/place/nearbysearch/json"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "location", value: request.location, schema: s.string() },
          { name: "radius", value: request.radius, schema: s.number() },
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: placesTextSearchResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  placeDetails(
    request: PlacesApi.PlaceDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlacesDetailsResponse, ResponseError> {
    return this.#rawClient.execute<PlacesDetailsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/maps/api/place/details/json"),
        auth: this.#auth.apiKeyAuth,
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: placesDetailsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  placePhoto(
    request: PlacesApi.PlacePhotoRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/maps/api/place/photo"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "photo_reference", value: request.photoReference, schema: s.string() },
          { name: "maxheight", value: request.maxheight, schema: s.optional(s.number()) },
          { name: "maxwidth", value: request.maxwidth, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  queryAutocomplete(
    request: PlacesApi.QueryAutocompleteRequest,
    options?: RequestOptions,
  ): ApiPromise<PlacesQueryAutocompleteResponse, ResponseError> {
    return this.#rawClient.execute<PlacesQueryAutocompleteResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/maps/api/place/queryautocomplete/json"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "input", value: request.input, schema: s.string() },
          { name: "radius", value: request.radius, schema: s.number() },
          { name: "offset", value: request.offset, schema: s.optional(s.number()) },
          { name: "location", value: request.location, schema: s.optional(s.string()) },
          { name: "language", value: request.language, schema: s.optional(s.lazy(() => language1Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: placesQueryAutocompleteResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  textSearch(
    request: PlacesApi.TextSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<PlacesTextSearchResponse, ResponseError> {
    return this.#rawClient.execute<PlacesTextSearchResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/maps/api/place/textsearch/json"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "radius", value: request.radius, schema: s.number() },
          { name: "location", value: request.location, schema: s.optional(s.string()) },
          { name: "maxprice", value: request.maxprice, schema: s.optional(s.lazy(() => maxprice1Schema)) },
          { name: "minprice", value: request.minprice, schema: s.optional(s.lazy(() => minprice1Schema)) },
          { name: "opennow", value: request.opennow, schema: s.optional(s.boolean()) },
          { name: "pagetoken", value: request.pagetoken, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
          { name: "language", value: request.language, schema: s.optional(s.lazy(() => language1Schema)) },
          { name: "region", value: request.region, schema: s.optional(s.lazy(() => region1Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: placesTextSearchResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace PlacesApi {
  export type AutocompleteRequest = {
    input: string;
    radius: number;
    sessiontoken?: string;
    components?: string;
    strictbounds?: boolean;
    offset?: number;
    origin?: string;
    location?: string;
    locationbias?: string;
    locationrestriction?: string;
    types?: string;
    language?: Language1;
    region?: Region1;
  };

  export type FindPlaceFromTextRequest = {
    input: string;
    inputtype: Inputtype1;
    fields?: string[];
    locationbias?: string;
    language?: Language1;
  };

  export type NearbySearchRequest = {
    location: string;
    radius: number;
    keyword?: string;
    maxprice?: Maxprice1;
    minprice?: Minprice1;
    name?: string;
    opennow?: boolean;
    pagetoken?: string;
    rankby?: Rankby1;
    type?: string;
    language?: Language1;
  };

  export type PlaceDetailsRequest = {
    placeId: string;
    fields?: string[];
    sessiontoken?: string;
    language?: Language1;
    region?: Region1;
    reviewsSort?: string;
    reviewsNoTranslations?: boolean;
  };

  export type PlacePhotoRequest = {
    photoReference: string;
    maxheight?: number;
    maxwidth?: number;
  };

  export type QueryAutocompleteRequest = {
    input: string;
    radius: number;
    offset?: number;
    location?: string;
    language?: Language1;
  };

  export type TextSearchRequest = {
    query: string;
    radius: number;
    location?: string;
    maxprice?: Maxprice1;
    minprice?: Minprice1;
    opennow?: boolean;
    pagetoken?: string;
    type?: string;
    language?: Language1;
    region?: Region1;
  };
}

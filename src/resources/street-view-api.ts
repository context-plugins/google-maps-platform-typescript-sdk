import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { source1Schema, type Source1 } from "../models/source1.js";
import { streetViewResponseSchema, type StreetViewResponse } from "../models/street-view-response.js";
import type { Servers } from "../servers.js";

export class StreetViewApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  streetView(
    request: StreetViewApi.StreetViewRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/maps/api/streetview"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "size", value: request.size, schema: s.string() },
          { name: "fov", value: request.fov, schema: s.optional(s.number()) },
          { name: "heading", value: request.heading, schema: s.optional(s.number()) },
          { name: "location", value: request.location, schema: s.optional(s.string()) },
          { name: "pano", value: request.pano, schema: s.optional(s.string()) },
          { name: "pitch", value: request.pitch, schema: s.optional(s.number()) },
          { name: "radius", value: request.radius, schema: s.optional(s.number()) },
          { name: "return_error_code", value: request.returnErrorCode, schema: s.optional(s.boolean()) },
          { name: "signature", value: request.signature, schema: s.optional(s.string()) },
          { name: "source", value: request.source, schema: s.optional(s.lazy(() => source1Schema)) },
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

  streetViewMetadata(
    request: StreetViewApi.StreetViewMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<StreetViewResponse, ResponseError> {
    return this.#rawClient.execute<StreetViewResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/maps/api/streetview/metadata"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "heading", value: request.heading, schema: s.optional(s.number()) },
          { name: "location", value: request.location, schema: s.optional(s.string()) },
          { name: "pano", value: request.pano, schema: s.optional(s.string()) },
          { name: "pitch", value: request.pitch, schema: s.optional(s.number()) },
          { name: "radius", value: request.radius, schema: s.optional(s.number()) },
          { name: "return_error_code", value: request.returnErrorCode, schema: s.optional(s.boolean()) },
          { name: "signature", value: request.signature, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.optional(s.string()) },
          { name: "source", value: request.source, schema: s.optional(s.lazy(() => source1Schema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: streetViewResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StreetViewApi {
  export type StreetViewRequest = {
    size: string;
    fov?: number;
    heading?: number;
    location?: string;
    pano?: string;
    pitch?: number;
    radius?: number;
    returnErrorCode?: boolean;
    signature?: string;
    source?: Source1;
  };

  export type StreetViewMetadataRequest = {
    heading?: number;
    location?: string;
    pano?: string;
    pitch?: number;
    radius?: number;
    returnErrorCode?: boolean;
    signature?: string;
    size?: string;
    source?: Source1;
  };
}

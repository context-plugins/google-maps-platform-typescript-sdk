import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * streetView
   *
   * @remarks
   * The Street View Static API lets you embed a static (non-interactive) Street View panorama or
   * thumbnail into your web page, without the use of JavaScript. The viewport is defined with URL
   * parameters sent through a standard HTTP request, and is returned as a static image.
   *
   * @returns 200 OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GoogleMapsPlatformError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  streetView(
    request: StreetViewApi.StreetViewRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/maps/api/streetview"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "size", value: request.size, schema: s.string() },
          { name: "fov", value: request.fov, schema: s.optional(s.float64()) },
          { name: "heading", value: request.heading, schema: s.optional(s.float64()) },
          { name: "location", value: request.location, schema: s.optional(s.string()) },
          { name: "pano", value: request.pano, schema: s.optional(s.string()) },
          { name: "pitch", value: request.pitch, schema: s.optional(s.float64()) },
          { name: "radius", value: request.radius, schema: s.optional(s.float64()) },
          { name: "return_error_code", value: request.returnErrorCode, schema: s.optional(s.boolean()) },
          { name: "signature", value: request.signature, schema: s.optional(s.string()) },
          { name: "source", value: request.source, schema: s.optional(s.lazy(() => source1Schema)) },
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
   * streetViewMetadata
   *
   * @remarks
   * The Street View Static API metadata requests provide data about Street View panoramas. Using
   * the metadata, you can find out if a Street View image is available at a given location, as well
   * as getting programmatic access to the latitude and longitude, the panorama ID, the date the
   * photo was taken, and the copyright information for the image. Accessing this metadata allows
   * you to customize error behavior in your application.
   *
   * @returns 200 OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GoogleMapsPlatformError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  streetViewMetadata(
    request: StreetViewApi.StreetViewMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<StreetViewResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/maps/api/streetview/metadata"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "heading", value: request.heading, schema: s.optional(s.float64()) },
          { name: "location", value: request.location, schema: s.optional(s.string()) },
          { name: "pano", value: request.pano, schema: s.optional(s.string()) },
          { name: "pitch", value: request.pitch, schema: s.optional(s.float64()) },
          { name: "radius", value: request.radius, schema: s.optional(s.float64()) },
          { name: "return_error_code", value: request.returnErrorCode, schema: s.optional(s.boolean()) },
          { name: "signature", value: request.signature, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.optional(s.string()) },
          { name: "source", value: request.source, schema: s.optional(s.lazy(() => source1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: streetViewResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace StreetViewApi {
  export type StreetViewRequest = {
    /**
     * Specifies the output size of the image in pixels. Must not exceed 640 pixels wide or high,
     * anything over will default to 640 pixels. Size is specified as `{width}x{height}` - for
     * example, `size=600x400` returns an image 600 pixels wide, and 400 high.
     */
    size: string;
    /**
     * Determines the horizontal field of view of the image. The field of view is expressed in
     * degrees, with a maximum allowed value of 120. When dealing with a fixed-size viewport, as
     * with a Street View image of a set size, field of view in essence represents zoom, with
     * smaller numbers indicating a higher level of zoom. Default is 90.
     */
    fov?: number;
    /**
     * Indicates the compass heading of the camera. Accepted values are from 0 to 360 (both values
     * indicating North, with 90 indicating East, and 180 South). If no heading is specified, a
     * value will be calculated that directs the camera towards the specified location, from the
     * point at which the closest photograph was taken.
     */
    heading?: number;
    /**
     * The point around which to retrieve place information. The Street View Static API will snap to
     * the panorama photographed closest to this location. When an address text string is provided,
     * the API may use a different camera location to better display the specified location. When a
     * lat/lng is provided, the API searches a 50 meter radius for a photograph closest to this
     * location. Because Street View imagery is periodically refreshed, and photographs may be taken
     * from slightly different positions each time, it's possible that your `location` may snap to a
     * different panorama when imagery is updated.
     */
    location?: string;
    /**
     * A specific panorama ID. These are generally stable, though panoramas may change ID over time
     * as imagery is refreshed.
     */
    pano?: string;
    /**
     * Specifies the up or down angle of the camera relative to the Street View vehicle. This is
     * often, but not always, flat horizontal. Positive values angle the camera up (with 90 degrees
     * indicating straight up); negative values angle the camera down (with -90 indicating straight
     * down). Default is 0.
     */
    pitch?: number;
    /**
     * Sets a radius, specified in meters, in which to search for a panorama, centered on the given
     * latitude and longitude. Valid values are non-negative integers. Default is 50 meters.
     */
    radius?: number;
    /**
     * Indicates whether the API should return a non `200 Ok` HTTP status when no image is found
     * (`404 NOT FOUND`), or in response to an invalid request (400 BAD REQUEST). Valid values are
     * `true` and `false`. If set to `true`, an error message is returned in place of the generic
     * gray image. This eliminates the need to make a separate call to check for image availability.
     */
    returnErrorCode?: boolean;
    /**
     * A digital signature used to verify that any site generating requests using your API key is
     * authorized to do so. Requests that do not include a digital signature might fail. For more
     * information, see [Get a Key and
     * Signature](https://developers.google.com/maps/documentation/streetview/get-api-key).
     */
    signature?: string;
    /**
     * Limits Street View searches to selected sources. Valid values are:
     * * `default` uses the default sources for Street View; searches are not limited to specific
     *   sources.
     * * `outdoor` limits searches to outdoor collections. Indoor collections are not included in
     *   search results. Note that outdoor panoramas may not exist for the specified location. Also
     *   note that the search only returns panoramas where it's possible to determine whether
     *   they're indoors or outdoors. For example, PhotoSpheres are not returned because it's
     *   unknown whether they are indoors or outdoors.
     */
    source?: Source1;
  };

  export type StreetViewMetadataRequest = {
    /**
     * Indicates the compass heading of the camera. Accepted values are from 0 to 360 (both values
     * indicating North, with 90 indicating East, and 180 South). If no heading is specified, a
     * value will be calculated that directs the camera towards the specified location, from the
     * point at which the closest photograph was taken.
     */
    heading?: number;
    /**
     * The point around which to retrieve place information. The Street View Static API will snap to
     * the panorama photographed closest to this location. When an address text string is provided,
     * the API may use a different camera location to better display the specified location. When a
     * lat/lng is provided, the API searches a 50 meter radius for a photograph closest to this
     * location. Because Street View imagery is periodically refreshed, and photographs may be taken
     * from slightly different positions each time, it's possible that your `location` may snap to a
     * different panorama when imagery is updated.
     */
    location?: string;
    /**
     * A specific panorama ID. These are generally stable, though panoramas may change ID over time
     * as imagery is refreshed.
     */
    pano?: string;
    /**
     * Specifies the up or down angle of the camera relative to the Street View vehicle. This is
     * often, but not always, flat horizontal. Positive values angle the camera up (with 90 degrees
     * indicating straight up); negative values angle the camera down (with -90 indicating straight
     * down). Default is 0.
     */
    pitch?: number;
    /**
     * Sets a radius, specified in meters, in which to search for a panorama, centered on the given
     * latitude and longitude. Valid values are non-negative integers. Default is 50 meters.
     */
    radius?: number;
    /**
     * Indicates whether the API should return a non `200 Ok` HTTP status when no image is found
     * (`404 NOT FOUND`), or in response to an invalid request (400 BAD REQUEST). Valid values are
     * `true` and `false`. If set to `true`, an error message is returned in place of the generic
     * gray image. This eliminates the need to make a separate call to check for image availability.
     */
    returnErrorCode?: boolean;
    /**
     * A digital signature used to verify that any site generating requests using your API key is
     * authorized to do so. Requests that do not include a digital signature might fail. For more
     * information, see [Get a Key and
     * Signature](https://developers.google.com/maps/documentation/streetview/get-api-key).
     */
    signature?: string;
    /**
     * Specifies the output size of the image in pixels. Size is specified as `{width}x{height}` -
     * for example, `size=600x400` returns an image 600 pixels wide, and 400 high.
     */
    size?: string;
    /**
     * Limits Street View searches to selected sources. Valid values are:
     * * `default` uses the default sources for Street View; searches are not limited to specific
     *   sources.
     * * `outdoor` limits searches to outdoor collections. Indoor collections are not included in
     *   search results. Note that outdoor panoramas may not exist for the specified location. Also
     *   note that the search only returns panoramas where it's possible to determine whether
     *   they're indoors or outdoors. For example, PhotoSpheres are not returned because it's
     *   unknown whether they are indoors or outdoors.
     */
    source?: Source1;
  };
}

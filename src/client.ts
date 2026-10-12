import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { DirectionsApi } from "./resources/directions-api.js";
import { DistanceMatrixApi } from "./resources/distance-matrix-api.js";
import { ElevationApi } from "./resources/elevation-api.js";
import { GeocodingApi } from "./resources/geocoding-api.js";
import { GeolocationApi } from "./resources/geolocation-api.js";
import { PlacesApi } from "./resources/places-api.js";
import { RoadsApi } from "./resources/roads-api.js";
import { StreetViewApi } from "./resources/street-view-api.js";
import { TimeZoneApi } from "./resources/time-zone-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * API Specification for Google Maps Platform
 */
export class GoogleMapsPlatformClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #geolocationApi?: GeolocationApi;
  #directionsApi?: DirectionsApi;
  #elevationApi?: ElevationApi;
  #geocodingApi?: GeocodingApi;
  #timeZoneApi?: TimeZoneApi;
  #roadsApi?: RoadsApi;
  #distanceMatrixApi?: DistanceMatrixApi;
  #placesApi?: PlacesApi;
  #streetViewApi?: StreetViewApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GOOGLE_MAPS_PLATFORM_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GoogleMapsPlatformClient/1.22.5 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.22.5", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  get geolocationApi(): GeolocationApi {
    return (this.#geolocationApi ??= new GeolocationApi(this.#rawClient, this.#servers, this.#auth));
  }

  get directionsApi(): DirectionsApi {
    return (this.#directionsApi ??= new DirectionsApi(this.#rawClient, this.#servers, this.#auth));
  }

  get elevationApi(): ElevationApi {
    return (this.#elevationApi ??= new ElevationApi(this.#rawClient, this.#servers, this.#auth));
  }

  get geocodingApi(): GeocodingApi {
    return (this.#geocodingApi ??= new GeocodingApi(this.#rawClient, this.#servers, this.#auth));
  }

  get timeZoneApi(): TimeZoneApi {
    return (this.#timeZoneApi ??= new TimeZoneApi(this.#rawClient, this.#servers, this.#auth));
  }

  get roadsApi(): RoadsApi {
    return (this.#roadsApi ??= new RoadsApi(this.#rawClient, this.#servers, this.#auth));
  }

  get distanceMatrixApi(): DistanceMatrixApi {
    return (this.#distanceMatrixApi ??= new DistanceMatrixApi(this.#rawClient, this.#servers, this.#auth));
  }

  get placesApi(): PlacesApi {
    return (this.#placesApi ??= new PlacesApi(this.#rawClient, this.#servers, this.#auth));
  }

  get streetViewApi(): StreetViewApi {
    return (this.#streetViewApi ??= new StreetViewApi(this.#rawClient, this.#servers, this.#auth));
  }
}

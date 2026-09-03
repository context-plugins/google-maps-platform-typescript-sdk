import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import { DEFAULT_CLIENT_OPTIONS, type ClientOptions } from "./client-options.js";
import { RawClient } from "./core/raw-client.js";
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

  constructor(clientOptions: Partial<ClientOptions> = {}) {
    const options = { ...DEFAULT_CLIENT_OPTIONS, ...clientOptions };

    this.#rawClient = new RawClient({
      timeout: options.timeout,
      defaultHeaders: [],
      defaultQuery: [],
      defaultPathParams: [],
      fetch: options.fetch,
    });

    this.#servers = buildServers(options.serverEnvironment, options.serverOptions);

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

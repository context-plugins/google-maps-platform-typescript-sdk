import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  distanceMatrixResponseSchema,
  type DistanceMatrixResponse,
} from "../models/distance-matrix-response.js";
import { language1Schema, type Language1 } from "../models/language1.js";
import { mode1Schema, type Mode1 } from "../models/mode1.js";
import { region1Schema, type Region1 } from "../models/region1.js";
import { trafficModel1Schema, type TrafficModel1 } from "../models/traffic-model1.js";
import {
  transitRoutingPreference1Schema,
  type TransitRoutingPreference1,
} from "../models/transit-routing-preference1.js";
import { units2Schema, type Units2 } from "../models/units2.js";
import type { Servers } from "../servers.js";

export class DistanceMatrixApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  distanceMatrix(
    request: DistanceMatrixApi.DistanceMatrixRequest,
    options?: RequestOptions,
  ): ApiPromise<DistanceMatrixResponse, ResponseError> {
    return this.#rawClient.execute<DistanceMatrixResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/maps/api/distancematrix/json"),
        auth: this.#auth.apiKeyAuth,
        query: [
          { name: "destinations", value: request.destinations, schema: s.array(s.string()) },
          { name: "origins", value: request.origins, schema: s.array(s.string()) },
          { name: "arrival_time", value: request.arrivalTime, schema: s.optional(s.number()) },
          { name: "departure_time", value: request.departureTime, schema: s.optional(s.number()) },
          { name: "avoid", value: request.avoid, schema: s.optional(s.string()) },
          { name: "units", value: request.units, schema: s.optional(s.lazy(() => units2Schema)) },
          { name: "language", value: request.language, schema: s.optional(s.lazy(() => language1Schema)) },
          { name: "mode", value: request.mode, schema: s.optional(s.lazy(() => mode1Schema)) },
          { name: "region", value: request.region, schema: s.optional(s.lazy(() => region1Schema)) },
          {
            name: "traffic_model",
            value: request.trafficModel,
            schema: s.optional(s.lazy(() => trafficModel1Schema)),
          },
          { name: "transit_mode", value: request.transitMode, schema: s.optional(s.string()) },
          {
            name: "transit_routing_preference",
            value: request.transitRoutingPreference,
            schema: s.optional(s.lazy(() => transitRoutingPreference1Schema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: distanceMatrixResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace DistanceMatrixApi {
  export type DistanceMatrixRequest = {
    destinations: string[];
    origins: string[];
    arrivalTime?: number;
    departureTime?: number;
    avoid?: string;
    units?: Units2;
    language?: Language1;
    mode?: Mode1;
    region?: Region1;
    trafficModel?: TrafficModel1;
    transitMode?: string;
    transitRoutingPreference?: TransitRoutingPreference1;
  };
}

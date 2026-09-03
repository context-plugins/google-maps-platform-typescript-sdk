<!-- Generated file — do not edit; regenerated with the SDK. -->

# DistanceMatrixApi — operations

Accessor: `client.distanceMatrixApi` · Source: `src/resources/distance-matrix-api.ts` · 1 operation · Request types: namespace `DistanceMatrixApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-maps-platform`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### distanceMatrix

- **Signature**: `distanceMatrix(request: DistanceMatrixApi.DistanceMatrixRequest, options?: RequestOptions): ApiPromise<DistanceMatrixResponse, ResponseError>`
- **Wire**: `GET /maps/api/distancematrix/json`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DistanceMatrixResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `DistanceMatrixApi.DistanceMatrixRequest` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `destinations` | `query` | — | `string[]` | yes |
| `origins` | `query` | — | `string[]` | yes |
| `arrivalTime` | `query` | `arrival_time` | `number` | no |
| `departureTime` | `query` | `departure_time` | `number` | no |
| `avoid` | `query` | — | `string` | no |
| `units` | `query` | — | `Units2` | no |
| `language` | `query` | — | `Language1` | no |
| `mode` | `query` | — | `Mode1` | no |
| `region` | `query` | — | `Region1` | no |
| `trafficModel` | `query` | `traffic_model` | `TrafficModel1` | no |
| `transitMode` | `query` | `transit_mode` | `string` | no |
| `transitRoutingPreference` | `query` | `transit_routing_preference` | `TransitRoutingPreference1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Units2` | `units2Schema` | `src/models/units2.ts` |
| `Language1` | `language1Schema` | `src/models/language1.ts` |
| `Mode1` | `mode1Schema` | `src/models/mode1.ts` |
| `Region1` | `region1Schema` | `src/models/region1.ts` |
| `TrafficModel1` | `trafficModel1Schema` | `src/models/traffic-model1.ts` |
| `TransitRoutingPreference1` | `transitRoutingPreference1Schema` | `src/models/transit-routing-preference1.ts` |
| `DistanceMatrixResponse` | `distanceMatrixResponseSchema` | `src/models/distance-matrix-response.ts` |


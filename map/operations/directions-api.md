<!-- Generated file — do not edit; regenerated with the SDK. -->

# DirectionsApi — operations

Accessor: `client.directionsApi` · Source: `src/resources/directions-api.ts` · 1 operation · Request types: namespace `DirectionsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-maps-platform`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### directions

- **Signature**: `directions(request: DirectionsApi.DirectionsRequest, options?: RequestOptions): ApiPromise<DirectionsResponse, ApiError>`
- **Wire**: `GET /maps/api/directions/json`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DirectionsResponse`
- **Error**: `GoogleMapsPlatformError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `DirectionsApi.DirectionsRequest` (14):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `destination` | `query` | — | `string` | yes |
| `origin` | `query` | — | `string` | yes |
| `arrivalTime` | `query` | `arrival_time` | `number` | no |
| `departureTime` | `query` | `departure_time` | `number` | no |
| `alternatives` | `query` | — | `boolean` | no |
| `avoid` | `query` | — | `string` | no |
| `units` | `query` | — | `Units1` | no |
| `waypoints` | `query` | — | `string` | no |
| `language` | `query` | — | `Language1` | no |
| `mode` | `query` | — | `Mode1` | no |
| `region` | `query` | — | `Region1` | no |
| `trafficModel` | `query` | `traffic_model` | `TrafficModel1` | no |
| `transitMode` | `query` | `transit_mode` | `string` | no |
| `transitRoutingPreference` | `query` | `transit_routing_preference` | `TransitRoutingPreference1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Units1` | `units1Schema` | `src/models/units1.ts` |
| `Language1` | `language1Schema` | `src/models/language1.ts` |
| `Mode1` | `mode1Schema` | `src/models/mode1.ts` |
| `Region1` | `region1Schema` | `src/models/region1.ts` |
| `TrafficModel1` | `trafficModel1Schema` | `src/models/traffic-model1.ts` |
| `TransitRoutingPreference1` | `transitRoutingPreference1Schema` | `src/models/transit-routing-preference1.ts` |
| `DirectionsResponse` | `directionsResponseSchema` | `src/models/directions-response.ts` |


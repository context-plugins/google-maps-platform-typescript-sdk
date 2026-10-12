<!-- Generated file — do not edit; regenerated with the SDK. -->

# ElevationApi — operations

Accessor: `client.elevationApi` · Source: `src/resources/elevation-api.ts` · 1 operation · Request types: namespace `ElevationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-maps-platform`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### elevation

- **Signature**: `elevation(request: ElevationApi.ElevationRequest, options?: RequestOptions): ApiPromise<MapsApiElevationJsonResponse, ApiError>`
- **Wire**: `GET /maps/api/elevation/json`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MapsApiElevationJsonResponse`
- **Error**: `GoogleMapsPlatformError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ElevationApi.ElevationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `locations` | `query` | `string[]` | no |
| `path` | `query` | `string[]` | no |
| `samples` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MapsApiElevationJsonResponse` | `mapsApiElevationJsonResponseSchema` | `src/models/maps-api-elevation-json-response.ts` |


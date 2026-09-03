<!-- Generated file — do not edit; regenerated with the SDK. -->

# RoadsApi — operations

Accessor: `client.roadsApi` · Source: `src/resources/roads-api.ts` · 2 operations · Request and error types: namespace `RoadsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-maps-platform`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nearestRoads

- **Signature**: `nearestRoads(request: RoadsApi.NearestRoadsRequest, options?: RequestOptions): ApiPromise<NearestRoadsResponse, RoadsApi.NearestRoadsApiError>`
- **Wire**: `GET /v1/nearestRoads`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NearestRoadsResponse`
- **Error**: `RoadsApi.NearestRoadsApiError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"nearestRoadsErrorResponse"` [400] `NearestRoadsErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RoadsApi.NearestRoadsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `points` | `query` | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NearestRoadsResponse` | `nearestRoadsResponseSchema` | `src/models/nearest-roads-response.ts` |
| `NearestRoadsErrorResponse` | `nearestRoadsErrorResponseSchema` | `src/models/nearest-roads-error-response.ts` |

### snapToRoads

- **Signature**: `snapToRoads(request: RoadsApi.SnapToRoadsRequest, options?: RequestOptions): ApiPromise<SnapToRoadsResponse, ResponseError>`
- **Wire**: `GET /v1/snaptoroads`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SnapToRoadsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `RoadsApi.SnapToRoadsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `path` | `query` | `string[]` | yes |
| `interpolate` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SnapToRoadsResponse` | `snapToRoadsResponseSchema` | `src/models/snap-to-roads-response.ts` |


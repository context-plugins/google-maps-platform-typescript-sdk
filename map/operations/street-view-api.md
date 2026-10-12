<!-- Generated file — do not edit; regenerated with the SDK. -->

# StreetViewApi — operations

Accessor: `client.streetViewApi` · Source: `src/resources/street-view-api.ts` · 2 operations · Request types: namespace `StreetViewApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-maps-platform`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### streetView

- **Signature**: `streetView(request: StreetViewApi.StreetViewRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `GET /maps/api/streetview`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GoogleMapsPlatformError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StreetViewApi.StreetViewRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `size` | `query` | — | `string` | yes |
| `fov` | `query` | — | `number` | no |
| `heading` | `query` | — | `number` | no |
| `location` | `query` | — | `string` | no |
| `pano` | `query` | — | `string` | no |
| `pitch` | `query` | — | `number` | no |
| `radius` | `query` | — | `number` | no |
| `returnErrorCode` | `query` | `return_error_code` | `boolean` | no |
| `signature` | `query` | — | `string` | no |
| `source` | `query` | — | `Source1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Source1` | `source1Schema` | `src/models/source1.ts` |

### streetViewMetadata

- **Signature**: `streetViewMetadata(request: StreetViewApi.StreetViewMetadataRequest, options?: RequestOptions): ApiPromise<StreetViewResponse, ApiError>`
- **Wire**: `GET /maps/api/streetview/metadata`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StreetViewResponse`
- **Error**: `GoogleMapsPlatformError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StreetViewApi.StreetViewMetadataRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `heading` | `query` | — | `number` | no |
| `location` | `query` | — | `string` | no |
| `pano` | `query` | — | `string` | no |
| `pitch` | `query` | — | `number` | no |
| `radius` | `query` | — | `number` | no |
| `returnErrorCode` | `query` | `return_error_code` | `boolean` | no |
| `signature` | `query` | — | `string` | no |
| `size` | `query` | — | `string` | no |
| `source` | `query` | — | `Source1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Source1` | `source1Schema` | `src/models/source1.ts` |
| `StreetViewResponse` | `streetViewResponseSchema` | `src/models/street-view-response.ts` |


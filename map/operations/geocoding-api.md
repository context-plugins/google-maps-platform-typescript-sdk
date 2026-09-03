<!-- Generated file — do not edit; regenerated with the SDK. -->

# GeocodingApi — operations

Accessor: `client.geocodingApi` · Source: `src/resources/geocoding-api.ts` · 1 operation · Request types: namespace `GeocodingApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-maps-platform`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### geocode

- **Signature**: `geocode(request: GeocodingApi.GeocodeRequest, options?: RequestOptions): ApiPromise<GeocodingResponse, ResponseError>`
- **Wire**: `GET /maps/api/geocode/json`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GeocodingResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `GeocodingApi.GeocodeRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `address` | `query` | — | `string` | no |
| `bounds` | `query` | — | `string[]` | no |
| `components` | `query` | — | `string[]` | no |
| `latlng` | `query` | — | `string` | no |
| `locationType` | `query` | `location_type` | `LocationType[]` | no |
| `placeId` | `query` | `place_id` | `string` | no |
| `resultType` | `query` | `result_type` | `ResultType[]` | no |
| `language` | `query` | — | `Language1` | no |
| `region` | `query` | — | `Region1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LocationType` | `locationTypeSchema` | `src/models/location-type.ts` |
| `ResultType` | `resultTypeSchema` | `src/models/result-type.ts` |
| `Language1` | `language1Schema` | `src/models/language1.ts` |
| `Region1` | `region1Schema` | `src/models/region1.ts` |
| `GeocodingResponse` | `geocodingResponseSchema` | `src/models/geocoding-response.ts` |


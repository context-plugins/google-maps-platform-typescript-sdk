<!-- Generated file — do not edit; regenerated with the SDK. -->

# GeolocationApi — operations

Accessor: `client.geolocationApi` · Source: `src/resources/geolocation-api.ts` · 1 operation · Request and error types: namespace `GeolocationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-maps-platform`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### geolocate

- **Signature**: `geolocate(request: GeolocationApi.GeolocateRequest, options?: RequestOptions): ApiPromise<GeolocationV1GeolocateResponse, GeolocationApi.GeolocateError>`
- **Wire**: `POST /geolocation/v1/geolocate`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **Returns**: `GeolocationV1GeolocateResponse`
- **Error**: `GeolocationApi.GeolocateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"geolocationV1Geolocate400Error1"` [400] `GeolocationV1Geolocate400Error1` · `"geolocationV1Geolocate404Error1"` [404] `GeolocationV1Geolocate404Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GeolocationApi.GeolocateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GeolocationV1GeolocateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GeolocationV1GeolocateRequest` | `geolocationV1GeolocateRequestSchema` | `src/models/geolocation-v1-geolocate-request.ts` |
| `GeolocationV1GeolocateResponse` | `geolocationV1GeolocateResponseSchema` | `src/models/geolocation-v1-geolocate-response.ts` |
| `GeolocationV1Geolocate400Error1` | `geolocationV1Geolocate400Error1Schema` | `src/models/geolocation-v1-geolocate400-error1.ts` |
| `GeolocationV1Geolocate404Error1` | `geolocationV1Geolocate404Error1Schema` | `src/models/geolocation-v1-geolocate404-error1.ts` |


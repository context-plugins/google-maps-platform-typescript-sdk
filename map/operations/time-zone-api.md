<!-- Generated file — do not edit; regenerated with the SDK. -->

# TimeZoneApi — operations

Accessor: `client.timeZoneApi` · Source: `src/resources/time-zone-api.ts` · 1 operation · Request types: namespace `TimeZoneApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-maps-platform`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### timezone

- **Signature**: `timezone(request: TimeZoneApi.TimezoneRequest, options?: RequestOptions): ApiPromise<TimeZoneResponse, ResponseError>`
- **Wire**: `GET /maps/api/timezone/json`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TimeZoneResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TimeZoneApi.TimezoneRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `location` | `query` | `string` | yes |
| `timestamp` | `query` | `number` | yes |
| `language` | `query` | `Language1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Language1` | `language1Schema` | `src/models/language1.ts` |
| `TimeZoneResponse` | `timeZoneResponseSchema` | `src/models/time-zone-response.ts` |


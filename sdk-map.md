<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Google Maps Platform (TypeScript)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, request-field placement, error types and server wiring **by lookup**. Model shapes are *not* duplicated here — the map names the file declaring each type and the schema value exported beside it; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Google Maps Platform |
| Package | `google-maps-platform` |
| Package version | `1.22.5` |
| API spec version | `1.22.5` |
| Import specifier | `google-maps-platform` — the package root is the **only** entry. Deep imports (`google-maps-platform/models/...`) do not resolve; the `exports` map exposes `.` and `./package.json` and nothing else |
| Module format | dual ESM + CommonJS, as folder dialects (`dist/esm`, `dist/commonjs`), each with its own `package.json` marker. No `.mjs`, `.cjs`, `.d.mts` or `.d.cts` files exist |
| Node floor | `>=20` (`engines.node`) |
| TypeScript floor | a resolver that reads `exports` (4.7+), plus whatever the pinned `zod` requires — `zod@4` needs 5.5 or later. The public `.d.ts` chain reaches `zod/v4-mini`, so this is a real constraint rather than a build-tool version |
| Runtime dependency | `zod` (`^3.25.0 \|\| ^4.0.0`), imported as `zod/v4-mini`. The only runtime dependency |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `package.json` — never to the page that carries them: a page two directories deep writes exactly what a page at the root would. The package ships its `src/` tree, so the same paths resolve inside `node_modules/google-maps-platform/` too. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

---

## Getting a client

```ts
import { GoogleMapsPlatformClient, ServerEnvironment } from "google-maps-platform";

const client = new GoogleMapsPlatformClient({
  serverEnvironment: ServerEnvironment.Production,
  apiKeyAuth: "YOUR_API_KEY",
});
```

The only constructor is `new GoogleMapsPlatformClient(clientOptions: Partial<ClientOptions> = {})`, so `new GoogleMapsPlatformClient()` is valid. Resources are memoized lazy getters on the client — `client.geolocationApi`, `client.directionsApi`, `client.elevationApi`, `client.geocodingApi`, `client.timeZoneApi`, `client.roadsApi`, `client.distanceMatrixApi`, `client.placesApi`, `client.streetViewApi` — and their classes are exported only for their merged namespaces and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter.

All `ClientOptions` fields (source: `src/client-options.ts`; every field is `readonly`):

| Field | Type | Default |
| --- | --- | --- |
| `serverEnvironment` | `ServerEnvironment` | `ServerEnvironment.Production` |
| `serverOptions` | `ServerOptions` | `{}` — each resolver merges its own per-environment defaults in |
| `timeout` | `number` (ms) | `60_000` |
| `fetch` | `FetchLike \| undefined` | the global `fetch`, resolved by the transport |
| `apiKeyAuth` | `TokenProvider \| undefined` | unset |

The 1 auth field is optional, and an unset one is not an error — the operation that wanted it simply sends no credential. What each one puts on the wire, and which operations require it, are under Servers & auth.

Two engine behaviours the table cannot show. A non-finite or non-positive `timeout` is **not** "no timeout" — the transport (`src/core/raw-client.ts`) falls back to its own ceiling and clamps anything above it. And when no `fetch` is reachable the **constructor** throws `SdkError`, not the first call.

**`ClientOptions.fetch` is the one extension point** — there are no hooks, no middleware and no interceptors, so a proxy, a custom agent, extra headers, retries or request logging all go here. A replacement **must forward `init.signal`** to whatever actually performs the request; spreading `...init` does it. Drop it and both the per-call signal and `timeout` go inert — the call neither aborts nor times out.

**Cancellation.** The `signal` on `RequestOptions` is the whole per-request surface. An already-aborted signal rejects immediately, `err.cause` is whatever was passed to `abort()`, and the client-level `timeout` surfaces through the same branch with `err.kind === "timeout"`. There is no per-request timeout.

The entire per-request surface is the optional second argument of every operation:

| Type | Members | Source |
| --- | --- | --- |
| `RequestOptions` | `signal?: AbortSignal` | `src/core/api-request.ts` |

**Not on this SDK.** These are absent by design, not undocumented. This table ships with `src/core/` and is versioned with it.

| You might reach for | Reality |
| --- | --- |
| `maxRetries`, backoff, `Retry-After` handling | no retries. A failed call rejects once |
| a logger, `logLevel`, request/response logging | none. `src/core/` contains no `console` call |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one extension point |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream`, `ReadableStream` | no streaming. Every decoder reads the body to completion |
| `FormData`, `Blob`, `File`, multipart, binary bodies | none. The only body kinds are empty, JSON, form-urlencoded and text |
| per-request `headers`, `timeout`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal }` |
| the raw `fetch` `Response` | deliberately unreachable. `status` and `headers` are on `asApiResult()` and on a thrown `ResponseError` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**, and failures fall into **two disjoint families**. Neither is `instanceof` the other, so the two branches can never overlap and a complete `catch` needs both. `instanceof` is reliable **within one dialect**: a process that loads both — `import` in one file, `require` in another — gets two independent copies of every error class, and `instanceof` across that boundary is `false`. Narrow on `err.kind` or on `err.payload.kind` there, or on `err.name`, which is stable across copies.

- **Family A — the API answered with an error status.** The call rejects with `ResponseError`, or with a subclass of it where the spec declared error bodies for that operation. `err.payload` is a discriminated union whose `kind` names the **response schema the spec declared**, *not* the status code — so two statuses sharing one schema share one arm, and `"undeclared"` is an always-present arm carrying the raw bytes.
- **Family B — no usable response was produced.** The call rejects with a member of the `GoogleMapsPlatformError` set. `GoogleMapsPlatformError` is **abstract**: use it for `instanceof`, never construct it.

Core types (public members with their declared types; all are `readonly`):

| Type | Public members | Source |
| --- | --- | --- |
| `ResponseError<P>` | `status: number` · `headers: Headers` · `payload: ErrorPayload<P>`, and a `message` of the form `<status> <statusText>` | `src/core/response-error.ts` |
| `Declared<K, B>` | `kind: K` · `body: B` | `src/core/response-error.ts` |
| `ErrorPayload<P>` | `P` or `{ kind: "undeclared"; rawBody: ArrayBuffer }` | `src/core/response-error.ts` |
| `GoogleMapsPlatformError` (abstract; declared as `CoreError`) | `kind: ErrorKind` · `message` · `cause` | `src/core/errors.ts` |
| `SchemaError` | `kind: "schema"` · `rawBody: unknown` | `src/core/validation/schema-error.ts` |
| `AuthError` | `kind: "auth"` · `failures: readonly unknown[]` | `src/core/errors.ts` |
| `ApiResult<T, E>` | on success `{ ok: true; status; headers; value: T }`, on failure `{ ok: false; status; headers; errorMessage: string; error }` — `error` carries the **payload**, not the error object | `src/core/api-promise.ts` |

`ErrorKind` is one value per Family B class: `connection` (the `fetch` call rejected, or the body read failed mid-stream), `timeout` (the client-level timeout elapsed), `abort` (the per-call signal aborted, including one that was already aborted), `sdk` (a defect on the SDK side), `schema` (a value failed its schema in **either** direction — inbound the response body was malformed, outbound nothing was sent at all), and `auth` (a credential could not be **obtained**).

**`AuthError` is about obtaining a credential, never about being refused one.** A 401 *from the API* is a Family A `ResponseError` like any other status, so the two are disjoint and one `catch` arm cannot absorb the other. A 401 does have one auth consequence: it invalidates whatever that operation's scheme had cached, so the **next** call re-acquires. The current request is not retried — see Servers & auth.

```ts
try {
  const response = await client.geolocationApi.geolocate();
} catch (err) {
  if (err instanceof ResponseError) {
    // TODO: the API answered with an error status — read err.status and err.payload
  }
  if (err instanceof GoogleMapsPlatformError) {
    // TODO: no usable response was produced — err.kind says which
  }
}
```

A typed subclass narrows further, on `err.payload.kind`. Which arms an operation declares, with the status each covers, is the **Error arms** bullet on its page below.

**Matcher precedence** for a subclass with several arms: an exact numeric status is looked up across the whole table **first**; only then does the first covering wildcard or range win.

**The non-throwing form exists on every operation.** `.asApiResult()` returns `ApiResult<T, E>` and does **not** reject for an HTTP error status — it still rejects for Family B. It must be called on the value the operation returned: `ApiPromise` overrides `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the method is gone.

Of **17 operations**, **2** declare typed error bodies and **15** reject with the base `ResponseError`, whose payload is always the `"undeclared"` arm.

---

## Operations — by resource (9 groups, 17 operations)

Each page below carries one block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire**, **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms**, then a **Fields** table mapping every request field to the channel it travels on, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions. With `api-reference.md` documenting operations only, that table is the route from an operation to the file declaring what it takes.

**Each block states what is specific to its operation. Everything in the table below holds for EVERY operation unless that operation says otherwise, so a block silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A block departs from it only by |
| --- | --- | --- |
| **Call shape `op(request, options?)`** — one flat request object first, the per-call options second. There is no positional overload, and no per-call base URL, header, timeout, retry or auth override | here, Getting a client | never — it always holds |
| **The request object is flat and channel-blind.** A field named `body` *is* the whole request body; every other field is fanned out to path, query, header or form by the SDK. Nothing in the object is nested by channel | here | never — the **Fields** table `Channel` column always resolves it |
| **Throw-based, returning `ApiPromise<T, E>`.** `await` it for `T`; call `.asApiResult()` on the returned value for the non-throwing `ApiResult<T, E>`. No operation is result-only | here, Error-handling model | never |
| **`E` is the base `ResponseError`** and the payload is always the `"undeclared"` arm | Error-handling model | the spec declared error bodies — the **Error** bullet names a subclass and an **Error arms** bullet gives each arm's tag, status and body |
| **The request body and its media type are stated on every block**, by a **Request body** bullet that is never omitted. `none` means no body **and no `Content-Type` header** | here | never — the bullet is always present |
| **Resolves once, to one whole value.** No pagination, no streaming, no SSE, no async iterables, no partial results, no multipart and no binary anywhere | here, Not on this SDK | never at this SDK version |
| **Server group `default`** | here, Servers & auth | the operation is on another group — its block carries a **Server** bullet |
| **Every operation states its auth requirement**, by an **Auth** bullet that is never omitted — one scheme, a composition over schemes, or `none` for a public operation | here, Servers & auth | never — the bullet is always present |
| **Every value is schema-encoded before the request is built** — a wrong type or format rejects and nothing is sent. **An omitted field that has a default is still sent, with that default**, filled by the SDK rather than by the server | here, Models | the field has a default — it appears in the **Fields** table `Default` column |
| **Field names are TypeScript camelCase and the wire name is the same** | here | some field differs — the **Fields** table gains a `Wire` column, where an em dash means "same as the field name" |
| **Arrays repeat their key and objects bracket-expand** | the serialization block below | never — this SDK declares no per-field serialization style, so every array takes this one |

**Wire serialization, once, for every channel** (source: `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts`). This block ships with `src/core/` and is versioned with it:

- **`path`** takes no style. An array is comma-joined with each element percent-encoded **separately**; an object becomes one percent-encoded JSON document inside the segment. A field whose encoded value is `undefined` throws `SdkError` naming the unfilled placeholder; `null` collapses the segment.
- **`header`** takes no style. An array is comma-joined un-encoded (OpenAPI `simple`). `undefined` says nothing, while `null` and an empty array are tombstones that remove the header. Later layers win by **lowercased** name, in the order body content type, then client defaults, then operation.
- **`query`** and **`form`** repeat an array's key and bracket-expand an object at any depth (`filter[status]=open`, `ranges[amount][min]=10`). An array of *objects* bracket-expands per element with **no index**, so element boundaries collapse.
- Nullish **fields** are dropped from every channel except `path`, where `null` collapses the segment. A nullish array **element** is dropped, so an all-nullish array emits no key at all.
- `form` bodies use RFC 1866 encoding (space becomes `+`); `query` uses `%20`. On the wire both key and value go through `encodeURIComponent`, plus a further escape of `!`, `'`, `(`, `)` and `*`.

**The verb and route are on the pages below**, where a map for a language whose method names are derived from the route can leave them to the source. A TypeScript method name carries none of it, and a `path` field row is unreadable without the route template it fills.

**Endpoint prose is not on this map.** Where the *semantics* of an operation decide what you must pass — a field whose value changes server-side behaviour, an ordering or exclusivity rule between fields — read `api-reference.md`, whose entries are keyed by the same signature these pages print. Blocks here give you the contract: names, channels, types, defaults, errors.

| Resource (`client.X`) | Ops | Page |
| --- | --- | --- |
| `geolocationApi` | 1 | [map/operations/geolocation-api.md](map/operations/geolocation-api.md) |
| `directionsApi` | 1 | [map/operations/directions-api.md](map/operations/directions-api.md) |
| `elevationApi` | 1 | [map/operations/elevation-api.md](map/operations/elevation-api.md) |
| `geocodingApi` | 1 | [map/operations/geocoding-api.md](map/operations/geocoding-api.md) |
| `timeZoneApi` | 1 | [map/operations/time-zone-api.md](map/operations/time-zone-api.md) |
| `roadsApi` | 2 | [map/operations/roads-api.md](map/operations/roads-api.md) |
| `distanceMatrixApi` | 1 | [map/operations/distance-matrix-api.md](map/operations/distance-matrix-api.md) |
| `placesApi` | 7 | [map/operations/places-api.md](map/operations/places-api.md) |
| `streetViewApi` | 2 | [map/operations/street-view-api.md](map/operations/street-view-api.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `src/models/` declares exactly one model type and the schema value beside it, and both are re-exported from the package root. So there are two facts per type, and the map gives both: the **names you import** and the **file you read**.

```ts
import { type AddressComponent, addressComponentSchema } from "google-maps-platform";
```

Take the pair from an operation's **Type sources** table. **Do not derive the path from the type name** — the transform is not reversible in general, and the table is the authority. There is no default export.

| Group | Count | Directory |
| --- | --- | --- |
| Objects | 96 | `src/models/` |
| Enums (open; const companion plus schema) | 41 | `src/models/` |

**Conventions.** Every model is a plain `type`, not a class — build one with an object literal; there is no constructor and no builder. `f: T` is required, `f?: T` is optional (omit the key), and `f: T | null` is a **required, nullable** field where `null` is a value distinct from an omitted key. Optional properties are declared `f?: T`, not `f?: T | undefined`, so under `exactOptionalPropertyTypes` you must **omit or spread** an absent field rather than assign `undefined` to it.

**Schema companions.** `Schema<T, W = Encoded<T>>` is `{ decode(v: unknown): T; encode(v: unknown): W }`, so a schema value is directly usable both ways. `Encoded<T>` is the wire projection — a `Date` becomes `string | number`, a `Uint8Array` becomes a base64 `string`, recursing through arrays and objects. `EnumSchema<T>` adds `readonly values: readonly T[]`, so an enum's known set is testable at run time.

**Enums are open, and are not TypeScript `enum`s.** Each is a `const` companion object plus a union that includes `(string & {})` or `(number & {})`, so **any** value of the right base type is assignable and the schema validates the base type only, never membership. That is deliberate: an unrecognized server value round-trips instead of throwing. Use `.values` to test membership yourself.

| Enum | Members (member to wire value) | Schema value |
| --- | --- | --- |
| `AreaType` | `AdministrativeAreaLevel1` to `"administrative_area_level_1"` · `AdministrativeAreaLevel2` to `"administrative_area_level_2"` · `AdministrativeAreaLevel3` to `"administrative_area_level_3"` · `AdministrativeAreaLevel4` to `"administrative_area_level_4"` · `AdministrativeAreaLevel5` to `"administrative_area_level_5"` · `AmusementPark` to `"amusement_park"` · `Airport` to `"airport"` · `ColloquialArea` to `"colloquial_area"` · `Country` to `"country"` · `Establishment` to `"establishment"` · `Intersection` to `"intersection"` · `Locality` to `"locality"` · `NaturalFeature` to `"natural_feature"` · `Neighborhood` to `"neighborhood"` · `Park` to `"park"` · `PlusCode` to `"plus_code"` · `PointOfInterest` to `"point_of_interest"` · `Political` to `"political"` · `PostalCode` to `"postal_code"` · `Premise` to `"premise"` · `Route` to `"route"` · `StreetAddress` to `"street_address"` · `Sublocality` to `"sublocality"` · `SublocalityLevel1` to `"sublocality_level_1"` · `Subpremise` to `"subpremise"` · `TouristAttraction` to `"tourist_attraction"` · `TrainStation` to `"train_station"` · `TransitStation` to `"transit_station"` | `areaTypeSchema` |
| `BusinessStatus` | `Operational` to `"OPERATIONAL"` · `ClosedTemporarily` to `"CLOSED_TEMPORARILY"` · `ClosedPermanently` to `"CLOSED_PERMANENTLY"` | `businessStatusSchema` |
| `DirectionsStatus` | `Ok` to `"OK"` · `NotFound` to `"NOT_FOUND"` · `ZeroResults` to `"ZERO_RESULTS"` · `MaxWaypointsExceeded` to `"MAX_WAYPOINTS_EXCEEDED"` · `MaxRouteLengthExceeded` to `"MAX_ROUTE_LENGTH_EXCEEDED"` · `InvalidRequest` to `"INVALID_REQUEST"` · `OverDailyLimit` to `"OVER_DAILY_LIMIT"` · `OverQueryLimit` to `"OVER_QUERY_LIMIT"` · `RequestDenied` to `"REQUEST_DENIED"` · `UnknownError` to `"UNKNOWN_ERROR"` | `directionsStatusSchema` |
| `DistanceMatrixElementStatus` | `Ok` to `"OK"` · `NotFound` to `"NOT_FOUND"` · `ZeroResults` to `"ZERO_RESULTS"` · `MaxRouteLengthExceeded` to `"MAX_ROUTE_LENGTH_EXCEEDED"` | `distanceMatrixElementStatusSchema` |
| `DistanceMatrixStatus` | `Ok` to `"OK"` · `InvalidRequest` to `"INVALID_REQUEST"` · `MaxElementsExceeded` to `"MAX_ELEMENTS_EXCEEDED"` · `MaxDimensionsExceeded` to `"MAX_DIMENSIONS_EXCEEDED"` · `OverDailyLimit` to `"OVER_DAILY_LIMIT"` · `OverQueryLimit` to `"OVER_QUERY_LIMIT"` · `RequestDenied` to `"REQUEST_DENIED"` · `UnknownError` to `"UNKNOWN_ERROR"` | `distanceMatrixStatusSchema` |
| `ElevationStatus` | `Ok` to `"OK"` · `DataNotAvailable` to `"DATA_NOT_AVAILABLE"` · `InvalidRequest` to `"INVALID_REQUEST"` · `OverDailyLimit` to `"OVER_DAILY_LIMIT"` · `OverQueryLimit` to `"OVER_QUERY_LIMIT"` · `RequestDenied` to `"REQUEST_DENIED"` · `UnknownError` to `"UNKNOWN_ERROR"` | `elevationStatusSchema` |
| `GeocoderStatus` | `Ok` to `"OK"` · `ZeroResults` to `"ZERO_RESULTS"` | `geocoderStatusSchema` |
| `GeocodingStatus` | `Ok` to `"OK"` · `InvalidRequest` to `"INVALID_REQUEST"` · `OverDailyLimit` to `"OVER_DAILY_LIMIT"` · `OverQueryLimit` to `"OVER_QUERY_LIMIT"` · `RequestDenied` to `"REQUEST_DENIED"` · `UnknownError` to `"UNKNOWN_ERROR"` · `ZeroResults` to `"ZERO_RESULTS"` | `geocodingStatusSchema` |
| `Maneuver` | `TurnSlightLeft` to `"turn-slight-left"` · `TurnSharpLeft` to `"turn-sharp-left"` · `TurnLeft` to `"turn-left"` · `TurnSlightRight` to `"turn-slight-right"` · `TurnSharpRight` to `"turn-sharp-right"` · `KeepRight` to `"keep-right"` · `KeepLeft` to `"keep-left"` · `UturnLeft` to `"uturn-left"` · `UturnRight` to `"uturn-right"` · `TurnRight` to `"turn-right"` · `Straight` to `"straight"` · `RampLeft` to `"ramp-left"` · `RampRight` to `"ramp-right"` · `Merge` to `"merge"` · `ForkLeft` to `"fork-left"` · `ForkRight` to `"fork-right"` · `Ferry` to `"ferry"` · `FerryTrain` to `"ferry-train"` · `RoundaboutLeft` to `"roundabout-left"` · `RoundaboutRight` to `"roundabout-right"` | `maneuverSchema` |
| `PlacesAutocompleteStatus` | `Ok` to `"OK"` · `ZeroResults` to `"ZERO_RESULTS"` · `InvalidRequest` to `"INVALID_REQUEST"` · `OverQueryLimit` to `"OVER_QUERY_LIMIT"` · `RequestDenied` to `"REQUEST_DENIED"` · `UnknownError` to `"UNKNOWN_ERROR"` | `placesAutocompleteStatusSchema` |
| `PlacesDetailsStatus` | `Ok` to `"OK"` · `ZeroResults` to `"ZERO_RESULTS"` · `InvalidRequest` to `"INVALID_REQUEST"` · `NotFound` to `"NOT_FOUND"` · `OverQueryLimit` to `"OVER_QUERY_LIMIT"` · `RequestDenied` to `"REQUEST_DENIED"` · `UnknownError` to `"UNKNOWN_ERROR"` | `placesDetailsStatusSchema` |
| `PlacesSearchStatus` | `Ok` to `"OK"` · `ZeroResults` to `"ZERO_RESULTS"` · `InvalidRequest` to `"INVALID_REQUEST"` · `OverQueryLimit` to `"OVER_QUERY_LIMIT"` · `RequestDenied` to `"REQUEST_DENIED"` · `UnknownError` to `"UNKNOWN_ERROR"` | `placesSearchStatusSchema` |
| `StreetViewStatus` | `Ok` to `"OK"` · `InvalidRequest` to `"INVALID_REQUEST"` · `NotFound` to `"NOT_FOUND"` · `ZeroResults` to `"ZERO_RESULTS"` · `OverQueryLimit` to `"OVER_QUERY_LIMIT"` · `RequestDenied` to `"REQUEST_DENIED"` · `UnknownError` to `"UNKNOWN_ERROR"` | `streetViewStatusSchema` |
| `TimeZoneStatus` | `Ok` to `"OK"` · `InvalidRequest` to `"INVALID_REQUEST"` · `OverDailyLimit` to `"OVER_DAILY_LIMIT"` · `OverQueryLimit` to `"OVER_QUERY_LIMIT"` · `RequestDenied` to `"REQUEST_DENIED"` · `UnknownError` to `"UNKNOWN_ERROR"` · `ZeroResults` to `"ZERO_RESULTS"` | `timeZoneStatusSchema` |
| `TravelMode` | `Driving` to `"DRIVING"` · `Bicycling` to `"BICYCLING"` · `Transit` to `"TRANSIT"` · `Walking` to `"WALKING"` | `travelModeSchema` |
| `VehicleType` | `Bus` to `"BUS"` · `CableCar` to `"CABLE_CAR"` · `CommuterTrain` to `"COMMUTER_TRAIN"` · `Ferry` to `"FERRY"` · `Funicular` to `"FUNICULAR"` · `GondolaLift` to `"GONDOLA_LIFT"` · `HeavyRail` to `"HEAVY_RAIL"` · `HighSpeedTrain` to `"HIGH_SPEED_TRAIN"` · `IntercityBus` to `"INTERCITY_BUS"` · `LongDistanceTrain` to `"LONG_DISTANCE_TRAIN"` · `MetroRail` to `"METRO_RAIL"` · `Monorail` to `"MONORAIL"` · `Other` to `"OTHER"` · `Rail` to `"RAIL"` · `ShareTaxi` to `"SHARE_TAXI"` · `Subway` to `"SUBWAY"` · `Tram` to `"TRAM"` · `Trolleybus` to `"TROLLEYBUS"` | `vehicleTypeSchema` |
| `Inputtype` | `Textquery` to `"textquery"` · `Phonenumber` to `"phonenumber"` | `inputtypeSchema` |
| `Inputtype1` | `Textquery` to `"textquery"` · `Phonenumber` to `"phonenumber"` | `inputtype1Schema` |
| `Language` | `Ar` to `"ar"` · `Bg` to `"bg"` · `Bn` to `"bn"` · `Ca` to `"ca"` · `Cs` to `"cs"` · `Da` to `"da"` · `De` to `"de"` · `El` to `"el"` · `En` to `"en"` · `EnAu` to `"en-AU"` · `EnGb` to `"en-GB"` · `Es` to `"es"` · `Eu` to `"eu"` · `Fa` to `"fa"` · `Fi` to `"fi"` · `Fil` to `"fil"` · `Fr` to `"fr"` · `Gl` to `"gl"` · `Gu` to `"gu"` · `Hi` to `"hi"` · `Hr` to `"hr"` · `Hu` to `"hu"` · `Id` to `"id"` · `It` to `"it"` · `Iw` to `"iw"` · `Ja` to `"ja"` · `Kn` to `"kn"` · `Ko` to `"ko"` · `Lt` to `"lt"` · `Lv` to `"lv"` · `Ml` to `"ml"` · `Mr` to `"mr"` · `Nl` to `"nl"` · `No` to `"no"` · `Pl` to `"pl"` · `Pt` to `"pt"` · `PtBr` to `"pt-BR"` · `PtPt` to `"pt-PT"` · `Ro` to `"ro"` · `Ru` to `"ru"` · `Sk` to `"sk"` · `Sl` to `"sl"` · `Sr` to `"sr"` · `Sv` to `"sv"` · `Ta` to `"ta"` · `Te` to `"te"` · `Th` to `"th"` · `Tl` to `"tl"` · `Tr` to `"tr"` · `Uk` to `"uk"` · `Vi` to `"vi"` · `ZhCn` to `"zh-CN"` · `ZhTw` to `"zh-TW"` | `languageSchema` |
| `Language1` | `Ar` to `"ar"` · `Bg` to `"bg"` · `Bn` to `"bn"` · `Ca` to `"ca"` · `Cs` to `"cs"` · `Da` to `"da"` · `De` to `"de"` · `El` to `"el"` · `En` to `"en"` · `EnAu` to `"en-AU"` · `EnGb` to `"en-GB"` · `Es` to `"es"` · `Eu` to `"eu"` · `Fa` to `"fa"` · `Fi` to `"fi"` · `Fil` to `"fil"` · `Fr` to `"fr"` · `Gl` to `"gl"` · `Gu` to `"gu"` · `Hi` to `"hi"` · `Hr` to `"hr"` · `Hu` to `"hu"` · `Id` to `"id"` · `It` to `"it"` · `Iw` to `"iw"` · `Ja` to `"ja"` · `Kn` to `"kn"` · `Ko` to `"ko"` · `Lt` to `"lt"` · `Lv` to `"lv"` · `Ml` to `"ml"` · `Mr` to `"mr"` · `Nl` to `"nl"` · `No` to `"no"` · `Pl` to `"pl"` · `Pt` to `"pt"` · `PtBr` to `"pt-BR"` · `PtPt` to `"pt-PT"` · `Ro` to `"ro"` · `Ru` to `"ru"` · `Sk` to `"sk"` · `Sl` to `"sl"` · `Sr` to `"sr"` · `Sv` to `"sv"` · `Ta` to `"ta"` · `Te` to `"te"` · `Th` to `"th"` · `Tl` to `"tl"` · `Tr` to `"tr"` · `Uk` to `"uk"` · `Vi` to `"vi"` · `ZhCn` to `"zh-CN"` · `ZhTw` to `"zh-TW"` | `language1Schema` |
| `LocationType` | `Approximate` to `"APPROXIMATE"` · `GeometricCenter` to `"GEOMETRIC_CENTER"` · `RangeInterpolated` to `"RANGE_INTERPOLATED"` · `Rooftop` to `"ROOFTOP"` | `locationTypeSchema` |
| `Maxprice` | `_0` to `"0"` · `_1` to `"1"` · `_2` to `"2"` · `_3` to `"3"` · `_4` to `"4"` | `maxpriceSchema` |
| `Maxprice1` | `_0` to `"0"` · `_1` to `"1"` · `_2` to `"2"` · `_3` to `"3"` · `_4` to `"4"` | `maxprice1Schema` |
| `Minprice` | `_0` to `"0"` · `_1` to `"1"` · `_2` to `"2"` · `_3` to `"3"` · `_4` to `"4"` | `minpriceSchema` |
| `Minprice1` | `_0` to `"0"` · `_1` to `"1"` · `_2` to `"2"` · `_3` to `"3"` · `_4` to `"4"` | `minprice1Schema` |
| `Mode` | `Driving` to `"driving"` · `Bicycling` to `"bicycling"` · `Transit` to `"transit"` · `Walking` to `"walking"` | `modeSchema` |
| `Mode1` | `Driving` to `"driving"` · `Bicycling` to `"bicycling"` · `Transit` to `"transit"` · `Walking` to `"walking"` | `mode1Schema` |
| `Rankby` | `Prominence` to `"prominence"` · `Distance` to `"distance"` | `rankbySchema` |
| `Rankby1` | `Prominence` to `"prominence"` · `Distance` to `"distance"` | `rankby1Schema` |
| `Region` | `Ac` to `"ac"` · `Ad` to `"ad"` · `Ae` to `"ae"` · `Af` to `"af"` · `Ag` to `"ag"` · `Ai` to `"ai"` · `Al` to `"al"` · `Am` to `"am"` · `An` to `"an"` · `Ao` to `"ao"` · `Aq` to `"aq"` · `Ar` to `"ar"` · `As` to `"as"` · `At` to `"at"` · `Au` to `"au"` · `Aw` to `"aw"` · `Ax` to `"ax"` · `Az` to `"az"` · `Ba` to `"ba"` · `Bb` to `"bb"` · `Bd` to `"bd"` · `Be` to `"be"` · `Bf` to `"bf"` · `Bg` to `"bg"` · `Bh` to `"bh"` · `Bi` to `"bi"` · `Bj` to `"bj"` · `Bl` to `"bl"` · `Bm` to `"bm"` · `Bn` to `"bn"` · `Bo` to `"bo"` · `Bq` to `"bq"` · `Br` to `"br"` · `Bs` to `"bs"` · `Bt` to `"bt"` · `Bv` to `"bv"` · `Bw` to `"bw"` · `By` to `"by"` · `Bz` to `"bz"` · `Ca` to `"ca"` · `Cc` to `"cc"` · `Cd` to `"cd"` · `Cf` to `"cf"` · `Cg` to `"cg"` · `Ch` to `"ch"` · `Ci` to `"ci"` · `Ck` to `"ck"` · `Cl` to `"cl"` · `Cm` to `"cm"` · `Cn` to `"cn"` · `Co` to `"co"` · `Cr` to `"cr"` · `Cu` to `"cu"` · `Cv` to `"cv"` · `Cw` to `"cw"` · `Cx` to `"cx"` · `Cy` to `"cy"` · `Cz` to `"cz"` · `De` to `"de"` · `Dj` to `"dj"` · `Dk` to `"dk"` · `Dm` to `"dm"` · `Do` to `"do"` · `Dz` to `"dz"` · `Ec` to `"ec"` · `Ee` to `"ee"` · `Eg` to `"eg"` · `Eh` to `"eh"` · `En` to `"en"` · `Er` to `"er"` · `Es` to `"es"` · `Et` to `"et"` · `Eu` to `"eu"` · `Fi` to `"fi"` · `Fj` to `"fj"` · `Fk` to `"fk"` · `Fm` to `"fm"` · `Fo` to `"fo"` · `Fr` to `"fr"` · `Ga` to `"ga"` · `Gb` to `"gb"` · `Gd` to `"gd"` · `Ge` to `"ge"` · `Gf` to `"gf"` · `Gg` to `"gg"` · `Gh` to `"gh"` · `Gi` to `"gi"` · `Gl` to `"gl"` · `Gm` to `"gm"` · `Gn` to `"gn"` · `Gp` to `"gp"` · `Gq` to `"gq"` · `Gr` to `"gr"` · `Gs` to `"gs"` · `Gt` to `"gt"` · `Gu` to `"gu"` · `Gw` to `"gw"` · `Gy` to `"gy"` · `Hk` to `"hk"` · `Hm` to `"hm"` · `Hn` to `"hn"` · `Hr` to `"hr"` · `Ht` to `"ht"` · `Hu` to `"hu"` · `Id` to `"id"` · `Ie` to `"ie"` · `Il` to `"il"` · `Im` to `"im"` · `In` to `"in"` · `Io` to `"io"` · `Iq` to `"iq"` · `Ir` to `"ir"` · `Is` to `"is"` · `It` to `"it"` · `Je` to `"je"` · `Jm` to `"jm"` · `Jo` to `"jo"` · `Jp` to `"jp"` · `Ke` to `"ke"` · `Kg` to `"kg"` · `Kh` to `"kh"` · `Ki` to `"ki"` · `Km` to `"km"` · `Kn` to `"kn"` · `Kp` to `"kp"` · `Kr` to `"kr"` · `Kw` to `"kw"` · `Ky` to `"ky"` · `Kz` to `"kz"` · `La` to `"la"` · `Lb` to `"lb"` · `Lc` to `"lc"` · `Li` to `"li"` · `Lk` to `"lk"` · `Lr` to `"lr"` · `Ls` to `"ls"` · `Lt` to `"lt"` · `Lu` to `"lu"` · `Lv` to `"lv"` · `Ly` to `"ly"` · `Ma` to `"ma"` · `Mc` to `"mc"` · `Md` to `"md"` · `Me` to `"me"` · `Mf` to `"mf"` · `Mg` to `"mg"` · `Mh` to `"mh"` · `Mk` to `"mk"` · `Ml` to `"ml"` · `Mm` to `"mm"` · `Mn` to `"mn"` · `Mo` to `"mo"` · `Mp` to `"mp"` · `Mq` to `"mq"` · `Mr` to `"mr"` · `Ms` to `"ms"` · `Mt` to `"mt"` · `Mu` to `"mu"` · `Mv` to `"mv"` · `Mw` to `"mw"` · `Mx` to `"mx"` · `My` to `"my"` · `Mz` to `"mz"` · `Na` to `"na"` · `Nc` to `"nc"` · `Ne` to `"ne"` · `Nf` to `"nf"` · `Ng` to `"ng"` · `Ni` to `"ni"` · `Nl` to `"nl"` · `No` to `"no"` · `Np` to `"np"` · `Nr` to `"nr"` · `Nu` to `"nu"` · `Nz` to `"nz"` · `Om` to `"om"` · `Pa` to `"pa"` · `Pe` to `"pe"` · `Pf` to `"pf"` · `Pg` to `"pg"` · `Ph` to `"ph"` · `Pk` to `"pk"` · `Pl` to `"pl"` · `Pm` to `"pm"` · `Pn` to `"pn"` · `Pr` to `"pr"` · `Ps` to `"ps"` · `Pt` to `"pt"` · `Pw` to `"pw"` · `Py` to `"py"` · `Qa` to `"qa"` · `Re` to `"re"` · `Ro` to `"ro"` · `Rs` to `"rs"` · `Ru` to `"ru"` · `Rw` to `"rw"` · `Sa` to `"sa"` · `Sb` to `"sb"` · `Sc` to `"sc"` · `Sd` to `"sd"` · `Se` to `"se"` · `Sg` to `"sg"` · `Sh` to `"sh"` · `Si` to `"si"` · `Sj` to `"sj"` · `Sk` to `"sk"` · `Sl` to `"sl"` · `Sm` to `"sm"` · `Sn` to `"sn"` · `So` to `"so"` · `Sr` to `"sr"` · `Ss` to `"ss"` · `St` to `"st"` · `Su` to `"su"` · `Sv` to `"sv"` · `Sx` to `"sx"` · `Sy` to `"sy"` · `Sz` to `"sz"` · `Tc` to `"tc"` · `Td` to `"td"` · `Tf` to `"tf"` · `Tg` to `"tg"` · `Th` to `"th"` · `Tj` to `"tj"` · `Tk` to `"tk"` · `Tl` to `"tl"` · `Tm` to `"tm"` · `Tn` to `"tn"` · `To` to `"to"` · `Tp` to `"tp"` · `Tr` to `"tr"` · `Tt` to `"tt"` · `Tv` to `"tv"` · `Tw` to `"tw"` · `Tz` to `"tz"` · `Ua` to `"ua"` · `Ug` to `"ug"` · `Uk` to `"uk"` · `Um` to `"um"` · `Us` to `"us"` · `Uy` to `"uy"` · `Uz` to `"uz"` · `Va` to `"va"` · `Vc` to `"vc"` · `Ve` to `"ve"` · `Vg` to `"vg"` · `Vi` to `"vi"` · `Vn` to `"vn"` · `Vu` to `"vu"` · `Wf` to `"wf"` · `Ws` to `"ws"` · `Ye` to `"ye"` · `Yt` to `"yt"` · `Za` to `"za"` · `Zm` to `"zm"` · `Zw` to `"zw"` | `regionSchema` |
| `Region1` | `Ac` to `"ac"` · `Ad` to `"ad"` · `Ae` to `"ae"` · `Af` to `"af"` · `Ag` to `"ag"` · `Ai` to `"ai"` · `Al` to `"al"` · `Am` to `"am"` · `An` to `"an"` · `Ao` to `"ao"` · `Aq` to `"aq"` · `Ar` to `"ar"` · `As` to `"as"` · `At` to `"at"` · `Au` to `"au"` · `Aw` to `"aw"` · `Ax` to `"ax"` · `Az` to `"az"` · `Ba` to `"ba"` · `Bb` to `"bb"` · `Bd` to `"bd"` · `Be` to `"be"` · `Bf` to `"bf"` · `Bg` to `"bg"` · `Bh` to `"bh"` · `Bi` to `"bi"` · `Bj` to `"bj"` · `Bl` to `"bl"` · `Bm` to `"bm"` · `Bn` to `"bn"` · `Bo` to `"bo"` · `Bq` to `"bq"` · `Br` to `"br"` · `Bs` to `"bs"` · `Bt` to `"bt"` · `Bv` to `"bv"` · `Bw` to `"bw"` · `By` to `"by"` · `Bz` to `"bz"` · `Ca` to `"ca"` · `Cc` to `"cc"` · `Cd` to `"cd"` · `Cf` to `"cf"` · `Cg` to `"cg"` · `Ch` to `"ch"` · `Ci` to `"ci"` · `Ck` to `"ck"` · `Cl` to `"cl"` · `Cm` to `"cm"` · `Cn` to `"cn"` · `Co` to `"co"` · `Cr` to `"cr"` · `Cu` to `"cu"` · `Cv` to `"cv"` · `Cw` to `"cw"` · `Cx` to `"cx"` · `Cy` to `"cy"` · `Cz` to `"cz"` · `De` to `"de"` · `Dj` to `"dj"` · `Dk` to `"dk"` · `Dm` to `"dm"` · `Do` to `"do"` · `Dz` to `"dz"` · `Ec` to `"ec"` · `Ee` to `"ee"` · `Eg` to `"eg"` · `Eh` to `"eh"` · `En` to `"en"` · `Er` to `"er"` · `Es` to `"es"` · `Et` to `"et"` · `Eu` to `"eu"` · `Fi` to `"fi"` · `Fj` to `"fj"` · `Fk` to `"fk"` · `Fm` to `"fm"` · `Fo` to `"fo"` · `Fr` to `"fr"` · `Ga` to `"ga"` · `Gb` to `"gb"` · `Gd` to `"gd"` · `Ge` to `"ge"` · `Gf` to `"gf"` · `Gg` to `"gg"` · `Gh` to `"gh"` · `Gi` to `"gi"` · `Gl` to `"gl"` · `Gm` to `"gm"` · `Gn` to `"gn"` · `Gp` to `"gp"` · `Gq` to `"gq"` · `Gr` to `"gr"` · `Gs` to `"gs"` · `Gt` to `"gt"` · `Gu` to `"gu"` · `Gw` to `"gw"` · `Gy` to `"gy"` · `Hk` to `"hk"` · `Hm` to `"hm"` · `Hn` to `"hn"` · `Hr` to `"hr"` · `Ht` to `"ht"` · `Hu` to `"hu"` · `Id` to `"id"` · `Ie` to `"ie"` · `Il` to `"il"` · `Im` to `"im"` · `In` to `"in"` · `Io` to `"io"` · `Iq` to `"iq"` · `Ir` to `"ir"` · `Is` to `"is"` · `It` to `"it"` · `Je` to `"je"` · `Jm` to `"jm"` · `Jo` to `"jo"` · `Jp` to `"jp"` · `Ke` to `"ke"` · `Kg` to `"kg"` · `Kh` to `"kh"` · `Ki` to `"ki"` · `Km` to `"km"` · `Kn` to `"kn"` · `Kp` to `"kp"` · `Kr` to `"kr"` · `Kw` to `"kw"` · `Ky` to `"ky"` · `Kz` to `"kz"` · `La` to `"la"` · `Lb` to `"lb"` · `Lc` to `"lc"` · `Li` to `"li"` · `Lk` to `"lk"` · `Lr` to `"lr"` · `Ls` to `"ls"` · `Lt` to `"lt"` · `Lu` to `"lu"` · `Lv` to `"lv"` · `Ly` to `"ly"` · `Ma` to `"ma"` · `Mc` to `"mc"` · `Md` to `"md"` · `Me` to `"me"` · `Mf` to `"mf"` · `Mg` to `"mg"` · `Mh` to `"mh"` · `Mk` to `"mk"` · `Ml` to `"ml"` · `Mm` to `"mm"` · `Mn` to `"mn"` · `Mo` to `"mo"` · `Mp` to `"mp"` · `Mq` to `"mq"` · `Mr` to `"mr"` · `Ms` to `"ms"` · `Mt` to `"mt"` · `Mu` to `"mu"` · `Mv` to `"mv"` · `Mw` to `"mw"` · `Mx` to `"mx"` · `My` to `"my"` · `Mz` to `"mz"` · `Na` to `"na"` · `Nc` to `"nc"` · `Ne` to `"ne"` · `Nf` to `"nf"` · `Ng` to `"ng"` · `Ni` to `"ni"` · `Nl` to `"nl"` · `No` to `"no"` · `Np` to `"np"` · `Nr` to `"nr"` · `Nu` to `"nu"` · `Nz` to `"nz"` · `Om` to `"om"` · `Pa` to `"pa"` · `Pe` to `"pe"` · `Pf` to `"pf"` · `Pg` to `"pg"` · `Ph` to `"ph"` · `Pk` to `"pk"` · `Pl` to `"pl"` · `Pm` to `"pm"` · `Pn` to `"pn"` · `Pr` to `"pr"` · `Ps` to `"ps"` · `Pt` to `"pt"` · `Pw` to `"pw"` · `Py` to `"py"` · `Qa` to `"qa"` · `Re` to `"re"` · `Ro` to `"ro"` · `Rs` to `"rs"` · `Ru` to `"ru"` · `Rw` to `"rw"` · `Sa` to `"sa"` · `Sb` to `"sb"` · `Sc` to `"sc"` · `Sd` to `"sd"` · `Se` to `"se"` · `Sg` to `"sg"` · `Sh` to `"sh"` · `Si` to `"si"` · `Sj` to `"sj"` · `Sk` to `"sk"` · `Sl` to `"sl"` · `Sm` to `"sm"` · `Sn` to `"sn"` · `So` to `"so"` · `Sr` to `"sr"` · `Ss` to `"ss"` · `St` to `"st"` · `Su` to `"su"` · `Sv` to `"sv"` · `Sx` to `"sx"` · `Sy` to `"sy"` · `Sz` to `"sz"` · `Tc` to `"tc"` · `Td` to `"td"` · `Tf` to `"tf"` · `Tg` to `"tg"` · `Th` to `"th"` · `Tj` to `"tj"` · `Tk` to `"tk"` · `Tl` to `"tl"` · `Tm` to `"tm"` · `Tn` to `"tn"` · `To` to `"to"` · `Tp` to `"tp"` · `Tr` to `"tr"` · `Tt` to `"tt"` · `Tv` to `"tv"` · `Tw` to `"tw"` · `Tz` to `"tz"` · `Ua` to `"ua"` · `Ug` to `"ug"` · `Uk` to `"uk"` · `Um` to `"um"` · `Us` to `"us"` · `Uy` to `"uy"` · `Uz` to `"uz"` · `Va` to `"va"` · `Vc` to `"vc"` · `Ve` to `"ve"` · `Vg` to `"vg"` · `Vi` to `"vi"` · `Vn` to `"vn"` · `Vu` to `"vu"` · `Wf` to `"wf"` · `Ws` to `"ws"` · `Ye` to `"ye"` · `Yt` to `"yt"` · `Za` to `"za"` · `Zm` to `"zm"` · `Zw` to `"zw"` | `region1Schema` |
| `ResultType` | `AdministrativeAreaLevel1` to `"administrative_area_level_1"` · `AdministrativeAreaLevel2` to `"administrative_area_level_2"` · `AdministrativeAreaLevel3` to `"administrative_area_level_3"` · `AdministrativeAreaLevel4` to `"administrative_area_level_4"` · `AdministrativeAreaLevel5` to `"administrative_area_level_5"` · `Airport` to `"airport"` · `ColloquialArea` to `"colloquial_area"` · `Country` to `"country"` · `Intersection` to `"intersection"` · `Locality` to `"locality"` · `NaturalFeature` to `"natural_feature"` · `Neighborhood` to `"neighborhood"` · `Park` to `"park"` · `PlusCode` to `"plus_code"` · `Political` to `"political"` · `PostalCode` to `"postal_code"` · `Premise` to `"premise"` · `Route` to `"route"` · `StreetAddress` to `"street_address"` · `Sublocality` to `"sublocality"` · `Subpremise` to `"subpremise"` | `resultTypeSchema` |
| `Source` | `Default` to `"default"` · `Outdoor` to `"outdoor"` | `sourceSchema` |
| `Source1` | `Default` to `"default"` · `Outdoor` to `"outdoor"` | `source1Schema` |
| `TrafficModel` | `BestGuess` to `"best_guess"` · `Pessimistic` to `"pessimistic"` · `Optimistic` to `"optimistic"` | `trafficModelSchema` |
| `TrafficModel1` | `BestGuess` to `"best_guess"` · `Pessimistic` to `"pessimistic"` · `Optimistic` to `"optimistic"` | `trafficModel1Schema` |
| `TransitRoutingPreference` | `LessWalking` to `"less_walking"` · `FewerTransfers` to `"fewer_transfers"` | `transitRoutingPreferenceSchema` |
| `TransitRoutingPreference1` | `LessWalking` to `"less_walking"` · `FewerTransfers` to `"fewer_transfers"` | `transitRoutingPreference1Schema` |
| `Units` | `Imperial` to `"imperial"` · `Metric` to `"metric"` | `unitsSchema` |
| `Units1` | `Imperial` to `"imperial"` · `Metric` to `"metric"` | `units1Schema` |
| `Units2` | `Imperial` to `"imperial"` · `Metric` to `"metric"` | `units2Schema` |

**Wire-name divergences.** Only these model properties are sent and received under a different name; every other property uses its TypeScript name verbatim.

| Type | Property | Wire key |
| --- | --- | --- |
| `AddressComponent` | `longName` | `long_name` |
| `AddressComponent` | `shortName` | `short_name` |
| `ArrivalTime` | `timeZone` | `time_zone` |
| `CurrentOpeningHours` | `openNow` | `open_now` |
| `CurrentOpeningHours` | `specialDays` | `special_days` |
| `CurrentOpeningHours` | `weekdayText` | `weekday_text` |
| `DepartureTime` | `timeZone` | `time_zone` |
| `DirectionsGeocodedWaypoint` | `geocoderStatus` | `geocoder_status` |
| `DirectionsGeocodedWaypoint` | `partialMatch` | `partial_match` |
| `DirectionsGeocodedWaypoint` | `placeId` | `place_id` |
| `DirectionsGeocodedWaypoint` | `areaType` | `area_type` |
| `DirectionsLeg` | `arrivalTime` | `arrival_time` |
| `DirectionsLeg` | `departureTime` | `departure_time` |
| `DirectionsLeg` | `durationInTraffic` | `duration_in_traffic` |
| `DirectionsLeg` | `endAddress` | `end_address` |
| `DirectionsLeg` | `endLocation` | `end_location` |
| `DirectionsLeg` | `startAddress` | `start_address` |
| `DirectionsLeg` | `startLocation` | `start_location` |
| `DirectionsLeg` | `trafficSpeedEntry` | `traffic_speed_entry` |
| `DirectionsLeg` | `viaWaypoint` | `via_waypoint` |
| `DirectionsResponse` | `geocodedWaypoints` | `geocoded_waypoints` |
| `DirectionsResponse` | `availableTravelModes` | `available_travel_modes` |
| `DirectionsResponse` | `errorMessage` | `error_message` |
| `DirectionsRoute` | `waypointOrder` | `waypoint_order` |
| `DirectionsRoute` | `overviewPolyline` | `overview_polyline` |
| `DirectionsStep` | `endLocation` | `end_location` |
| `DirectionsStep` | `htmlInstructions` | `html_instructions` |
| `DirectionsStep` | `startLocation` | `start_location` |
| `DirectionsStep` | `transitDetails` | `transit_details` |
| `DirectionsStep` | `travelMode` | `travel_mode` |
| `DirectionsTrafficSpeedEntry` | `speedCategory` | `speed_category` |
| `DirectionsTrafficSpeedEntry` | `offsetMeters` | `offset_meters` |
| `DirectionsTransitDetails` | `arrivalStop` | `arrival_stop` |
| `DirectionsTransitDetails` | `arrivalTime` | `arrival_time` |
| `DirectionsTransitDetails` | `departureStop` | `departure_stop` |
| `DirectionsTransitDetails` | `departureTime` | `departure_time` |
| `DirectionsTransitDetails` | `numStops` | `num_stops` |
| `DirectionsTransitDetails` | `tripShortName` | `trip_short_name` |
| `DirectionsTransitLine` | `shortName` | `short_name` |
| `DirectionsTransitLine` | `textColor` | `text_color` |
| `DirectionsTransitVehicle` | `localIcon` | `local_icon` |
| `DirectionsTransitVehicle` | `vehicleType` | `vehicle_type` |
| `DirectionsViaWaypoint` | `stepIndex` | `step_index` |
| `DirectionsViaWaypoint` | `stepInterpolation` | `step_interpolation` |
| `DistanceMatrixElement` | `durationInTraffic` | `duration_in_traffic` |
| `DistanceMatrixResponse` | `originAddresses` | `origin_addresses` |
| `DistanceMatrixResponse` | `destinationAddresses` | `destination_addresses` |
| `DistanceMatrixResponse` | `errorMessage` | `error_message` |
| `ElevationResponse` | `errorMessage` | `error_message` |
| `ErrorDetail` | `type` | `@type` |
| `GeocodingResponse` | `plusCode` | `plus_code` |
| `GeocodingResponse` | `errorMessage` | `error_message` |
| `GeocodingResult` | `addressComponents` | `address_components` |
| `GeocodingResult` | `formattedAddress` | `formatted_address` |
| `GeocodingResult` | `placeId` | `place_id` |
| `GeocodingResult` | `plusCode` | `plus_code` |
| `GeocodingResult` | `postcodeLocalities` | `postcode_localities` |
| `GeocodingResult` | `partialMatch` | `partial_match` |
| `MapsApiElevationJsonResponse` | `errorMessage` | `error_message` |
| `OpeningHours` | `openNow` | `open_now` |
| `OpeningHours` | `specialDays` | `special_days` |
| `OpeningHours` | `weekdayText` | `weekday_text` |
| `Place` | `addressComponents` | `address_components` |
| `Place` | `adrAddress` | `adr_address` |
| `Place` | `businessStatus` | `business_status` |
| `Place` | `curbsidePickup` | `curbside_pickup` |
| `Place` | `currentOpeningHours` | `current_opening_hours` |
| `Place` | `dineIn` | `dine_in` |
| `Place` | `editorialSummary` | `editorial_summary` |
| `Place` | `formattedAddress` | `formatted_address` |
| `Place` | `formattedPhoneNumber` | `formatted_phone_number` |
| `Place` | `iconBackgroundColor` | `icon_background_color` |
| `Place` | `iconMaskBaseUri` | `icon_mask_base_uri` |
| `Place` | `internationalPhoneNumber` | `international_phone_number` |
| `Place` | `openingHours` | `opening_hours` |
| `Place` | `permanentlyClosed` | `permanently_closed` |
| `Place` | `placeId` | `place_id` |
| `Place` | `plusCode` | `plus_code` |
| `Place` | `priceLevel` | `price_level` |
| `Place` | `servesBeer` | `serves_beer` |
| `Place` | `servesBreakfast` | `serves_breakfast` |
| `Place` | `servesBrunch` | `serves_brunch` |
| `Place` | `servesDinner` | `serves_dinner` |
| `Place` | `servesLunch` | `serves_lunch` |
| `Place` | `servesVegetarianFood` | `serves_vegetarian_food` |
| `Place` | `servesWine` | `serves_wine` |
| `Place` | `secondaryOpeningHours` | `secondary_opening_hours` |
| `Place` | `userRatingsTotal` | `user_ratings_total` |
| `Place` | `utcOffset` | `utc_offset` |
| `Place` | `wheelchairAccessibleEntrance` | `wheelchair_accessible_entrance` |
| `PlaceAutocompletePrediction` | `matchedSubstrings` | `matched_substrings` |
| `PlaceAutocompletePrediction` | `placeId` | `place_id` |
| `PlaceAutocompletePrediction` | `structuredFormatting` | `structured_formatting` |
| `PlaceAutocompletePrediction` | `distanceMeters` | `distance_meters` |
| `PlaceAutocompleteStructuredFormat` | `mainText` | `main_text` |
| `PlaceAutocompleteStructuredFormat` | `mainTextMatchedSubstrings` | `main_text_matched_substrings` |
| `PlaceAutocompleteStructuredFormat` | `secondaryText` | `secondary_text` |
| `PlaceAutocompleteStructuredFormat` | `secondaryTextMatchedSubstrings` | `secondary_text_matched_substrings` |
| `PlaceOpeningHours` | `openNow` | `open_now` |
| `PlaceOpeningHours` | `specialDays` | `special_days` |
| `PlaceOpeningHours` | `weekdayText` | `weekday_text` |
| `PlacePhoto` | `htmlAttributions` | `html_attributions` |
| `PlacePhoto` | `photoReference` | `photo_reference` |
| `PlaceReview` | `authorName` | `author_name` |
| `PlaceReview` | `authorUrl` | `author_url` |
| `PlaceReview` | `profilePhotoUrl` | `profile_photo_url` |
| `PlaceReview` | `originalLanguage` | `original_language` |
| `PlaceReview` | `relativeTimeDescription` | `relative_time_description` |
| `PlaceSpecialDay` | `exceptionalHours` | `exceptional_hours` |
| `PlacesAutocompleteResponse` | `errorMessage` | `error_message` |
| `PlacesAutocompleteResponse` | `infoMessages` | `info_messages` |
| `PlacesDetailsResponse` | `htmlAttributions` | `html_attributions` |
| `PlacesDetailsResponse` | `infoMessages` | `info_messages` |
| `PlacesFindPlaceFromTextResponse` | `errorMessage` | `error_message` |
| `PlacesFindPlaceFromTextResponse` | `infoMessages` | `info_messages` |
| `PlacesNearbySearchResponse` | `htmlAttributions` | `html_attributions` |
| `PlacesNearbySearchResponse` | `errorMessage` | `error_message` |
| `PlacesNearbySearchResponse` | `infoMessages` | `info_messages` |
| `PlacesNearbySearchResponse` | `nextPageToken` | `next_page_token` |
| `PlacesQueryAutocompleteResponse` | `errorMessage` | `error_message` |
| `PlacesQueryAutocompleteResponse` | `infoMessages` | `info_messages` |
| `PlacesTextSearchResponse` | `htmlAttributions` | `html_attributions` |
| `PlacesTextSearchResponse` | `errorMessage` | `error_message` |
| `PlacesTextSearchResponse` | `infoMessages` | `info_messages` |
| `PlacesTextSearchResponse` | `nextPageToken` | `next_page_token` |
| `PlusCode` | `compoundCode` | `compound_code` |
| `PlusCode` | `globalCode` | `global_code` |
| `PlusCode1` | `compoundCode` | `compound_code` |
| `PlusCode1` | `globalCode` | `global_code` |
| `Result2` | `addressComponents` | `address_components` |
| `Result2` | `adrAddress` | `adr_address` |
| `Result2` | `businessStatus` | `business_status` |
| `Result2` | `curbsidePickup` | `curbside_pickup` |
| `Result2` | `currentOpeningHours` | `current_opening_hours` |
| `Result2` | `dineIn` | `dine_in` |
| `Result2` | `editorialSummary` | `editorial_summary` |
| `Result2` | `formattedAddress` | `formatted_address` |
| `Result2` | `formattedPhoneNumber` | `formatted_phone_number` |
| `Result2` | `iconBackgroundColor` | `icon_background_color` |
| `Result2` | `iconMaskBaseUri` | `icon_mask_base_uri` |
| `Result2` | `internationalPhoneNumber` | `international_phone_number` |
| `Result2` | `openingHours` | `opening_hours` |
| `Result2` | `permanentlyClosed` | `permanently_closed` |
| `Result2` | `placeId` | `place_id` |
| `Result2` | `plusCode` | `plus_code` |
| `Result2` | `priceLevel` | `price_level` |
| `Result2` | `servesBeer` | `serves_beer` |
| `Result2` | `servesBreakfast` | `serves_breakfast` |
| `Result2` | `servesBrunch` | `serves_brunch` |
| `Result2` | `servesDinner` | `serves_dinner` |
| `Result2` | `servesLunch` | `serves_lunch` |
| `Result2` | `servesVegetarianFood` | `serves_vegetarian_food` |
| `Result2` | `servesWine` | `serves_wine` |
| `Result2` | `secondaryOpeningHours` | `secondary_opening_hours` |
| `Result2` | `userRatingsTotal` | `user_ratings_total` |
| `Result2` | `utcOffset` | `utc_offset` |
| `Result2` | `wheelchairAccessibleEntrance` | `wheelchair_accessible_entrance` |
| `StreetViewResponse` | `panoId` | `pano_id` |
| `TimeZoneTextValueObject` | `timeZone` | `time_zone` |
| `TransitDetails` | `arrivalStop` | `arrival_stop` |
| `TransitDetails` | `arrivalTime` | `arrival_time` |
| `TransitDetails` | `departureStop` | `departure_stop` |
| `TransitDetails` | `departureTime` | `departure_time` |
| `TransitDetails` | `numStops` | `num_stops` |
| `TransitDetails` | `tripShortName` | `trip_short_name` |

---

## Servers & auth

**Authentication is per operation.** Every operation declares the requirement it enforces and the SDK sends exactly that: **17 of the 17 operations** require a credential and **0** are public. Each block on a page above carries an **Auth** bullet naming its requirement, `none` included. There is no client-global switch and no per-call override.

| Scheme (as an **Auth** bullet names it) | Configured with | What the SDK sends |
| --- | --- | --- |
| `apiKeyAuth` | `apiKeyAuth` | query `key=<key>` |

A scheme **contributes** headers, query parameters and cookies rather than mutating the request, so a credential is encoded by exactly the code that encodes an operation's own parameters. The auth layer goes on **last**, which means a scheme's `Authorization` wins over one the operation declared.

**Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives the SDK sends the **first configured** one, in the order the **Auth** bullet prints them. The combinators that express this (`allAuth`, `anyAuth`, `noneAuth`) live in the generated resource modules and are **not exported**.

**A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent, and a function is treated as present without being invoked.

**An unconfigured scheme does not throw.** The request goes out without that credential and the server decides. So a 401 on a call you believed was authenticated is usually an unset credential field rather than an SDK failure — check the operation's **Auth** bullet against what the client was given.

**A 401 invalidates, it does not retry.** On a **401** — 401 only, not 403 — the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires. The current request still rejects with the operation's `ResponseError`. There is no retry loop on this SDK, and the credential fields are on `ClientOptions`.

**Environments.** `ClientOptions.serverEnvironment` selects one for the whole client (source: `src/servers.ts`). `ServerEnvironment` is a `const` object with a derived union type, not a TypeScript `enum` — and unlike the model enums it is **closed**, so only the values below are assignable.

| `ServerEnvironment` member | Value |
| --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` |
| `ServerEnvironment.Environment2` | `environment2` |
| `ServerEnvironment.Environment3` | `environment3` |

**Server groups.** 1 logical server; each operation is bound to one at generation time, and a block carries a **Server** bullet only when its group is not `default`.

| Group | Options type |
| --- | --- |
| `default` | `DefaultServerOptions` |

**Base URLs and overrides.** One row per group-and-environment pair, so the table stays four columns wide however many environments a spec declares. Every cell is overridden at `serverOptions.<group>.<environment>.<name>`, where `<name>` is `baseUrl` for the whole template or the variable name for one substitution. An override merges with the built-in defaults **per pair, key by key**.

| Group | Environment | Base URL template | Template variables (default) |
| --- | --- | --- | --- |
| `default` | `production` | `https://www.googleapis.com` | — |
| `default` | `environment2` | `https://maps.googleapis.com` | — |
| `default` | `environment3` | `https://roads.googleapis.com` | — |

A `baseUrl` override replaces the template verbatim; variable values are percent-encoded into it, and templates are expanded per request rather than once at construction. An environment value the SDK does not know throws `SdkError` when a server is resolved — at the first call, not at construction. It is the one failure on this surface that throws **synchronously** out of the operation method, so a `try`/`await` catches it but `.asApiResult()` and `.catch()` never see it.

---

## Runtime & packaging

The facts that change what you type, and the floors that decide whether the package loads at all. This section is the home for all of them.

|  |  |
| --- | --- |
| One entry, two dialects | `import` resolves `dist/esm`, `require` resolves `dist/commonjs`, both through the single `.` export. In a TypeScript CommonJS file the typed spelling is `import sdk = require("google-maps-platform")`; a plain `require` destructure works at run time but yields no types. `instanceof` is reliable **within** one dialect — if your app loads both, the two copies declare separate error classes |
| Consumer compiler settings | Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional rather than assigning `undefined` to it. Under `verbatimModuleSyntax`, names that carry no runtime value (the options types, every model type) must be imported with `import type` |
| Required globals, and only these | Always: `fetch` (or a replacement passed as the `fetch` option), `AbortController`, `Headers`, `URL`, `setTimeout` and `clearTimeout`, `JSON`, `BigInt`. Nothing else — no credential this SDK sends reaches for a further global. |
| Values that cross the boundary | `Date` for `date-time`, `string` for `date`, `ArrayBuffer` for an undeclared error body, `Headers` on a result and on a thrown `ResponseError`. The engine also carries a `bigint` int64 path and a base64 `bytes()` codec, reached only where a model uses them |
| Browser distribution | The package ships `dist/esm` and `dist/commonjs` and nothing else — **no bundle, no UMD file, no CDN artifact**. Use it through a bundler, which resolves `zod/v4-mini`, deduplicates it against your own copy and tree-shakes the rest |
| Other runtimes | Deno, Bun, Cloudflare Workers and Vercel Edge are all likely to work — the SDK needs only the globals above and imports no Node built-in — but **none of them is tested for this package**, so nothing here claims support for them |

The browser floor comes from the emitted output rather than the sources: `tshy` builds at `target: ES2022`, so native `#private` fields and methods survive into `dist/`.

| Browser | Minimum | Set by |
| --- | --- | --- |
| Chrome / Edge | **85** | `String.prototype.replaceAll`, logical assignment (`??=`) |
| Firefox | **90** | private class fields and methods |
| Safari / iOS Safari | **15** | private class **methods** |

That table is the **module-load** floor: below it the SDK fails while the module is evaluating, not at the first call. Two things degrade quietly above it. `{ cause }` on the `Error` constructor needs Chrome 93, Firefox 91 or Safari 15, so below that `err.cause` is `undefined`. More consequentially, **cancellation needs `AbortController.abort(reason)` and `AbortSignal.reason`**, which arrived in Chrome 98, Firefox 97 and Safari 15.4 — between the module-load floor and those versions the engine still aborts the request but produces no typed error at all.


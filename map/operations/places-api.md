<!-- Generated file — do not edit; regenerated with the SDK. -->

# PlacesApi — operations

Accessor: `client.placesApi` · Source: `src/resources/places-api.ts` · 7 operations · Request types: namespace `PlacesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-maps-platform`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### autocomplete

- **Signature**: `autocomplete(request: PlacesApi.AutocompleteRequest, options?: RequestOptions): ApiPromise<PlacesAutocompleteResponse, ResponseError>`
- **Wire**: `GET /maps/api/place/autocomplete/json`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlacesAutocompleteResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PlacesApi.AutocompleteRequest` (13):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `input` | `query` | `string` | yes |
| `radius` | `query` | `number` | yes |
| `sessiontoken` | `query` | `string` | no |
| `components` | `query` | `string` | no |
| `strictbounds` | `query` | `boolean` | no |
| `offset` | `query` | `number` | no |
| `origin` | `query` | `string` | no |
| `location` | `query` | `string` | no |
| `locationbias` | `query` | `string` | no |
| `locationrestriction` | `query` | `string` | no |
| `types` | `query` | `string` | no |
| `language` | `query` | `Language1` | no |
| `region` | `query` | `Region1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Language1` | `language1Schema` | `src/models/language1.ts` |
| `Region1` | `region1Schema` | `src/models/region1.ts` |
| `PlacesAutocompleteResponse` | `placesAutocompleteResponseSchema` | `src/models/places-autocomplete-response.ts` |

### findPlaceFromText

- **Signature**: `findPlaceFromText(request: PlacesApi.FindPlaceFromTextRequest, options?: RequestOptions): ApiPromise<PlacesFindPlaceFromTextResponse, ResponseError>`
- **Wire**: `GET /maps/api/place/findplacefromtext/json`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlacesFindPlaceFromTextResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PlacesApi.FindPlaceFromTextRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `input` | `query` | `string` | yes |
| `inputtype` | `query` | `Inputtype1` | yes |
| `fields` | `query` | `string[]` | no |
| `locationbias` | `query` | `string` | no |
| `language` | `query` | `Language1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Inputtype1` | `inputtype1Schema` | `src/models/inputtype1.ts` |
| `Language1` | `language1Schema` | `src/models/language1.ts` |
| `PlacesFindPlaceFromTextResponse` | `placesFindPlaceFromTextResponseSchema` | `src/models/places-find-place-from-text-response.ts` |

### nearbySearch

- **Signature**: `nearbySearch(request: PlacesApi.NearbySearchRequest, options?: RequestOptions): ApiPromise<PlacesTextSearchResponse, ResponseError>`
- **Wire**: `GET /maps/api/place/nearbysearch/json`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlacesTextSearchResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PlacesApi.NearbySearchRequest` (11):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `location` | `query` | `string` | yes |
| `radius` | `query` | `number` | yes |
| `keyword` | `query` | `string` | no |
| `maxprice` | `query` | `Maxprice1` | no |
| `minprice` | `query` | `Minprice1` | no |
| `name` | `query` | `string` | no |
| `opennow` | `query` | `boolean` | no |
| `pagetoken` | `query` | `string` | no |
| `rankby` | `query` | `Rankby1` | no |
| `type` | `query` | `string` | no |
| `language` | `query` | `Language1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Maxprice1` | `maxprice1Schema` | `src/models/maxprice1.ts` |
| `Minprice1` | `minprice1Schema` | `src/models/minprice1.ts` |
| `Rankby1` | `rankby1Schema` | `src/models/rankby1.ts` |
| `Language1` | `language1Schema` | `src/models/language1.ts` |
| `PlacesTextSearchResponse` | `placesTextSearchResponseSchema` | `src/models/places-text-search-response.ts` |

### placeDetails

- **Signature**: `placeDetails(request: PlacesApi.PlaceDetailsRequest, options?: RequestOptions): ApiPromise<PlacesDetailsResponse, ResponseError>`
- **Wire**: `GET /maps/api/place/details/json`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlacesDetailsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PlacesApi.PlaceDetailsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `placeId` | `query` | `place_id` | `string` | yes |
| `fields` | `query` | — | `string[]` | no |
| `sessiontoken` | `query` | — | `string` | no |
| `language` | `query` | — | `Language1` | no |
| `region` | `query` | — | `Region1` | no |
| `reviewsSort` | `query` | `reviews_sort` | `string` | no |
| `reviewsNoTranslations` | `query` | `reviews_no_translations` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Language1` | `language1Schema` | `src/models/language1.ts` |
| `Region1` | `region1Schema` | `src/models/region1.ts` |
| `PlacesDetailsResponse` | `placesDetailsResponseSchema` | `src/models/places-details-response.ts` |

### placePhoto

- **Signature**: `placePhoto(request: PlacesApi.PlacePhotoRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `GET /maps/api/place/photo`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PlacesApi.PlacePhotoRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `photoReference` | `query` | `photo_reference` | `string` | yes |
| `maxheight` | `query` | — | `number` | no |
| `maxwidth` | `query` | — | `number` | no |

### queryAutocomplete

- **Signature**: `queryAutocomplete(request: PlacesApi.QueryAutocompleteRequest, options?: RequestOptions): ApiPromise<PlacesQueryAutocompleteResponse, ResponseError>`
- **Wire**: `GET /maps/api/place/queryautocomplete/json`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlacesQueryAutocompleteResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PlacesApi.QueryAutocompleteRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `input` | `query` | `string` | yes |
| `radius` | `query` | `number` | yes |
| `offset` | `query` | `number` | no |
| `location` | `query` | `string` | no |
| `language` | `query` | `Language1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Language1` | `language1Schema` | `src/models/language1.ts` |
| `PlacesQueryAutocompleteResponse` | `placesQueryAutocompleteResponseSchema` | `src/models/places-query-autocomplete-response.ts` |

### textSearch

- **Signature**: `textSearch(request: PlacesApi.TextSearchRequest, options?: RequestOptions): ApiPromise<PlacesTextSearchResponse, ResponseError>`
- **Wire**: `GET /maps/api/place/textsearch/json`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlacesTextSearchResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PlacesApi.TextSearchRequest` (10):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `query` | `query` | `string` | yes |
| `radius` | `query` | `number` | yes |
| `location` | `query` | `string` | no |
| `maxprice` | `query` | `Maxprice1` | no |
| `minprice` | `query` | `Minprice1` | no |
| `opennow` | `query` | `boolean` | no |
| `pagetoken` | `query` | `string` | no |
| `type` | `query` | `string` | no |
| `language` | `query` | `Language1` | no |
| `region` | `query` | `Region1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Maxprice1` | `maxprice1Schema` | `src/models/maxprice1.ts` |
| `Minprice1` | `minprice1Schema` | `src/models/minprice1.ts` |
| `Language1` | `language1Schema` | `src/models/language1.ts` |
| `Region1` | `region1Schema` | `src/models/region1.ts` |
| `PlacesTextSearchResponse` | `placesTextSearchResponseSchema` | `src/models/places-text-search-response.ts` |


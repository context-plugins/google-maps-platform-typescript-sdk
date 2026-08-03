# Geocoding API

```ts
const geocodingApi = new GeocodingApi(client);
```

## Class Name

`GeocodingApi`


# Geocode

The Geocoding API is a service that provides geocoding and reverse geocoding of addresses.

**Geocoding** is the process of converting addresses (like a street address) into geographic coordinates (like latitude and longitude), which you can use to place markers on a map, or position the map.

**Reverse geocoding** is the process of converting geographic coordinates into a human-readable address.

You can also use the Geocoding API to find the address for a given place ID.

To see countries currently supported by the Google Maps Platform Geocoding API, please consult the [Google Maps coverage data](https://developers.google.com/maps/coverage). The accuracy of geocoded locations may vary per country, so you should consider using the returned `location_type` field to determine if a good enough match has been found for the purposes of your application. Please note that the availability of geocoding data depends on our contracts with data providers, so it is subject to change.

```ts
async geocode(
  address?: string,
  bounds?: string[],
  components?: string[],
  latlng?: string,
  locationType?: LocationType[],
  placeId?: string,
  resultType?: ResultType[],
  language?: Language1,
  region?: Region1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GeocodingResponse>>
```

## Authentication

This endpoint requires [ApiKeyAuth](../../doc/auth/custom-query-parameter.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | `string \| undefined` | Query, Optional | The street address or plus code that you want to geocode. Specify addresses in accordance with the format used by the national postal service of the country concerned. Additional address elements such as business names and unit, suite or floor numbers should be avoided. Street address elements should be delimited by spaces (shown here as url-escaped to `%20`):<br><br>```<br>address=24%20Sussex%20Drive%20Ottawa%20ON<br>```<br><br>Format plus codes as shown here (plus signs are url-escaped to `%2B` and spaces are url-escaped to `%20`):<br><br>- global code is a 4 character area code and 6 character or longer local code (`849VCWC8+R9` is `849VCWC8%2BR9`).<br>- compound code is a 6 character or longer local code with an explicit location (`CWC8+R9 Mountain View, CA, USA` is `CWC8%2BR9%20Mountain%20View%20CA%20USA`).<br><br><div class="note">Note: At least one of `address` or `components` is required.</div><br> |
| `bounds` | `string[] \| undefined` | Query, Optional | The bounding box of the viewport within which to bias geocode results more prominently. This parameter will only influence, not fully restrict, results from the geocoder. |
| `components` | `string[] \| undefined` | Query, Optional | A components filter with elements separated by a pipe (\|). The components filter is also accepted as an optional parameter if an address is provided. Each element in the components filter consists of a `component:value` pair, and fully restricts the results from the geocoder.<br><br>The components that can be filtered include:<br><br>* `postal_code` matches `postal_code` and `postal_code_prefix`.<br>* `country` matches a country name or a two letter ISO 3166-1 country code. The API follows the ISO standard for defining countries, and the filtering works best when using the corresponding ISO code of the country.<br>  <aside class="note"><strong>Note</strong>: If you receive unexpected results with a country code, verify that you are using a code which includes the countries, dependent territories, and special areas of geographical interest you intend. You can find code information at Wikipedia: List of ISO 3166 country codes or the ISO Online Browsing Platform.</aside><br><br><br>The following components may be used to influence results, but will not be enforced:<br><br>* `route` matches the long or short name of a route.<br>* `locality` matches against `locality` and `sublocality` types.<br>* `administrative_area` matches all the `administrative_area` levels.<br><br>Notes about component filtering:<br><br>* Do not repeat these component filters in requests, or the API will return `INVALID_REQUEST`:<br>  * `country`<br>  * `postal_code`<br>  * `route`<br>* If the request contains repeated component filters, the API evaluates those filters as an AND, not an OR.<br>* Results are consistent with Google Maps, which occasionally yields unexpected `ZERO_RESULTS` responses. Using Place Autocomplete may provide better results in some use cases. To learn more, see [this FAQ](https://developers..google.com/maps/documentation/geocoding/faq#trbl_component_filtering).<br>* For each address component, either specify it in the address parameter or in a components filter, but not both. Specifying the same values in both may result in `ZERO_RESULTS`.<br><br><div class="note">Note: At least one of `address` or `components` is required.</div><br> |
| `latlng` | `string \| undefined` | Query, Optional | The street address that you want to geocode, in the format used by the national postal service of the country concerned. Additional address elements such as business names and unit, suite or floor numbers should be avoided. |
| `locationType` | [`LocationType[] \| undefined`](../../doc/models/location-type.md) | Query, Optional | A filter of one or more location types, separated by a pipe (`\|`). If the parameter contains multiple location types, the API returns all addresses that match any of the types. A note about processing: The `location_type` parameter does not restrict the search to the specified location type(s). Rather, the `location_type` acts as a post-search filter: the API fetches all results for the specified latlng, then discards those results that do not match the specified location type(s). The following values are supported:<br><br>* `APPROXIMATE` returns only the addresses that are characterized as approximate.<br>* `GEOMETRIC_CENTER` returns only geometric centers of a location such as a polyline (for example, a street) or polygon (region).<br>* `RANGE_INTERPOLATED` returns only the addresses that reflect an approximation (usually on a road) interpolated between two precise points (such as intersections). An interpolated range generally indicates that rooftop geocodes are unavailable for a street address.<br>* `ROOFTOP` returns only the addresses for which Google has location information accurate down to street address precision. |
| `placeId` | `string \| undefined` | Query, Optional | A textual identifier that uniquely identifies a place, returned from a [Place Search](https://developers.google.com/maps/documentation/places/web-service/search).<br>For more information about place IDs, see the [place ID overview](https://developers.google.com/maps/documentation/places/web-service/place-id). |
| `resultType` | [`ResultType[] \| undefined`](../../doc/models/result-type.md) | Query, Optional | A filter of one or more address types, separated by a pipe (\|). If the parameter contains multiple address types, the API returns all addresses that match any of the types. A note about processing: The `result_type` parameter does not restrict the search to the specified address type(s). Rather, the `result_type` acts as a post-search filter: the API fetches all results for the specified `latlng`, then discards those results that do not match the specified address type(s).The following values are supported:<br><br>* `administrative_area_level_1` indicates a first-order civil entity below the country level. Within the United States, these administrative levels are states. Not all nations exhibit these administrative levels. In most cases, administrative_area_level_1   * `short` names will closely match ISO 3166-2 subdivisions and other widely circulated lists; however this is not guaranteed as our geocoding results are based on a variety of signals and location data.<br>* `administrative_area_level_2` indicates a second-order civil entity below the country level. Within the United States, these administrative levels are counties. Not all nations exhibit these administrative levels.<br>* `administrative_area_level_3` indicates a third-order civil entity below the country level. This type indicates a minor civil division. Not all nations exhibit these administrative levels.<br>* `administrative_area_level_4` indicates a fourth-order civil entity below the country level. This type indicates a minor civil division. Not all nations exhibit these administrative levels.<br>* `administrative_area_level_5` indicates a fifth-order civil entity below the country level. This type indicates a minor civil division. Not all nations exhibit these administrative levels.<br>* `airport` indicates an airport.<br>* `colloquial_area` indicates a commonly-used alternative name for the entity.<br>* `country` indicates the national political entity, and is typically the highest order type returned by the Geocoder.<br>* `intersection` indicates a major intersection, usually of two major roads.<br>* `locality` indicates an incorporated city or town political entity.<br>* `natural_feature` indicates a prominent natural feature.<br>* `neighborhood` indicates a named neighborhood<br>* `park` indicates a named park.<br>* `plus_code` indicates an encoded location reference, derived from latitude and longitude. Plus codes can be used as a replacement for street addresses in places where they do not exist (where buildings are not numbered or streets are not named). See [https://plus.codes/](https://plus.codes/) for details.<br>* `point_of_interest` indicates a named point of interest. Typically, these "POI"s are prominent local entities that don't easily fit in another category, such as "Empire State Building" or "Eiffel Tower".<br>* `political` indicates a political entity. Usually, this type indicates a polygon of some civil administration.<br>* `postal_code` indicates a postal code as used to address postal mail within the country.<br>* `premise` indicates a named location, usually a building or collection of buildings with a common name<br>* `route` indicates a named route (such as "US 101").<br>* `street_address` indicates a precise street address.<br>* `sublocality` indicates a first-order civil entity below a locality. For some locations may receive one of the additional types: `sublocality_level_1` to `sublocality_level_5`. Each sublocality level is a civil entity. Larger numbers indicate a smaller geographic area.<br>* `subpremise` indicates a first-order entity below a named location, usually a singular building within a collection of buildings with a common name |
| `language` | [`Language1 \| undefined`](../../doc/models/language-1.md) | Query, Optional | The language in which to return results.<br><br>* See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.<br>* If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.<br>* The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.<br>* If a name is not available in the preferred language, the API uses the closest match.<br>* The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian. |
| `region` | [`Region1 \| undefined`](../../doc/models/region-1.md) | Query, Optional | The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland"). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: 200 OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GeocodingResponse`](../../doc/models/geocoding-response.md).

## Example Usage

```ts
const address = '1600 Amphitheatre+Parkway, Mountain View, CA';

const bounds: string[] = [
  '35,-100',
  '40,-110'
];

const components: string[] = [
  'street_number:1600',
  'route:Amphitheatre+Parkway',
  'locality:Mountain+View',
  'administrative_area_level_1:CA',
  'country:US'
];

const latlng = '40,-110';

const placeId = 'ChIJN1t_tDeuEmsRUsoyG83frY4';

try {
  const response = await geocodingApi.geocode(
    address,
    bounds,
    components,
    latlng,
    undefined,
    placeId
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Example Response *(as JSON)*

```json
{
  "results": [
    {
      "address_components": [
        {
          "long_name": "High Street",
          "short_name": "High St",
          "types": [
            "route"
          ]
        },
        {
          "long_name": "Hastings",
          "short_name": "Hastings",
          "types": [
            "postal_town"
          ]
        },
        {
          "long_name": "East Sussex",
          "short_name": "East Sussex",
          "types": [
            "administrative_area_level_2",
            "political"
          ]
        },
        {
          "long_name": "England",
          "short_name": "England",
          "types": [
            "administrative_area_level_1",
            "political"
          ]
        },
        {
          "long_name": "United Kingdom",
          "short_name": "GB",
          "types": [
            "country",
            "political"
          ]
        },
        {
          "long_name": "TN34",
          "short_name": "TN34",
          "types": [
            "postal_code",
            "postal_code_prefix"
          ]
        }
      ],
      "formatted_address": "High St, Hastings TN34, UK",
      "geometry": {
        "bounds": {
          "northeast": {
            "lat": 50.86038139999999,
            "lng": 0.596206
          },
          "southwest": {
            "lat": 50.8558471,
            "lng": 0.5904904
          }
        },
        "location": {
          "lat": 50.8584228,
          "lng": 0.5926006
        },
        "location_type": "GEOMETRIC_CENTER",
        "viewport": {
          "northeast": {
            "lat": 50.86038139999999,
            "lng": 0.596206
          },
          "southwest": {
            "lat": 50.8558471,
            "lng": 0.5904904
          }
        }
      },
      "place_id": "ChIJ-Ws929sa30cRKgsMNVkPyws",
      "types": [
        "route"
      ]
    }
  ],
  "status": "OK"
}
```

